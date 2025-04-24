import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly usersRepo: Repository<User>,
    ) { }

    async create(data: { email: string; password: string }) {
        const user = this.usersRepo.create(data);
        return await this.usersRepo.save(user);
    }

    async findByEmail(email: string) {
        return this.usersRepo.findOne({ where: { email } });
    }

    async findById(id: string) {
        return this.usersRepo.findOne({ where: { id } });
    }

    async findUsers() {
        return this.usersRepo.find();
    }
}