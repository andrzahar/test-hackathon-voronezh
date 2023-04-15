import { Module } from '@nestjs/common';
import { AuthModule } from './core/auth/auth.module';
import { UsersModule } from './core/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import configuration from './core/config/configuration';
import { JwtModule } from '@nestjs/jwt';
import process from 'process';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/'),
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
