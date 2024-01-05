import { BadRequestException, Injectable } from '@nestjs/common';
import { LessThan, MoreThan, Repository } from 'typeorm';
import { TripsSismaEntity } from './entities/trips-sisma.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { add, parse, sub, isAfter, differenceInMilliseconds } from 'date-fns';
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
        const scraping = new FinesWebScraping();
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
                {
                    descricao: 'Velocidade superior em até 20% até 50%',
                    placa: 'QRQ0A57 / MA',
                    situacao: 'ATIVO',
                    dataHora: '02/06/2022 às 01h53min',
                    gravidade: 'Art. 218, II / Grave - 5 pontos',
                    local: 'BR222 KM 677,300',
                    municipio: 'ACAILANDIA / MA',
                    valor: 195.23,
                    pago: true,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'PTH5770 / MA',
                    situacao: 'ATIVO',
                    dataHora: '02/08/2022 às 14h19min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR343 KM 2,160',
                    municipio: 'TERESINA / PI',
                    valor: 130.16,
                    pago: true,
                },
                {
                    descricao: 'Velocidade superior em mais de 50%',
                    placa: 'PSX2B91 / MA',
                    situacao: 'ATIVO',
                    dataHora: '10/09/2022 às 13h20min',
                    gravidade: 'Art. 218, III / Gravíssima 3X - 7 pontos',
                    local: 'BR135 KM 5,800',
                    municipio: 'SAO LUIS / MA',
                    valor: 880.41,
                    pago: true,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'PTG2H47 / MA',
                    situacao: 'ATIVO',
                    dataHora: '08/12/2022 às 08h07min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR222 KM 358,220',
                    municipio: 'SANTA INES / MA',
                    valor: 130.16,
                    pago: false,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'PSS6B72 / MA',
                    situacao: 'ATIVO',
                    dataHora: '16/12/2022 às 05h51min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR316 KM 547,000',
                    municipio: 'CAXIAS / MA',
                    valor: 130.16,
                    pago: true,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'PTX5H28 / MA',
                    situacao: 'ATIVO',
                    dataHora: '20/12/2022 às 13h58min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR343 KM 2,160',
                    municipio: 'TERESINA / PI',
                    valor: 130.16,
                    pago: false,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'PSW6C38 / MA',
                    situacao: 'ATIVO',
                    dataHora: '28/12/2022 às 12h48min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR135 KM 183,000',
                    municipio: 'SAO MATEUS DO MARANHAO / MA',
                    valor: 130.16,
                    pago: true,
                },
                {
                    descricao: 'Desobedecer às ordens emanadas da autorid compet d',
                    placa: 'QRX5I36 / MA',
                    situacao: 'ATIVO',
                    dataHora: '20/01/2023 às 11h43min',
                    gravidade: 'Art. 195 / Grave - 5 pontos',
                    local: 'BR343 KM 332,000',
                    municipio: 'TERESINA / PI',
                    valor: 195.23,
                    pago: false,
                },
                {
                    descricao: 'Deixar de adentrar às áreas destinadas à pesagem d',
                    placa: 'QRX5I36 / MA',
                    situacao: 'ATIVO',
                    dataHora: '20/01/2023 às 11h43min',
                    gravidade: 'Art. 209 / Grave - 5 pontos',
                    local: 'BR343 KM 332,000',
                    municipio: 'TERESINA / PI',
                    valor: 195.23,
                    pago: false,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'PTF6C49 / MA',
                    situacao: 'ATIVO',
                    dataHora: '21/01/2023 às 14h01min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR316 KM 548,500',
                    municipio: 'CAXIAS / MA',
                    valor: 130.16,
                    pago: false,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'PTX5J88 / MA',
                    situacao: 'ATIVO',
                    dataHora: '28/02/2023 às 09h24min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR135 KM 5,600',
                    municipio: 'SAO LUIS / MA',
                    valor: 130.16,
                    pago: false,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'PTX5J88 / MA',
                    situacao: 'ATIVO',
                    dataHora: '05/03/2023 às 17h16min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR222 KM 358,220',
                    municipio: 'SANTA INES / MA',
                    valor: 130.16,
                    pago: false,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'PSW5G89 / MA',
                    situacao: 'ATIVO',
                    dataHora: '08/03/2023 às 19h30min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR101 KM 168,050',
                    municipio: 'CONCEICAO DO JACUIPE / BA',
                    valor: 130.16,
                    pago: false,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'PTF6C49 / MA',
                    situacao: 'ATIVO',
                    dataHora: '23/03/2023 às 08h22min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR222 KM 358,220',
                    municipio: 'SANTA INES / MA',
                    valor: 130.16,
                    pago: false,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'PTX1B60 / MA',
                    situacao: 'ATIVO',
                    dataHora: '31/03/2023 às 07h14min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR135 KM 93,000',
                    municipio: 'ITAPECURU MIRIM / MA',
                    valor: 130.16,
                    pago: false,
                },
                {
                    descricao: 'Multa, por não identificação do condutor infrator, imposta à pessoa jurídica',
                    placa: 'PTF6C49 / MA',
                    situacao: 'ATIVO',
                    dataHora: '10/05/2023 às 09h00min',
                    gravidade: '257, § 8º',
                    local: 'SAN, QD 3 BL A - ED NUCLEO DOS TRANSPORTES',
                    municipio: 'BRASILIA / DF',
                    valor: 260.32,
                    pago: false,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'QRP5B47 / MA',
                    situacao: 'ATIVO',
                    dataHora: '23/05/2023 às 01h33min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR135 KM 21,15',
                    municipio: 'SAO LUIS / MA',
                    valor: 130.16,
                    pago: false,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'QRX5I56 / MA',
                    situacao: 'ATIVO',
                    dataHora: '04/07/2023 às 01h06min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR135 KM 93',
                    municipio: 'ITAPECURU MIRIM / MA',
                    valor: 130.16,
                    pago: false,
                },
                {
                    descricao: 'Multa, por não identificação do condutor infrator, imposta à pessoa jurídica',
                    placa: 'QRP5B47 / MA',
                    situacao: 'ATIVO',
                    dataHora: '12/07/2023 às 09h00min',
                    gravidade: '257, § 8º',
                    local: 'SAN, QD 3 BL A - ED NUCLEO DOS TRANSPORTES',
                    municipio: 'BRASILIA / DF',
                    valor: 260.32,
                    pago: false,
                },
                {
                    descricao: 'Multa, por não identificação do condutor infrator, imposta à pessoa jurídica',
                    placa: 'QRX5I56 / MA',
                    situacao: 'ATIVO',
                    dataHora: '23/08/2023 às 09h00min',
                    gravidade: '257, § 8º',
                    local: 'SAN, QD 3 BL A - ED NUCLEO DOS TRANSPORTES',
                    municipio: 'BRASILIA / DF',
                    valor: 260.32,
                    pago: false,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'QRQ0A57 / MA',
                    situacao: 'ATIVO',
                    dataHora: '25/08/2023 às 15h11min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR222 KM 358,22',
                    municipio: 'SANTA INES / MA',
                    valor: 130.16,
                    pago: false,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'PTI4D25 / MA',
                    situacao: 'ATIVO',
                    dataHora: '07/09/2023 às 08h29min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR343 KM 3,8',
                    municipio: 'TERESINA / PI',
                    valor: 130.16,
                    pago: false,
                },
                {
                    descricao: 'Multa, por não identificação do condutor infrator, imposta à pessoa jurídica',
                    placa: 'QRQ0A57 / MA',
                    situacao: 'ATIVO',
                    dataHora: '18/10/2023 às 09h00min',
                    gravidade: '257, § 8º',
                    local: 'SAN, QD 3 BL A - ED NUCLEO DOS TRANSPORTES',
                    municipio: 'BRASILIA / DF',
                    valor: 260.32,
                    pago: false,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'PTH0G41 / MA',
                    situacao: 'ATIVO',
                    dataHora: '06/11/2023 às 18h58min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR316 KM 547',
                    municipio: 'CAXIAS / MA',
                    valor: 130.16,
                    pago: false,
                },
                {
                    descricao: 'Multa, por não identificação do condutor infrator, imposta à pessoa jurídica',
                    placa: 'PTI4D25 / MA',
                    situacao: 'ATIVO',
                    dataHora: '08/11/2023 às 09h00min',
                    gravidade: '257, § 8º',
                    local: 'SAN, QD 3 BL A - ED NUCLEO DOS TRANSPORTES',
                    municipio: 'BRASILIA / DF',
                    valor: 260.32,
                    pago: false,
                },
                {
                    descricao: 'Velocidade superior em até 20% até 50%',
                    placa: 'QRU9E66 / MA',
                    situacao: 'ATIVO',
                    dataHora: '09/11/2023 às 13h27min',
                    gravidade: 'Art. 218, II / Grave - 5 pontos',
                    local: 'BR135 KM 408,6',
                    municipio: 'REDENCAO DO GURGUEIA / PI',
                    valor: 195.23,
                    pago: false,
                },
                {
                    descricao: 'Velocidade superior em até 20%',
                    placa: 'QRU9E66 / MA',
                    situacao: 'ATIVO',
                    dataHora: '07/12/2023 às 15h45min',
                    gravidade: 'Art. 218, I / Média - 4 pontos',
                    local: 'BR135 KM 408,6',
                    municipio: 'REDENCAO DO GURGUEIA / PI',
                    valor: 130.16,
                    pago: false,
                },
            ];

            const data: { plate: string; trip: TripsSismaEntity; fine: IFineScrapingReq }[] = [];

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
