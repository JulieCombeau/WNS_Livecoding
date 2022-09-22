import Skill from "../Skill";
import { Flex } from "@chakra-ui/react";
import { OneWilder } from "../../types/IWilders";
import WilderInfo from "./WilderInfos";

export default function WildersCollapse({ wilder }: OneWilder) {
  return (
    <Flex
      w="90vw"
      m="auto"
      justifyContent="space-around"
      border="1px solid #c9c9c9"
      borderRadius="7px"
      boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)"
      p="20px"
    >
      <Flex w="50%">
        <WilderInfo />
      </Flex>
      <Skill wilder={wilder} />
    </Flex>
  );
}
