import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ChecklistService } from './checklist.service';
import { JwtAuthGuard } from '../../guards';
import { CreateChecklistProcessDTO } from './dto/create-checklist-process.dto';
import { CreateChecklistFormDTO } from './dto/create-checklist-form.dto';
import { IPaginationDTO } from '../../shared/pagination/paginate.interface';

@UseGuards(JwtAuthGuard)
@Controller('/api/v1/checklist')
export class CheckListController {
    constructor(private readonly service: ChecklistService) {}

    @Post('/process')
    async createProcess(@Body() body: CreateChecklistProcessDTO) {
        return this.service.createProcess(body);
    }

    @Post('/process/form')
    async createForm(@Body() body: CreateChecklistFormDTO) {
        return this.service.createForm(
            {
                description: 'error',
                status: true,
            },
            body,
        );
    }

    @Get('/process')
    async findAll(@Query() paginationOptions: IPaginationDTO) {
        return this.service.findAll(paginationOptions);
    }
}
