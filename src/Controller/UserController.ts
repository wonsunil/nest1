import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { UserService } from '../Service/UserService';
import { User } from "../Model/User";

@Controller("user")
export class UserController{
    constructor(private readonly userService: UserService) {};

    @Get("/users")
    getUsers(): Promise<User[]> {
        return this.userService.findAll();
    };

    @Get("/:id")
    getUser(@Param("id") id: String) {
        return this.userService.findById(id);
    };

    @Post("register")
    insert(@Body() user: User) {
        this.userService.insert(user);
    };
}