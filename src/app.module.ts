import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "./Model/User";
import { UserModule } from './Module/UserModule';
import { UserController } from './Controller/userController';
import { UserService } from './Service/UserService';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "test",
    entities: [User],
  }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
