import { IsNotEmpty } from 'class-validator';

export class SignInDto {
  @IsNotEmpty()
  login: string;
  @IsNotEmpty()
  password: string;
}
