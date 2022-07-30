import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Gender } from "../enums/Gender";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
        type: "text"
    })
    email: string

    @Column({
        length: 20,
        type: "text"
    })
    nickname: string

    @Column("int")
    gender: Gender.MALE | Gender.FEMALE | Gender.OTHER

    @Column("bool")
    active: boolean
}
