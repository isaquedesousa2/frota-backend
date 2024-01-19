import { IsNumber } from '@nestjs/class-validator';

export class CreateChecklistProcessDTO {
    @IsNumber()
    fluigCode: number;
}
