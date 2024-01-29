import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { SismaService } from './sisma.service';
import { JwtAuthGuard } from '../../guards';
import { CreateTravelDTO } from './dto/travel';
import { CreateChecklistFormDTO } from '../checklist/dto';

@UseGuards(JwtAuthGuard)
@Controller('/api/v1/sisma')
export class SismaController {
    constructor(private readonly sismaService: SismaService) {}

    @Post('/travel')
    async createTravel(@Body() data: CreateChecklistFormDTO) {
        return this.sismaService.createTravel(data);
    }
}
