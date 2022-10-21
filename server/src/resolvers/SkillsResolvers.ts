import { ApolloError } from "apollo-server-core";

import { Arg, Mutation, Query, Resolver } from "type-graphql";
import datasource from "../db";
import Skill, { SkillInput } from "../entity/Skill";


@Resolver(Skill)
export class SkillsResolvers {
    @Query(() => [Skill])
    async skills(): Promise<Skill[]> {
        const skills = await datasource.getRepository(Skill).find()
        return skills
    }

    @Mutation(() => Skill)
    async createSkill(@Arg("data") data: SkillInput): Promise<Skill> {
       const { raw: id } = await datasource.getRepository(Skill).insert(data)
        return { id, grades: [], ...data}
    }

    @Mutation(() => Boolean)
    async deleteSkill(@Arg("id") id: string): Promise<boolean> {
        const { affected } = await datasource.getRepository(Skill).delete(id);
        if (affected === 0) throw new ApolloError("Skill not found", "NOT FOUND")
        return true;
    }
}