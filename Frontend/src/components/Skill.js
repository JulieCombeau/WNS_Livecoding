import { deleteSkill } from "../services/wilders";

export default function Skill({ name, wilderId, getWilderList, id }) {
  
  const handleDeleteSkillToWilder = async () => {
    try {
      await deleteSkill(wilderId, id);
      getWilderList();
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <div>
      <ul className="skills">
        <li>
          {name}
          <button
            type="button"
            className="button_delete"
            onClick={handleDeleteSkillToWilder}
          >
            X
          </button>
        </li>
      </ul>
    </div>
  );
}
