import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const dataSource = new DataSource({
    name: process.env.FROTA_NAME,
    type: process.env.FROTA_TYPE as any,
    host: process.env.FROTA_HOST,
    port: parseInt(process.env.FROTA_PORT),
    username: process.env.FROTA_USERNAME,
    password: process.env.FROTA_PASSWORD,
    database: process.env.FROTA_DATABASE,
    schema: process.env.FROTA_SCHEMA,
    migrations: [`${__dirname}/migrations/*.ts`],
});

export default dataSource;
