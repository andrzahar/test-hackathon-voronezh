import { Module } from '@nestjs/common';
import { AuthModule } from './core/auth/auth.module';
import { UsersModule } from './core/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import configuration from './core/config/configuration';
import { JwtModule } from '@nestjs/jwt';
import { RegistrationModule } from './core/registration/registration.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './core/auth/auth.guard';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    RegistrationModule,
    MongooseModule.forRoot(
      `mongodb://${process.env.DATABASE_LOCAL_DOMAIN}:${process.env.DATABASE_LOCAL_PORT}`,
      {
        dbName: process.env.DATABASE_NAME,
      },
    ),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET,
      signOptions: { expiresIn: '1 d' },
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
