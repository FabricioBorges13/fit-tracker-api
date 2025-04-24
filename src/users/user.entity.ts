import { Checkin } from "src/checkins/checkin.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Checkin, (checkin) => checkin.user)
    checkins: Checkin[];
}