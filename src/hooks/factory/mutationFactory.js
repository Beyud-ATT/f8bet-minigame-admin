import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export default function useMutationFactory({
  queryKey,
  mutationFn,
  successMessage,
}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: () => {
      toast.success(successMessage);
    },
    onSettled: () => {
      console.log("onSettled");
      console.log(queryKey);
      queryClient.invalidateQueries({
        queryKey,
      });
    },
  });
}
