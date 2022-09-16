import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Wilder from "../components/Wilders/Wilder";

export default function Home() {
  return (
    <Box>
      <Header />
      <Flex flexDir="column">
        <Wilder />
      </Flex>
      <Footer />
    </Box>
  );
}
