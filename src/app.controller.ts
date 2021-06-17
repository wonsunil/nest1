import { Controller, Get, Redirect, Session } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  @Redirect("/index")
  index() {};

  @Get("/index")
  indexPage(@Session() session) {
    return this.appService.getHello();
  };
}
