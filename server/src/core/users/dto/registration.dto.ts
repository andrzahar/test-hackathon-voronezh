import { IsNotEmpty } from 'class-validator';

export class Registration {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  phone: string;
}
