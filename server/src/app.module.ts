import { Module } from '@nestjs/common';
import { AuthModule } from './core/auth/auth.module';
import { UsersModule } from './core/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import configuration from './core/config/configuration';
import { JwtModule } from '@nestjs/jwt';
import { RegistrationModule } from './core/registration/registration.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    RegistrationModule,
    MongooseModule.forRoot('mongodb://localhost:27017/', {
      dbName: process.env.DATABASE_NAME,
    }),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET,
      signOptions: { expiresIn: '60 s' },
    }),
  ],
})
export class AppModule {}
