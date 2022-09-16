import { Flex, Text } from "@chakra-ui/react";
import WilderCard from "./WilderCard";
import WilderForm from "./WilderForm";
import { getAllWilders } from "../../services/wilders";
import { useEffect, useState } from "react";

export default function Wilder() {
  const [wilders, setWilders] = useState([]);
  const [loadingWilders, setLoadingWilders] = useState(false);

  const getWilderList = async () => {
    setLoadingWilders(true);
    try {
      setWilders(await getAllWilders());
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingWilders(false);
    }
  };

  useEffect(() => {
    getWilderList();
  }, []);

  return (
    <Flex flexDir="column" maxW="800px" m="auto" p="24px">
      <WilderForm getWilderList={getWilderList} setWilders={setWilders} />
      <Text fontSize="3xl">Wilders</Text>
      <Flex w="fit-content" maxW="800px" flexWrap="wrap" gap="10px">
        {loadingWilders
          ? "Loading..."
          : wilders.map((wilder) => (
              <WilderCard
                key={wilder.id}
                name={wilder.name}
                wilderId={wilder.id}
                skills={wilder.skills}
                getWilderList={getWilderList}
              />
            ))}
      </Flex>
    </Flex>
  );
}
