import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Grade } from "./Grade"

@Entity()
export class Wilder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: "varchar", nullable: true })
  city: string | null;

  @Column({ type: "text", nullable: true })
  bio: string | null;

  @OneToMany(() => Grade, (grade) => grade.wilder)
  grades: Grade[];
}
