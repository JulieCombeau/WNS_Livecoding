import { Link } from "react-router-dom";

import { Heading, Box, Flex, Button } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box mx="auto" py="1rem" bgColor="#F76C6C">
      <Heading color="#fff" textAlign="center" p="24px">
        Wilders Book
      </Heading>
      <Flex justifyContent="center" gap="10" >
        <Link to="/">
        <Button minW="100px" fontSize="xl">
          Wilders
        </Button>
        </Link>
        <Link to="/skills">
        <Button minW="100px" fontSize="xl">
          Skills
        </Button>
        </Link>
      </Flex>
    </Box>
  );
}
