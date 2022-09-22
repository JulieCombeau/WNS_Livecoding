import {
  Flex,
  Text,
  Select,

} from "@chakra-ui/react";
import { ChangeEventHandler, useEffect, useState } from "react";
import { addSkill } from "../services/wilders";
import { getAllSkills } from "../services/skills";
import { ISkill } from "../types/ISkills";
import { OneWilder } from "../types/IWilders";

export default function Skill({ wilder }: OneWilder) {
  const [skillsList, setSkillsList] = useState<ISkill[]>([]);

  const getSkillList = async () => {
    try {
      setSkillsList(await getAllSkills());
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSkillList();
  }, []);

  const addSkillToWilder: ChangeEventHandler<HTMLSelectElement> = async (e) => {
    try {
      await addSkill(wilder.id, parseInt(e.target.value));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Flex flexDir="column" gap="5">
      <Text align="center" fontSize="2xl">
        Choose a skill
      </Text>

      <Select
        size="md"
        name="skills"
        id="skill_select"
        onChange={addSkillToWilder}
      >
        <option value="">Please choose an option</option>
        {skillsList &&
          skillsList.map((skill) => (
            <option key={skill.id} value={skill.id}>
              {skill.name}
            </option>
          ))}
      </Select>
    </Flex>
  );
}