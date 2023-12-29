import { BadRequestException, Injectable } from '@nestjs/common';
import { LessThan, MoreThan, Repository } from 'typeorm';
import { TripsSismaEntity } from './entities/trips-sisma.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { add, parse, sub } from 'date-fns';
import { mapTransformerFines } from './transformers';
import { FinesWebScraping } from './web-scraping';
import { IFineScrapingReq } from './interfaces';

@Injectable()
export class FinesService {
    constructor(
        @InjectRepository(TripsSismaEntity)
        private readonly tripsSismaRepository: Repository<TripsSismaEntity>,
    ) {}

    async getFines() {
        const fines = new FinesWebScraping();
        try {
            const fines: IFineScrapingReq[] = [
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'PSP3222 / MA',
                    situacao: 'ENCERRADO',
                    dataHora: '15/12/2020 às 07h44min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR135 KM 56,100',
                    municipio: 'BACABEIRA / MA',
                    valor: 130.16,
                    pago: true,
                },
                {
                    descricao: 'Velocidade superior em até 20% até 50%',
                    placa: 'PSO7548 / MA',
                    situacao: 'ENCERRADO',
                    dataHora: '19/01/2021 às 15h45min',
                    gravidade: 'Art. 218, II / Grave - 5 pontos',
                    local: 'BR135 KM 56,100',
                    municipio: 'BACABEIRA / MA',
                    valor: 195.23,
                    pago: true,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'PSP7627 / MA',
                    situacao: 'ENCERRADO',
                    dataHora: '02/10/2021 às 12h35min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR343 KM 267,500',
                    municipio: 'CAMPO MAIOR / PI',
                    valor: 130.16,
                    pago: true,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'PSO7548 / MA',
                    situacao: 'ENCERRADO',
                    dataHora: '09/04/2022 às 11h23min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR135 KM 93,000',
                    municipio: 'ITAPECURU MIRIM / MA',
                    valor: 130.16,
                    pago: true,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'QRX5I36 / MA',
                    situacao: 'ENCERRADO',
                    dataHora: '10/05/2022 às 04h26min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR316 KM 58,400',
                    municipio: 'MONSENHOR GIL / PI',
                    valor: 130.16,
                    pago: true,
                },
            ];

            const data: { plate: string; trip: TripsSismaEntity; fine: IFineScrapingReq }[] = [];

            for (const fine of fines) {
                const plate = fine.placa.split(' / ')[0];
                const date = fine.dataHora.split(' às ')[0];
                const formattedDate = parse(date, 'dd/MM/yyyy', new Date());
                const startDate = sub(formattedDate, { days: 3 });
                const endDate = add(formattedDate, { days: 3 });

                if (!data[plate]) data[plate] = [];

                const trip = await this.tripsSismaRepository.findOne({
                    where: {
                        equipament: {
                            PLACAATUAL: plate,
                        },
                        DATAHORAPARTIDA: MoreThan(startDate),
                        DATAHORACHEGADA: LessThan(endDate),
                    },
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
