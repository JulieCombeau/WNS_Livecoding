import "./App.css";
import Wilder from "./components/Wilder";
import wildersList from "./wildersList"

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {wildersList.map((wilder) => (
            <Wilder key={wilder.id} name={wilder.name} skills={wilder.skills} />
          ))}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
