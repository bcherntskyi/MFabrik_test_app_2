import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { getConnection } from 'typeorm';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
    const conn = getConnection();
    
    await app.listen(3000);
    await conn.runMigrations();
}

bootstrap();
