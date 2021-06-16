import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../Model/User";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {};

    findById(id: String): Promise<User> {
        return this.userRepository.findOne({ id });
    };

    async login(id: String, password: String): Promise<User> {
        const users = await this.userRepository.find();
        
        return users.find(user => user.id === id && user.password === password);
    };

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    };

    async insert(user: User) {
        await this.userRepository.save(user);
    };
};