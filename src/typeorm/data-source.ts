import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

const dataSource = new DataSource({
    name: process.env.SGM_NAME,
    type: process.env.SGM_TYPE as any,
    host: process.env.SGM_HOST,
    port: parseInt(process.env.SGM_PORT),
    username: process.env.SGM_USERNAME,
    password: process.env.SGM_PASSWORD,
    database: process.env.SGM_DATABASE,
    schema: process.env.SGM_SCHEMA,
    migrations: [`${__dirname}/migrations/*.ts`],
});

export default dataSource;
