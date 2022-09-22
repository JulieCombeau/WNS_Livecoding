import { FormControl, FormLabel, Input, Flex, Textarea } from "@chakra-ui/react";
// import { FormEvent, useState } from "react";
// import { createWilder } from "../../services/wilders";
// import { IWilderInput } from "../../types/IWilders";

export default function WilderInfo() {
  //   const [name, setName] = useState<IWilderInput["name"]>("");
  //   const [processing, setProcessing] = useState(false);

  //   const handleSubmit = async (e: FormEvent) => {
  //     e.preventDefault();
  //     setProcessing(true);
  //     try {
  //       await createWilder({ name });
  //       setName("")
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setProcessing(false);
  //     }
  //   };

  return (
    <>
      <FormControl display="flex" flexDir="column" gap="5" alignSelf="center" >
        <Flex justifyContent="space-between" w="100%">
          <FormLabel alignSelf="center" m="0">
            Nom
          </FormLabel>
          <Input
          w="250px"
            placeholder="Veuillez entrer votre nom"
            type="text"
            id="name"
            //   value={name}
            //   onChange={(e) => {
            //     setName(e.target.value);
            //   }}
          />
        </Flex>
        <Flex justifyContent="space-between">
          <FormLabel alignSelf="center" m="0">
            Biographie
          </FormLabel>
          <Textarea
                    w="250px"
            placeholder="Veuillez entrer votre biographie"
            id="name"
            //   value={name}
            //   onChange={(e) => {
            //     setName(e.target.value);
            //   }}
          />
        </Flex>
        {/* <Button type="button" onClick={handleSubmit} disabled={processing} p="20px">
        Ajouter
      </Button> */}
      </FormControl>
    </>
  );
}
