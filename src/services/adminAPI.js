import { toast } from "react-toastify";
import axoisBase from "./axiosBase";

const ENDPOINT = "/admin";

async function getRegisterQuestion(params) {
  try {
    const response = await axoisBase.get(
      `${ENDPOINT}/stats/register-question`,
      { params },
    );
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
}

async function getListPlayer(params) {
  try {
    const response = await axoisBase.get(`${ENDPOINT}/list-player`, {
      params,
    });
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
}

async function deletePlayerGameHistory(id) {
  try {
    const response = await axoisBase.delete(
      `${ENDPOINT}/player-question/${id}`,
    );
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
    throw error;
  }
}

export { getRegisterQuestion, getListPlayer, deletePlayerGameHistory };
