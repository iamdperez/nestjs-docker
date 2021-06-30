import { Injectable } from '@nestjs/common';
import { Movie } from './models/movie.model';

@Injectable()
export class AppService {
  private movies: Movie[] = [
    { id: 1, name: 'Star Wars: The Force Awakens', year: 2015 },
    { id: 2, name: 'Star Wars: The Last Jedi', year: 2017 },
    { id: 3, name: 'Star Wars: The Rise of Skywalker', year: 2019 },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getMovies(): Movie[] {
    return this.movies;
  }
}
