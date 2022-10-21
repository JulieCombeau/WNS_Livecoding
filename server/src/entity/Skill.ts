import { Field, ObjectType, InputType } from "type-graphql";
import { MaxLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Grade from "./Grade";

@ObjectType()
@Entity()
class Skill {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @OneToMany(() => Grade, (grade) => grade.skill)
  grades: Grade[];
}

@InputType()
export class SkillInput {
  @Field()
  @MaxLength(100)
  name: string;

}

export default Skill;
