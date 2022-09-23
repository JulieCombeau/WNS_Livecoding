import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WilderCardDetails from "../components/Wilders/WilderCardDetails";
import { useState, useEffect } from "react";
import { IWilder } from "../types/IWilders";
import { getOneWilder } from "../services/wilders";
import { useParams } from "react-router-dom";


export default function WilderDetails() {
  const { wilderId } = useParams();
  const [wilder, setWilder] = useState<IWilder[]>([]);

  const getWilderDetails = async () => {
    try {
      setWilder(await getOneWilder(parseInt(wilderId || "0")));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getWilderDetails();
  }, []);

  console.log(wilder);

  return (
    <Box>
      <Header />
      <Flex flexDir="column" m="1rem" gap="2">
        <WilderCardDetails wilder={wilder[0]} />
      </Flex>
      <Footer />
    </Box>
  );
}
