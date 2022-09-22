import { Flex,} from "@chakra-ui/react";
import WilderCard from "./WilderCard";
import WilderForm from "./WilderForm";
import { getAllWilders } from "../../services/wilders";
import {  useEffect, useState } from "react";
import { IWilder } from "../../types/IWilders";


export default function Wilder() {
  const [wilders, setWilders] = useState<IWilder[]>([]);
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
    <Flex flexDir="column" maxW="900px" m="auto" p="24px" gap="10">
      <WilderForm getWilderList={getWilderList} />
      <Flex w="fit-content" maxW="800px" flexWrap="wrap" gap="10px">
        {loadingWilders
          ? "Loading..."
          : wilders.map((wilder) => (
              <WilderCard
                key={wilder.id}
                wilder={wilder}
                getWilderList={getWilderList}
              />
            ))}
      </Flex>
    </Flex>
  );
}
