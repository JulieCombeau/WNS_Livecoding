import {
  Flex,
  Text,
  Select,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { addSkill } from "../services/wilders";
import { getAllSkills } from "../services/skills";
import { deleteSkill } from "../services/wilders";

export default function Skill({ getWilderList, wilder }) {
  const [skillsList, setSkillsList] = useState([]);

  const handleDeleteSkillToWilder = async (indexToRemove) => {
    const skillId = wilder.skills.filter((_, index) => index === indexToRemove);

    try {
      await deleteSkill(wilder.id, skillId[0].id);
      getWilderList();
    } catch (err) {
      console.error(err);
    }
  };

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

  const addSkillToWilder = async (e) => {
    try {
      await addSkill(wilder.id, e.target.value);
      getWilderList();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Flex flexDir="column" gap="5">
      <Text>Wild Skills</Text>
      <Text for="skill_select" align="center">
        Choose a skill
      </Text>

      <Select
        size="sm"
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

      {wilder.skills &&
        wilder.skills.map((s, index) => (
          <UnorderedList className="skills">
            <ListItem fontSize="lg">
              {s.name}
              <Button
                size="xs"
                ml="1rem"
                borderRadius="full"
                bgColor="rgba(0, 0, 0, .3)"
                type="button"
                className="button_delete"
                onClick={() => handleDeleteSkillToWilder(index)}
              >
                X
              </Button>
            </ListItem>
          </UnorderedList>
        ))}
    </Flex>
  );
}
