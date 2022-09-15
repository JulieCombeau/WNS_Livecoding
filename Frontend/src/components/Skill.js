export default function Skill({ name, level }) {
  return (
    <div>
      <ul className="skills">
        <li>
          {name}
          {/* <span className="votes"> {level}</span> */}
        </li>
      </ul>
    </div>
  );
}
