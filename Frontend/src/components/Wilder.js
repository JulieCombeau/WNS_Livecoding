import Skill from "./Skill";

export default function Wilder({ name, skills }) {
  console.log(skills);
  return (
    <div>
      Hello {name}
      {skills.map((s) => (
        <Skill key={s.id} name={s.name} level={s.level} />
      ))}
    </div>
  );
}
