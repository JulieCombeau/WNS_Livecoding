import { ApolloError } from "apollo-server-core";
import { Query, Resolver, Mutation, Arg } from "type-graphql";
import datasource from "../db";
import Grade from "../entity/Grade";
import  Wilder, { SkillId, WilderInput } from "../entity/Wilder";

@Resolver(Wilder)
export class WildersResolver {
    @Query(() => [Wilder])
    async wilders(): Promise<Wilder[]> {
        const wilders = await datasource.getRepository(Wilder)
        .find({ relations: { grades: { skill: true } } });

      return wilders.map((w) => ({
        ...w,
        skills: w.grades.map((g) => ({
          id: g.skill.id,
          name: g.skill.name,
          votes: g.votes,
        })),
      }));
    }

    @Mutation(() => Wilder)
    async createWilder(@Arg("data") data: WilderInput): Promise<Wilder> {
        const { raw: id } = await datasource.getRepository(Wilder).insert(data);
        return { id, grades: [], ...data, skills: [] };
    }

    @Mutation(() => Boolean)
    async deleteWilder(@Arg("id") id: string): Promise<boolean> {
        const { affected } = await datasource.getRepository(Wilder).delete(id);
        if (affected === 0) throw new ApolloError("Wilder not found", "NOT FOUND")
        return true;
    }

    @Mutation(() => Wilder)
    async updateWilder(
      @Arg("id") id: string,
      @Arg("data") data: WilderInput
    ): Promise<Wilder | undefined> {
      try {
        const { name, bio, avatarUrl, city, skills } = data;
        const wilderToUpdate = await datasource.getRepository(Wilder).findOne({
          where: { id: parseInt(id, 10) },
          relations: { grades: { skill: true } },
        });
  
        if (wilderToUpdate === null)
          throw new ApolloError("wilder not found", "NOT_FOUND");
  
        wilderToUpdate.name = name;
        wilderToUpdate.bio = bio;
        wilderToUpdate.city = city;
        wilderToUpdate.avatarUrl = avatarUrl;
  
        await datasource.getRepository(Wilder).save(wilderToUpdate);
  
        const existingSkillIds = wilderToUpdate.grades.map((g) => g.skill.id);

        console.log(existingSkillIds);
        
        const newSkillIds = (typeof skills === "undefined" ? [] : skills).map(
          (s: SkillId) => s.id
        );

        console.log(newSkillIds);

        const skillIdsToAdd = newSkillIds.filter(
          (newId) => !existingSkillIds.includes(newId)
        );

        console.log(skillIdsToAdd);

        const skillsToRemove = existingSkillIds.filter(
          (existingId) => !newSkillIds.includes(existingId)
        );

        console.log(skillsToRemove);
  
        await datasource.getRepository(Grade).save(
          skillIdsToAdd.map((skillId) => ({
            skillId,
            wilderId: wilderToUpdate.id,
          }))
        );
  
        await Promise.all(
          skillsToRemove.map(
            async (skillId: number) =>
              await datasource
                .getRepository(Grade)
                .delete({ wilderId: wilderToUpdate.id, skillId })
          )
        );
  
        return wilderToUpdate;
      } catch (err) {
        console.error(err);
      }
    }
  }