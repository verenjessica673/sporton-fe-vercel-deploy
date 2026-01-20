import { fetchAPI } from "../lib/api";
import { Bank } from "../types";

export const getallBanks = async () : Promise<Bank[]> => {
    return await fetchAPI<Bank[]>("/banks");
};