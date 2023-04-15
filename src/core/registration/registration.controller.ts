import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationDTO } from './dto/registration.dto';

@Controller('registration')
export class RegistrationController {
  constructor(private registrationService: RegistrationService) {}

  @Post()
  async signOn(@Body() registrationDTO: RegistrationDTO) {
    try {
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
