import { toast } from "react-toastify";
import axoisBase from "./axiosBase";

const ENDPOINT = "/setting-question";

async function getSettings(params) {
  try {
    const response = await axoisBase.get(`${ENDPOINT}/full`, params);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export { getSettings };
