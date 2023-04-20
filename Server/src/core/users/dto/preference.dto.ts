import { Prop } from '@nestjs/mongoose';

export class PreferenceDto {
  @Prop({ required: true })
  preference: string[];
}
