import puppeteer from 'puppeteer';
import { IFineScrapingRes } from '../interfaces';
import { mapTransfomerWebScrapingRes } from '../transformers';

export class FinesWebScraping {
    async execute(): Promise<IFineScrapingRes[]> {
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--disable-component-cloud-management'],
        });

        try {
            const page = await browser.newPage();

            await page.goto(process.env.GOV_URL);

            await page.type('#username', process.env.GOV_USERNAME);
            await page.type('#password', process.env.GOV_PASSWORD);

            const buttonLogin: any = await page.$x('//*[@id="app"]/div[3]/div/div/form[2]/div[4]/button');

            await buttonLogin[0].click();

            await new Promise((resolve) => setTimeout(resolve, 2000));

            while (true) {
                const xpath = '/html/body/div/div[3]/div[3]/div[3]/div/button';
                const button: any = await page.$x(xpath);

                if (button.length === 0) {
                    break;
                }

                await button[0].click();
                await new Promise((resolve) => setTimeout(resolve, 2000));
            }

            const xpath = '//*[@id="app"]/div[3]/div[3]/div[1]/div';
            const elements = await page.$x(xpath);

            if (elements.length === 0) {
                await browser.close();
                return;
            }

            const outerDiv = elements[0];

            const result = await outerDiv.$$eval('.row.no-gutters.row-grid.table-cell.mb-3', (divs) => {
                const resultArray = [];

                for (const div of divs) {
                    const spans = div.querySelectorAll('span');
                    const spanValues = Array.from(spans).map((span: any) => span.textContent);

                    resultArray.push(spanValues);
                }

                return resultArray;
            });

            await browser.close();

            return this.organize(result);
        } catch (err) {
            await browser.close();
        }
    }

    private organize(scrapings: string[][]): any {
        const fines: IFineScrapingRes[] = [];

        for (const scraping of scrapings) {
            const value = mapTransfomerWebScrapingRes(scraping);
            fines.push(value);
        }

        return fines;
    }
}
