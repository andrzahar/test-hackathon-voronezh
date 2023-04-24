import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  const uri = process.env.MONGODB_URL;
  console.log(uri);
  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

bootstrap();
