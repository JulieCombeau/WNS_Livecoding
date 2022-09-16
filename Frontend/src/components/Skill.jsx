import { useEffect, useState } from "react";
import { addSkill } from "../services/wilders";
import { getAllSkills } from "../services/skills";
import { deleteSkill } from "../services/wilders";

export default function Skill({ skills = [], getWilderList, wilderId }) {
  const [skillsList, setSkillsList] = useState([]);

  const handleDeleteSkillToWilder = async (indexToRemove) => {
    const skillId = skills.filter((_, index) => index === indexToRemove);

    try {
      await deleteSkill(wilderId, skillId[0].id);
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
      await addSkill(wilderId, e.target.value);
      getWilderList();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Wild Skills</h4>
      <label for="skill_select">Choose a skill:</label>

      <select name="skills" id="skill_select" onChange={addSkillToWilder}>
        <option value="">--Please choose an option--</option>
        {skillsList &&
          skillsList.map((skill) => (
            <option key={skill.id} value={skill.id}>
              {skill.name}
            </option>
          ))}
      </select>

      {skills.map((s, index) => (
        <ul className="skills">
          <li>
            {s.name}
            <button
              type="button"
              className="button_delete"
              onClick={() => handleDeleteSkillToWilder(index)}
            >
              X
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}
