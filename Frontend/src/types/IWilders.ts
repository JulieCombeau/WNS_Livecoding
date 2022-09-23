import { Dispatch, SetStateAction } from "react"

export interface SkillOfWilder {
    id: number
    name: string
    votes: number
}

export interface IWilder {
    id: number
    name: string
    city: string | null
    bio: string | null
    skills: SkillOfWilder[]
}

export interface OneWilder {
    wilder: IWilder
}

export interface IWilderInput {
    name: string
}

export interface IWilderListRefresh {
    getWilderList: () => void
}

export interface WilderProps {
    getWilderList: () => void
    wilder: IWilder
}

export interface WildersContextType {
    wilders: IWilder[]
    setWilders: Dispatch<SetStateAction<IWilder[]>>
}

export interface wilderModal {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    wilder: IWilder;
  }