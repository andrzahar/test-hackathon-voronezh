import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationDTO } from './dto/registration.dto';
import { Public } from '../auth/auth.guard';

@Controller('api/registration')
export class RegistrationController {
  constructor(private registrationService: RegistrationService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post()
  async signOn(@Body() registrationDTO: RegistrationDTO) {
    try {
      console.table(registrationDTO);
      return this.registrationService.signOn(registrationDTO);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.METHOD_NOT_ALLOWED,
          error: 'Ошибка не удалось выполнить вставку данных',
        },
        HttpStatus.METHOD_NOT_ALLOWED,
        {
          cause: error,
        },
      );
    }
  }
}
