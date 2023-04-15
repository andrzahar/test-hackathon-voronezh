import { Injectable } from '@nestjs/common';
import { User, UserDocument } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { RegistrationDTO } from '../registration/dto/registration.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
  ) {}

  async findOneByLogin(login): Promise<UserDocument> {
    return this.usersModel.findOne({ login: login }).exec();
  }

  async create(registrationDTO: RegistrationDTO): Promise<UserDocument> {
    const user = new this.usersModel();

    const { name, password, telephone, login } = registrationDTO;
    user.name = name;
    user.password = password;
    user.login = login;
    user.telephone = telephone;

    const existing = await this.usersModel.findOne({
      login: registrationDTO.login,
      name: registrationDTO.name,
      telephone: registrationDTO.telephone,
    });

    if (existing) {
      return existing;
    }
    return user.save();
  }
}
