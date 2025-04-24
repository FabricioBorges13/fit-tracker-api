import { User } from "src/users/user.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Checkin {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('decimal')
    weight: number;

    @Column({ nullable: true})
    notes: string;

    @Column({ nullable: true})
    photoUrl: string;

    @CreateDateColumn()
    createdAt : Date;

    @ManyToOne(() => User, (user) => user.checkins)
    user: User;
}