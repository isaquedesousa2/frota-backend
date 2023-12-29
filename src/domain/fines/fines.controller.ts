import { Controller, Get } from '@nestjs/common';
import { FinesService } from './fines.service';

@Controller('multas')
export class FinesController {
    constructor(private readonly service: FinesService) {}

    @Get()
    async getFines() {
        return await this.service.getFines();
    }
}
