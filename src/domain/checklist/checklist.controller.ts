import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ChecklistService } from './checklist.service';
import { JwtAuthGuard } from '../../guards';
import { CreateChecklistProcessDTO } from './dto/create-checklist-process.dto';
import { CreateChecklistFormDTO } from './dto/create-checklist-form.dto';
import { IPaginationDTO } from '../../shared/pagination/paginate.interface';
import { IChecklistFilters } from './interfaces/checklist-filters.interface';

@UseGuards(JwtAuthGuard)
@Controller('/api/v1/fluig/checklist')
export class CheckListController {
    constructor(private readonly service: ChecklistService) {}

    @Post('/requests')
    async createProcess(@Body() body: CreateChecklistProcessDTO) {
        return this.service.createProcess(body);
    }

    @Post('/requests/form')
    async createForm(@Body() body: CreateChecklistFormDTO) {
        return this.service.createForm(
            {
                description: 'error',
                status: true,
            },
            body,
        );
    }

    @Get('/requests')
    async findAll(@Query() filters: IChecklistFilters, @Query() paginationOptions: IPaginationDTO) {
        return this.service.findAll(filters, paginationOptions);
    }

    @Get('/requests/form/:id')
    async showForm(@Param('id') id: string) {
        return this.service.showForm(+id);
    }

    @Get('/requests/historic')
    async findAllHistoric(@Query() filters: IChecklistFilters, @Query() paginationOptions: IPaginationDTO) {
        return this.service.findAllHistoric(filters, paginationOptions);
    }
}
