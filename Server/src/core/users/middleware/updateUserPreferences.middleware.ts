import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users.service';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request } from 'express';

@Injectable()
export class UpdateUserPreferencesMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization.split(' ')[1];
    const { login: login } = this.jwtService.decode(token) as any;

    // Найти пользователя в базе данных по логину
    const user = await this.usersService.findOneByLogin(login);

    // Обновить предпочтения пользователя
    user.preference = req.body.preferences;

    // Добавить информацию о пользователе в объект запроса
    req.body.user = user;

    next();
  }
}
