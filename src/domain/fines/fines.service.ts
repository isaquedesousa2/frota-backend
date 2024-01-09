import { BadRequestException, Injectable } from '@nestjs/common';
import { LessThan, MoreThan, Repository } from 'typeorm';
import { TripsSismaEntity } from './entities/trips-sisma.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { add, parse, sub, differenceInMilliseconds } from 'date-fns';
import { mapTransformerFines } from './transformers';
import { FinesWebScraping } from './web-scraping';
import { IFineScrapingRes } from './interfaces';

@Injectable()
export class FinesService {
    constructor(
        @InjectRepository(TripsSismaEntity)
        private readonly tripsSismaRepository: Repository<TripsSismaEntity>,
    ) {}

    async getFines() {
        const scraping = new FinesWebScraping();
        try {
            const fines = await scraping.execute();

            const data: { plate: string; trip: TripsSismaEntity; fine: IFineScrapingRes }[] = [];

            for (const fine of fines) {
                const plate = fine.placa.split(' / ')[0];
                const date = fine.dataHora.split(' às ')[0];
                const formattedDate = parse(date, 'dd/MM/yyyy', new Date());
                const startDate = sub(formattedDate, { days: 10 });
                const endDate = add(formattedDate, { days: 10 });

                if (!data[plate]) data[plate] = [];

                const res = await this.tripsSismaRepository.find({
                    where: {
                        equipament: {
                            PLACAATUAL: plate,
                        },
                        DATAHORAPARTIDA: MoreThan(startDate),
                        DATAHORACHEGADA: LessThan(endDate),
                    },
                });

                let trip: TripsSismaEntity | null = null;
                let minDifference = Infinity;

                res.forEach((item) => {
                    const start = item.DATAHORAPARTIDA;
                    const end = item.DATAHORACHEGADA;

                    const startDifference = Math.abs(differenceInMilliseconds(formattedDate, start));
                    const endDifference = Math.abs(differenceInMilliseconds(formattedDate, end));

                    const closestDifference = Math.min(startDifference, endDifference);

                    if (closestDifference < minDifference) {
                        minDifference = closestDifference;
                        trip = item;
                    }
                });

                data.push({
                    plate,
                    trip,
                    fine,
                });
            }

            return mapTransformerFines(data);
        } catch (e) {
            throw new BadRequestException(e.message);
        }
    }
}
