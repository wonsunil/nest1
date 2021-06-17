import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from "./Model/User";
import { UserModule } from './Module/UserModule';
import { SessionModule } from "nestjs-session";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "test",
    entities: [User],
  }),
  UserModule,
  SessionModule.forRoot({
    session: { secret: "my-secret" }
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
