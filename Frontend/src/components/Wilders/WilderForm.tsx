import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { createWilder } from "../../services/wilders";
import { IWilderInput } from "../../types/IWilders";

export default function WilderForm() {

  const [name, setName] = useState<IWilderInput["name"]>("");
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setProcessing(true);
    try {
      const res = await createWilder({ name });
      /* Methode 1 : relancer la fonction qui recupère tout les wilders :
        getWilderList() */

      // Méthode 2 : Mettre à jour le setWilders à chaque ajout de données sans refaire d'appel axios (sous-entend qu'il n'y a pas d'erreur lors de l'ajout)
    //   setWilders((oldList) => [...oldList, res.data]);
      setName("")
    } catch (err) {
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <>
      <FormControl display="flex" w="fit-content" gap="5">
        <FormLabel w="60%" alignSelf="center" m="0">Ajouter un Wilder</FormLabel>
        <Input
          disabled={processing}
          placeholder="Veuillez entrer votre nom"
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      <Button type="button" onClick={handleSubmit} disabled={processing} p="20px">
        Ajouter
      </Button>
      </FormControl>
    </>
  );
}
