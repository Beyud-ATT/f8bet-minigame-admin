import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export const QUERY_TYPES = {
  PAGINATED: "paginated",
  INFINITE: "infinite",
  SIMPLE: "simple",
};

const createBaseQuery = ({ queryKey, queryFn }) => ({
  queryKey,
  queryFn,
});

const createPaginatedQuery = ({ queryKey, queryFn, page, pageSize }) => ({
  ...createBaseQuery({ queryKey, queryFn }),
  queryKey: [queryKey, page, pageSize],
  params: { page, pageSize },
});

const createInfiniteQuery = ({ queryKey, queryFn, page }) => ({
  ...createBaseQuery({ queryKey, queryFn }),
  queryKey: [queryKey, page],
  getNextPageParam: (lastPage) => lastPage.nextCursor,
});

const createSimpleQuery = ({ queryKey, queryFn }) => ({
  ...createBaseQuery({ queryKey, queryFn }),
});

export default function useQueryFactory({
  queryKey,
  queryFn,
  type = QUERY_TYPES.PAGINATED,
}) {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const pageSize = searchParams.get("pageSize") || 20;

  const createQueryConfig = () => {
    switch (type) {
      case QUERY_TYPES.PAGINATED:
        return createPaginatedQuery({ queryKey, queryFn, page, pageSize });
      case QUERY_TYPES.INFINITE:
        return createInfiniteQuery({ queryKey, queryFn, page });
      case QUERY_TYPES.SIMPLE:
        return createSimpleQuery({ queryKey, queryFn });
      default:
        throw new Error(`Invalid query type: ${type}`);
    }
  };

  return useQuery(createQueryConfig());
}
