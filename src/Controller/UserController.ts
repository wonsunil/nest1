import { Controller, Get, Post, Body, Param, Render, Req } from "@nestjs/common";
import { Request } from "express";
import { UserService } from '../Service/UserService';
import { User } from "../Model/User";

@Controller("user")
export class UserController{
    constructor(private readonly userService: UserService) {};

    @Get("/register")
    @Render("user/register")
    registerPage(): void{};

    @Get("/login")
    @Render("user/login")
    loginPage(): void {};

    @Get("/users")
    getUsers(): Promise<User[]> {
        return this.userService.findAll();
    };

    @Get("/:id")
    getUser(@Param("id") id: String) {
        return this.userService.findById(id);
    };

    @Post("/register")
    insert(@Body() user: User) {
        this.userService.insert(user);
    };

    @Post("/login")
    async login(@Req() req: Request) {
        console.log(await this.userService.login(req.body.id, req.body.password));

    };
}