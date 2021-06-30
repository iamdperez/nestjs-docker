import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Movie } from './models/movie.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/movies')
  getMovies(): Movie[] {
    return this.appService.getMovies();
  }
}
