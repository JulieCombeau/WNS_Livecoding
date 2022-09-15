import Skill from "./Skill";
import picture from "../assets/picture.png";
import { deleteWilder } from "../services/wilders";

export default function Wilder({ name, skills = [], getWilderList, id }) {
  const handleDeleteWilder = async () => {
    try {
      await deleteWilder(id);
      getWilderList() 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <article className="card">
        <img src={picture} alt="Jane Doe Profile" />
        <h3>{name}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h4>Wild Skills</h4>
        <div className="skills">
          {skills.map((s) => (
            <Skill key={s.id} name={s.name} level={s.level} />
          ))}
        </div>
        <button type="button" onClick={handleDeleteWilder}>
          Supprimer
        </button>
      </article>
    </div>
  );
}
