import { PrimaryColumn, Column, Entity } from "typeorm";

@Entity("user_info")
export class User{
    @PrimaryColumn({ type: "varchar", length: 255, unique: true })
    id: String;

    @Column()
    password: String;

    @Column()
    name: String;
}