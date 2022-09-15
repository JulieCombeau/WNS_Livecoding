import "./App.css";
import { getAllWilders } from "./services/wilders";
import { useEffect, useState } from "react";
import Wilder from "./components/Wilder";
import WilderForm from "./components/WilderForm";

function App() {
  const [wilders, setWilders] = useState([]);
  const [loadingWilders, setLoadingWilders] = useState(false);

  const getWilderList = async () => {
    setLoadingWilders(true);
    try {
      setWilders(await getAllWilders());
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingWilders(false);
    }
  };

  useEffect(() => {
    getWilderList();
  }, []);

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <WilderForm getWilderList={getWilderList} setWilders={setWilders} />
        <h2>Wilders</h2>
        <section className="card-row">
          {loadingWilders
            ? "Loading..."
            : wilders.map((wilder) => (
                <Wilder
                  key={wilder.id}
                  id={wilder.id}
                  name={wilder.name}
                  skills={wilder.skills}
                  getWilderList={getWilderList}
                />
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
