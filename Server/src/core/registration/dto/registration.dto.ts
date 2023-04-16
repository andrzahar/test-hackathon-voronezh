import { IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class RegistrationDTO {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  @IsPhoneNumber()
  telephone: string;
  @IsNotEmpty()
  login: string;
}
