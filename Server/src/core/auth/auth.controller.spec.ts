import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { SignInDto } from './dto/signIn.dto';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MongooseConfigService } from '../config/MongooseConfigService';
import configuration from '../config/configuration';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

describe('AuthController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        UsersModule,
        MongooseModule.forRootAsync({
          imports: [ConfigModule],
          useClass: MongooseConfigService,
        }),
        ConfigModule.forRoot({
          envFilePath: '.env',
          load: [configuration],
        }),
        JwtModule.register({
          global: true,
          secret: process.env.SECRET,
          signOptions: { expiresIn: '1 d' },
        }),
      ],
      controllers: [AuthController],
      providers: [
        AuthService,
        {
          provide: APP_GUARD,
          useClass: AuthGuard,
        },
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('/api/auth Sign in user', () => {
    const post: SignInDto = new SignInDto();
    post.login = 'login';
    post.password = 'password';
    return request(app.getHttpServer())
      .post('/api/auth')
      .send(post)
      .expect(200);
  });

  it('/api/auth Error sign user', () => {
    const post: SignInDto = new SignInDto();
    post.login = 'login';
    return request(app.getHttpServer())
      .post('/api/auth')
      .send(post)
      .expect(405);
  });
});
