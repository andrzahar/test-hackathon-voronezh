import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/signIn.dto';
import { validateOrReject } from 'class-validator';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(signingDTO: SignInDto): Promise<string> {
    await validateOrReject(signingDTO);
    const user = await this.usersService.findOneByLogin(signingDTO.login);
    if (user?.password !== signingDTO.password) {
      throw new UnauthorizedException();
    }
    const payload = {
      login: user.login,
      sub: user.id,
      pass: user.password,
      phone: user.telephone,
    };
    return await this.jwtService.signAsync(payload);
  }
}
