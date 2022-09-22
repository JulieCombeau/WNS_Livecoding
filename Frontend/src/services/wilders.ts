import { IWilder, IWilderInput} from "../types/IWilders";
import API from "./APIClient";

export async function getAllWilders(): Promise<IWilder[]> {
  const { data } = await API.get("/wilders");
  return data;
}

export async function createWilder(wilderProps: IWilderInput) {
  return API.post("/wilders", wilderProps);
}

export async function deleteWilder(wilderId: number) {
  return await API.delete(`/wilders/${wilderId}`);
}

export async function addSkill(wilderId: number, skillId: number) {
  return await API.post(`/wilders/${wilderId}/skills/${skillId}`);
}

export async function deleteSkill(wilderId: number, skillId: number) {
  return await API.delete(`/wilders/${wilderId}/skills/${skillId}`);
}
