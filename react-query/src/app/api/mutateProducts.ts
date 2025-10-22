import axios from "axios";
import { User } from "../types/type";

export const mutateProducts = async (data:User) => {
  const response = await axios.post("https://fakestorepai.com/users", data);
  return response.data;
};
