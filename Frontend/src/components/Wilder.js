import Skill from "./Skill";
import picture from "../assets/picture.png";
import { useEffect, useState } from "react";
import { deleteWilder, addSkill } from "../services/wilders";
import { getAllSkills } from "../services/skills";

export default function Wilder({ name, skills = [], getWilderList, id }) {
  const [skillsList, setSkillsList] = useState([]);

  const handleDeleteWilder = async () => {
    try {
      await deleteWilder(id);
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
      await addSkill(id, e.target.value);
      getWilderList();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <article className="card">
        <img src={picture} alt="Jane Doe Profile" />
        <h3>{name}</h3>
        <button type="button" onClick={handleDeleteWilder}>
          Supprimer
        </button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
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
        <div className="skills">
          {skills.map((s) => (
            <Skill
              key={s.id}
              name={s.name}
              id={s.id}
              wilderId={id}
              getWilderList={getWilderList}
            />
          ))}
        </div>
      </article>
    </div>
  );
}
