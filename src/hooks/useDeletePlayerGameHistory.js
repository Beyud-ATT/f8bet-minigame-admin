import { deletePlayerGameHistory } from "../services/adminAPI";
import useMutationFactory from "./factory/mutationFactory";

export default function useDeletePlayerGameHistory() {
  return useMutationFactory({
    queryKey: ["players"],
    mutationFn: deletePlayerGameHistory,
    successMessage: "Xóa thành công",
  });
}
