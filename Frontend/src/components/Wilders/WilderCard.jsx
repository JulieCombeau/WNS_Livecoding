import Skill from "../Skill";
import picture from "../../assets/picture.png";
import { Flex, Image, Text, Button } from "@chakra-ui/react";
import { deleteWilder } from "../../services/wilders";


export default function WilderCard({ getWilderList, name, skills, wilderId}) {

  const handleDeleteWilder = async () => {
    try {
      await deleteWilder(wilderId);
      getWilderList();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Flex
      flexDir="column"
      w="200px"
      border="1px solid #c9c9c9"
      borderRadius="7px"
      boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)"
      p="20px"
      gap="5px"
    >
      <Button
        type="button"
        onClick={handleDeleteWilder}
        border="1px solid #c9c9c9"
        bgColor="#F76C6C"
        opacity="0.8"
        _hover={{ bgColor: "#F76C6C", opacity: "0.5" }}
      >
        Supprimer le Wilder
      </Button>
      <Image src={picture} alt="Jane Doe Profile" />
      <Text fontSize="2xl" textAlign="center">
        {name}
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <Skill skills={skills} wilderId={wilderId} getWilderList={getWilderList} />
    </Flex>
  );
}
