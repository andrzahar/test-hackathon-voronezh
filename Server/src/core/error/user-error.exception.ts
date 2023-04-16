import { HttpException, HttpStatus } from '@nestjs/common';

export class UserErrorLoginException extends HttpException {
  constructor() {
    super('This login is already taken, field: user', HttpStatus.BAD_REQUEST);
  }
}

export class UserErrorPhoneException extends HttpException {
  constructor() {
    super('Such a phone is already in use, field: user', HttpStatus.BAD_REQUEST);
  }
}

export class UserErrorFoundException extends HttpException {
  constructor() {
    super('User not found, field: user', HttpStatus.NOT_FOUND);
  }
}
