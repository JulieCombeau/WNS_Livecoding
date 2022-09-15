import API from "./APIClient";

export async function getAllWilders() {
  const { data } = await API.get("/wilders");
  return data;
}

export async function createWilder(wilderProps) {
  return API.post("/wilders", wilderProps);
}

export async function deleteWilder(id) {
  return await API.delete(`/wilders/${id}`);
}
