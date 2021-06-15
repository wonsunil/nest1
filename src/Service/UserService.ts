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

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    };

    async insert(user: User) {
        await this.userRepository.save(user);
    };
};