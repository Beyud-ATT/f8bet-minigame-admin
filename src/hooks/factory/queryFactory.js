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

const createPaginatedQuery = ({
  queryKey,
  queryFn,
  page,
  pageSize,
  config,
}) => ({
  ...createBaseQuery({ queryKey, queryFn }),
  queryKey: [queryKey, page, pageSize],
  params: { page, pageSize },
  ...config,
});

const createInfiniteQuery = ({ queryKey, queryFn, page, config }) => ({
  ...createBaseQuery({ queryKey, queryFn }),
  queryKey: [queryKey, page],
  getNextPageParam: (lastPage) => lastPage.nextCursor,
  ...config,
});

const createSimpleQuery = ({ queryKey, queryFn, config }) => ({
  ...createBaseQuery({ queryKey, queryFn }),
  ...config,
});

export default function useQueryFactory({
  queryKey,
  queryFn,
  type = QUERY_TYPES.PAGINATED,
  config = {},
}) {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const pageSize = searchParams.get("pageSize") || 20;

  const createQueryConfig = () => {
    switch (type) {
      case QUERY_TYPES.PAGINATED:
        return createPaginatedQuery({
          queryKey,
          queryFn,
          page,
          pageSize,
          config,
        });
      case QUERY_TYPES.INFINITE:
        return createInfiniteQuery({ queryKey, queryFn, page, config });
      case QUERY_TYPES.SIMPLE:
        return createSimpleQuery({ queryKey, queryFn, config });
      default:
        throw new Error(`Invalid query type: ${type}`);
    }
  };

  return useQuery(createQueryConfig());
}
