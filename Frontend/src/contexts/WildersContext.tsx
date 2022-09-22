import { createContext, useState, useEffect, ReactNode } from "react";
import { IWilder, WildersContextType } from "../types/IWilders";
import { getAllWilders } from "../services/wilders";


export const CurrentWildersContext = createContext<WildersContextType | null>(null);

export const CurrentWildersContextProvider = ({ children }: {children: ReactNode}) => {
    const [wilders, setWilders] = useState<IWilder[]>([]);

    const getWilderList = async () => {
        try {
          setWilders(await getAllWilders());
        } catch (err) {
          console.error(err);
        }
      };
    
      useEffect(() => {
        getWilderList();
      }, []);

      return (
        <CurrentWildersContext.Provider value={{ wilders, setWilders }}>
          {children}
        </CurrentWildersContext.Provider>
      );

}

export default CurrentWildersContextProvider;