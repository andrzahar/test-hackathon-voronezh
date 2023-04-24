import { Test, TestingModule } from '@nestjs/testing';
import { RegistrationController } from './registration.controller';
import { UsersModule } from '../users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MongooseConfigService } from '../config/MongooseConfigService';
import configuration from '../config/configuration';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../auth/auth.guard';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { RegistrationDTO } from './dto/registration.dto';
import { Model } from 'mongoose';
import { UserDocument } from '../schemas/user.schema';
import { RegistrationService } from './registration.service';

describe('RegistrationController', () => {
  let app: INestApplication;
  let userDocument: Model<UserDocument>;

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
      controllers: [RegistrationController],
      providers: [
        RegistrationService,
        {
          provide: APP_GUARD,
          useClass: AuthGuard,
        },
      ],
    }).compile();

    app = module.createNestApplication();
    userDocument = module.get<Model<UserDocument>>('UserModel');
    await app.init();
  });

  it('POST /api/registration code 200', async () => {
    const post: RegistrationDTO = new RegistrationDTO();
    post.login = 'login4';
    post.password = 'password4';
    post.telephone = '+79554510703';
    post.name = 'Andrew';
    await request(app.getHttpServer())
      .post('/api/registration')
      .send(post)
      .expect(200);

    await userDocument.deleteOne(post);
  });

  it('POST /api/registration code 409', async () => {
    const post: RegistrationDTO = new RegistrationDTO();
    post.login = 'login';
    await request(app.getHttpServer())
      .post('/api/registration')
      .send(post)
      .expect(409);
  });
});
