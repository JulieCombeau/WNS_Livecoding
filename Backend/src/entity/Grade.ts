import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Wilder } from "./Wilder"
import { Skill } from "./Skill"

@Entity()
export class Grade {
@PrimaryGeneratedColumn()
id: number

@Column({default: 1})
votes: number

@Column()
wilderId: number

@Column()
skillId: number

@ManyToOne(() => Wilder, (w) => w.grades, {onDelete: 'CASCADE'})
wilder: Wilder;

@ManyToOne(() => Skill, (s) => s.grades, {onDelete: 'CASCADE'})
skill: Skill;
}
