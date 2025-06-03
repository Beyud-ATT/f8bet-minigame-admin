import axoisBase from "./axiosBase";
import { toast } from "react-toastify";

const ENDPOINT = "/questions";

async function getFullQuestions({ queryKey }) {
  console.log("queryKey", queryKey);
  const [_, answer, question, category] = queryKey[0];
  try {
    const response = await axoisBase.get(`${ENDPOINT}/full`, {
      params: {
        answer,
        question,
        category,
      },
    });
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
}

export { getFullQuestions };
