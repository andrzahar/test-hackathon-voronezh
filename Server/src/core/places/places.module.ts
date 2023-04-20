import { Module } from '@nestjs/common';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { ConfigService } from "@nestjs/config";

@Module({
  controllers: [PlacesController],
  providers: [PlacesService, ConfigService],
  exports: [PlacesService],
})
export class PlacesModule {}
