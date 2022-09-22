import Skill from "../Skill";
import { Flex, Button } from "@chakra-ui/react";
import { OneWilder} from "../../types/IWilders";

export default function WildersSkills({ wilder }: OneWilder) {
    
  return (
    <Flex
      flexDir="column"
      w="90vw"
      m="auto"
      border="1px solid #c9c9c9"
      borderRadius="7px"
      boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)"
      p="20px"
      gap="5px"
    >
      <Skill wilder={wilder} />
    </Flex>
  );
}