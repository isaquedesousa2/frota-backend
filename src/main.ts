import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from '@nestjs/class-validator';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        logger: ['error', 'log', 'warn'],
    });
    app.useGlobalPipes(
        new ValidationPipe({
            exceptionFactory: (validationErrors: ValidationError[] = []) => {
                return new BadRequestException(
                    validationErrors.map((error) => ({
                        field: error.property,
                        error: Object.values(error.constraints).join(', '),
                    })),
                );
            },
        }),
    );

    await app.listen(+process.env.APP_PORT);
}
bootstrap();
