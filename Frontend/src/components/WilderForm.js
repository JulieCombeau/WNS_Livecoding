import { useState } from "react";
import { createWilder } from "../services/wilders";

export default function WilderForm({ getWilderList, setWilders }) {
  const [name, setName] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    try {
      const res = await createWilder({ name });
      /* Methode 1 : relancer la fonction qui recupère tout les wilders :
        getWilderList() */

      // Méthode 2 : Mettre à jour le setWilders à chaque ajout de données sans refaire d'appel axios (sous-entend qu'il n'y a pas d'erreur lors de l'ajout)
      setWilders((oldList) => [...oldList, res.data]);
    } catch (err) {
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Nom :
        <input
          disabled={processing}
          type="text"
          id="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <button type="submit" disabled={processing}>
        Ajouter
      </button>
    </form>
  );
}
