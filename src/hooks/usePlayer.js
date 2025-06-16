import { useSearchParams } from "react-router";
import { getListPlayer } from "../services/adminAPI";
import useQueryFactory, { QUERY_TYPES } from "./factory/queryFactory";

export default function usePlayer() {
  const [searchParams] = useSearchParams();
  const account = searchParams.get("account");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const category = searchParams.get("category");
  const page = searchParams.get("page") || 1;

  return useQueryFactory({
    queryKey: ["players", account, startDate, endDate, category, page],
    queryFn: () =>
      getListPlayer({ account, startDate, endDate, category, page }),
    type: QUERY_TYPES.SIMPLE,
  });
}
