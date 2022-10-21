import { Field, ObjectType,InputType } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Skill from "./Skill";
import Wilder from "./Wilder";

@ObjectType()
@Entity()
class Grade {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ default: 1 })
  votes: number;

  @Field()
  @Column()
  skillId: number;

  @Field()
  @Column()
  wilderId: number;

  @ManyToOne(() => Wilder, (w) => w.grades, { onDelete: "CASCADE" })
  wilder: Wilder;

  @ManyToOne(() => Skill, (s) => s.grades, { onDelete: "CASCADE" })
  skill: Skill;
}

@InputType()
export class GradeInput {
  @Field()
  votes: number;
}

export default Grade;
