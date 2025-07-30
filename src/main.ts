import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // 🔥 Це вмикає перетворення типів
      transformOptions: {
        enableImplicitConversion: true, // 🔥 Це дозволяє class-transformer автоматично конвертувати
      },
    }),
  );
  await app.listen(process.env.PORT);
}
bootstrap();
