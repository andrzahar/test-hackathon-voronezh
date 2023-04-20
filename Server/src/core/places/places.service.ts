import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PlacesService {
  constructor(private configService: ConfigService) {}

  private readonly API_KEY = this.configService.get<string>('PLACES_API_KEY');

  async searchPlaces(cityName: string): Promise<any> {
    const apiUrl = `https://api.foursquare.com/v2/venues/explore?near=${cityName}&client_id=${this.API_KEY}&client_secret=${this.API_KEY}&v=20220420`;
    const response = await axios.get(apiUrl);
    return response.data.response.groups[0].items.map((item: any) => ({
      name: item.venue.name,
      location: item.venue.location,
      categories: item.venue.categories.map((category: any) => ({
        name: category.name,
        icon: category.icon.prefix + 'bg_64' + category.icon.suffix,
      })),
    }));
  }
}
