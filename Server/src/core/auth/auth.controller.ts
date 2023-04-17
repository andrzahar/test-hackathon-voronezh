import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signIn.dto';
import { Public } from "./auth.guard";

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post()
  @Public()
  async signIn(@Body() signInDTO: SignInDto) {
    try {
      return await this.authService.signIn(signInDTO);
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
