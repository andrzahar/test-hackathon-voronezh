import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { Registration } from './dto/registration.dto';

@Controller('users')
export class UsersController {
  @Post('registration')
  async registration(@Body() registrationDTO: Registration) {
    try {
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Ошибка не удалось выполнить вставку данных',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
