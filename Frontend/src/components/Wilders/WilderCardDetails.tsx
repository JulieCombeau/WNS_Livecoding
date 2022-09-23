import picture from "../../assets/picture.png";
import {
  Flex,
  Image,
  Text,
  Tag,
  TagCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { OneWilder, SkillOfWilder } from "../../types/IWilders";
import { deleteSkill } from "../../services/wilders";
import { deleteWilder } from "../../services/wilders";
import { useNavigate } from "react-router-dom";
import WildersModal from "./WildersModal";

export default function WilderCardDetails({ wilder }: OneWilder) {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteSkillToWilder = async (indexToRemove: number) => {
    const skillId = wilder.skills.filter(
      (_, index: number) => index === indexToRemove
    );

    try {
      await deleteSkill(wilder.id, skillId[0].id);
      // getWilderList();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteWilder = async () => {
    try {
      await deleteWilder(wilder.id);
    } catch (err) {
      console.error(err);
    } finally {
      navigate("/");
    }
  };

  return (
    <Flex
      w="90vw"
      m="auto"
      border="1px solid #c9c9c9"
      borderRadius="7px"
      boxShadow="2px 2px 4px rgba(0, 0, 0, 0.15)"
      p="20px"
      gap="20"
    >
      <Image src={picture} alt="Jane Doe Profile" />
      <Flex flexDir="column" w="50%" justifyContent="space-around">
        <Text fontSize="6xl" textAlign="center">
          {wilder?.name}
        </Text>
        <Flex flexDir="column" gap="2">
          <Text fontSize="2xl" align="center">
            Biographie
          </Text>
          <Text>{wilder?.bio}</Text>
        </Flex>
        <Flex flexDir="column" gap="2">
          <Text fontSize="2xl" align="center">
            Skills
          </Text>
          <Flex
            justifyContent="center"
            columnGap="2"
            rowGap="2"
            flexWrap="wrap"
            h="fit-content"
            w="fit-content"
          >
            {wilder?.skills &&
              wilder?.skills.map((s: SkillOfWilder, index: number) => (
                <Flex>
                  <Tag fontSize="xl" size="lg" p="0.5rem">
                    {s.name}
                    <TagCloseButton
                      ml="1rem"
                      onClick={() => handleDeleteSkillToWilder(index)}
                    />
                  </Tag>
                </Flex>
              ))}
          </Flex>
        </Flex>
        <Button
          type="button"
          onClick={onOpen}
          border="1px solid #c9c9c9"
          bgColor="#F76C6C"
          opacity="0.8"
          _hover={{ bgColor: "#F76C6C", opacity: "0.5" }}
        >
          Modifier le Wilder
        </Button>
        {isOpen && (
          <WildersModal
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            wilder={wilder}
          />
        )}
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
      </Flex>
    </Flex>
  );
}
