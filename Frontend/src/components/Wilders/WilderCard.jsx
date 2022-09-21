import Skill from "../Skill";
import picture from "../../assets/picture.png";
import { Flex, Image, Text, Button } from "@chakra-ui/react";
import { deleteWilder } from "../../services/wilders";

export default function WilderCard({ getWilderList, wilder }) {
  const handleDeleteWilder = async () => {
    try {
      await deleteWilder(wilder.id);
      getWilderList();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Flex
      flexDir="column"
      w="250px"
      border="1px solid #c9c9c9"
      borderRadius="7px"
      boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)"
      p="20px"
      gap="5px"
    >
      <Image src={picture} alt="Jane Doe Profile" />
      <Text fontSize="2xl" textAlign="center">
        {wilder.name}
      </Text>
      <Text>{wilder.bio}</Text>
      <Skill wilder={wilder} getWilderList={getWilderList} />
      <Button
        mt="auto"
        type="button"
        onClick={handleDeleteWilder}
        border="1px solid #c9c9c9"
        bgColor="#F76C6C"
        opacity="0.8"
        _hover={{ bgColor: "#F76C6C", opacity: "0.5" }}
      >
        Supprimer le Wilder
      </Button>
    </Flex>
  );
}
