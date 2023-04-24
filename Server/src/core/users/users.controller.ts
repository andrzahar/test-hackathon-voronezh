import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { UserDocument } from '../schemas/user.schema';
import { UsersService } from './users.service';

@Controller('api/user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('preferences')
  @HttpCode(200)
  public async updatePreference(
    @Body() body: { preferences: string[]; user: UserDocument },
  ) {
    const updateUser = body.user;
    const preferences = body.preferences;

    return this.userService.updatePreferences(updateUser, preferences);
  }
}
