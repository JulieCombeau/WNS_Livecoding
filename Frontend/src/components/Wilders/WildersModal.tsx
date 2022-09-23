import Skill from "../Skill";
import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { wilderModal } from "../../types/IWilders";
import WilderInfo from "./WilderInfos";

export default function WildersModal({
  isOpen,
  onOpen,
  onClose,
  wilder,
}: wilderModal) {
  return (
    <Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mettez à jour les informations</ModalHeader>
          <ModalCloseButton />
          <ModalBody w="80%" m="auto" gap="10">
            <WilderInfo wilder={wilder} />
            <Skill wilder={wilder} />
          </ModalBody>
          <ModalFooter>
            <Button
              border="1px solid #c9c9c9"
              bgColor="#F76C6C"
              opacity="0.8"
              _hover={{ bgColor: "#F76C6C", opacity: "0.5" }}
              m="auto"
              onClick={onClose}
            >
              Enregistrer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
