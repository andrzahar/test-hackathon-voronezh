import { Injectable } from '@nestjs/common';
import { User, UserDocument } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RegistrationDTO } from '../registration/dto/registration.dto';
import {
  UserErrorFoundException,
  UserErrorLoginException,
  UserErrorPhoneException,
} from '../error/user-error.exception';
import { validateOrReject } from 'class-validator';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
  ) {}

  public async findOneByLogin(login): Promise<UserDocument> {
    const user = await this.usersModel.findOne({ login: login }).exec();
    if (!user) {
      throw new UserErrorFoundException();
    }
    return user;
  }

  public async create(registrationDTO: RegistrationDTO): Promise<UserDocument> {
    await validateOrReject(registrationDTO);
    const user = new this.usersModel();

    const { name, password, telephone, login } = registrationDTO;
    user.name = name;
    user.password = password;
    user.login = login;
    user.telephone = telephone;

    const [existing, existingLogin, existingPhone] = await Promise.all([
      this.usersModel.findOne({
        login: registrationDTO.login,
        name: registrationDTO.name,
        telephone: registrationDTO.telephone,
      }),
      this.usersModel.findOne({ login: registrationDTO.login }),
      this.usersModel.findOne({ telephone: registrationDTO.telephone }),
    ]);

    if (existingLogin) {
      throw new UserErrorLoginException();
    }

    if (existingPhone) {
      throw new UserErrorPhoneException();
    }

    if (existing) {
      return existing;
    }

    return user.save();
  }
}
