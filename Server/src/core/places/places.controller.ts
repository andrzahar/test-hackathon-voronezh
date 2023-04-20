import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('api/places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get(':cityName')
  public getPlacesInfo(@Param('cityName') cityName: string) {
    try {
      return this.placesService.searchPlaces(cityName);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.METHOD_NOT_ALLOWED,
          error: 'Ошибка не удалось получить данные по городу',
        },
        HttpStatus.METHOD_NOT_ALLOWED,
        {
          cause: error,
        },
      );
    }
  }
}
