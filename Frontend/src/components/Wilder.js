import Skill from "./Skill";
import picture from "../assets/picture.png";

export default function Wilder({ name, skills }) {
  console.log(skills);
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
      </article>
    </div>
  );
}
