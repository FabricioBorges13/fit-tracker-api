import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Checkin } from "./checkin.entity";
import { User } from "src/users/user.entity";

@Injectable()
export class CheckinsService {
    constructor(
        @InjectRepository(Checkin)
        private readonly checkinsRepo: Repository<Checkin>,
    ) { }

    async create(data: { weight, notes, photoUrl, createdAt}) {
        data.createdAt = new Date();
        const user = this.checkinsRepo.create(data);
        return await this.checkinsRepo.save(user);
    }

    async findByUser(user: User) {
        return this.checkinsRepo.findOne({ where: { user } });
    }

    async findById(id: string) {
        return this.checkinsRepo.findOne({ where: { id } });
    }
}