import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, User } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3309,
      username: 'root',
      password: 'password123',
      database: 'laravel',
      synchronize: false,
      migrationsRun: false,
      entities: [User],
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
