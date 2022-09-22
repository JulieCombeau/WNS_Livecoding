import { Link } from "react-router-dom";
import picture from "../../assets/picture.png";
import { Flex, Image, Text, Tag, Button } from "@chakra-ui/react";
import { OneWilder, SkillOfWilder} from "../../types/IWilders";

export default function WilderCard({ wilder }: OneWilder) {
 
  return (
    <Flex
      flexDir="column"
      w="250px"
      border="1px solid #c9c9c9"
      borderRadius="7px"
      boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)"
      p="20px"
      gap="5"
    >
      <Image src={picture} alt="Jane Doe Profile" />
      <Text fontSize="2xl" textAlign="center">
        {wilder.name}
      </Text>
      <Flex flexDir="column" gap="2">
        <Text fontSize="lg" align="center">
          Biographie
        </Text>
        <Text>{wilder.bio}</Text>
      </Flex>
      <Flex flexDir="column" gap="2">
        <Text fontSize="lg" align="center">
          Skills
        </Text>
        <Flex
          justifyContent="center"
          columnGap="1"
          rowGap="2"
          flexWrap="wrap"
          h="fit-content"
          w="fit-content"
        >
          {wilder.skills &&
            wilder.skills.map((s: SkillOfWilder) => (
              <Tag fontSize="lg" size="md">
                {s.name}
              </Tag>
            ))}
          <Link to={`/wilders/${wilder.id}`}>
            <Button
              mt="auto"
              type="button"
              border="1px solid #c9c9c9"
              bgColor="#F76C6C"
              opacity="0.8"
              _hover={{ bgColor: "#F76C6C", opacity: "0.5" }}
            >
              Voir le détail du Wilder
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
