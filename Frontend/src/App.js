import logo from "./logo.svg";
import "./App.css";
import Wilder from "./components/Wilder";

function App() {
  const wilders = [
    { id: 1, name: "jonh", skills: [{ id: 1, name: "Js", level: 4 }, { id: 2, name: "PHP", level: 3 }] },
    { id: 2, name: "marc", skills: [{ id: 3, name: "Python", level: 4 }] },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {wilders.map((wilder) => (
          <Wilder key={wilder.id} name={wilder.name} skills={wilder.skills}/>
        ))}
      </header>
    </div>
  );
}

export default App;
