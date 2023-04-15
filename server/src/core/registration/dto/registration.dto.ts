import { IsNotEmpty } from 'class-validator';

export class RegistrationDTO {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  telephone: string;
  @IsNotEmpty()
  login: string;
}
