import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Column,
  createQueryBuilder,
  Entity,
  getConnection,
  PrimaryGeneratedColumn,
  Repository,
} from 'typeorm';
import { Movie } from './models/movie.model';

export enum UserType {
  b2b = 'b2b',
  b2c = 'b2c',
}

export enum Zoom_acces {
  chat_only = 'chat_only',
  chat_and_zoom = 'chat_and_zoom',
}
@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;
}
@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
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

  async getUsers(): Promise<any> {
    const users = await createQueryBuilder('users').getMany();
    return users;
  }
}
