import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { RegistrationDTO } from './dto/registration.dto';
import { validateOrReject } from "class-validator";

@Injectable()
export class RegistrationService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  public async signOn(registrationDTO: RegistrationDTO) {
    await validateOrReject(registrationDTO);
    const user = await this.usersService.create(registrationDTO);
    const payload = {
      login: user.login,
      sub: user.id,
      pass: user.password,
      phone: user.telephone,
    };
    return await this.jwtService.signAsync(payload);
  }
}
