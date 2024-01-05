import { Controller, Get, UseGuards } from '@nestjs/common';
import { FinesService } from './fines.service';
import { JwtAuthGuard } from '../../guards';

@UseGuards(JwtAuthGuard)
@Controller('multas')
export class FinesController {
    constructor(private readonly service: FinesService) {}

    @Get()
    getFines() {
        return this.service.getFines();
    }
}
