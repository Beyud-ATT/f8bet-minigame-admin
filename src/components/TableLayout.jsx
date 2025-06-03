import React from "react";
import { Table, Tag } from "antd";
import useQueryFactory from "../hooks/factory/queryFactory";
import moment from "moment/moment";

const UniversalTable = ({
  queryKey,
  queryFn,
  columns,
  rowKey = "id",
  loading: externalLoading,
  className,
  scroll,
  style,
}) => {
  // React Query hook
  const {
    data = [],
    isLoading,
    error,
  } = useQueryFactory({
    queryKey,
    queryFn,
  });

  // Auto-generate column renderers based on type
  const generateRenderer = (column) => {
    switch (column.type) {
      case "boolean":
        return (value) => (
          <Tag color={value ? "green" : "red"}>{value ? "Yes" : "No"}</Tag>
        );

      case "tag":
        return (value) => {
          const tags = Array.isArray(value) ? value : [value];
          return (
            <>
              {tags.map((tag) => (
                <Tag key={tag} color="blue">
                  {tag}
                </Tag>
              ))}
            </>
          );
        };

      case "date":
        return (value) => {
          const date = moment(value).format("HH:mm:ss DD/MM/YYYY");
          return date;
        };

      default:
        return column.render;
    }
  };

  // Transform column configs to Antd columns
  const antdColumns = columns.map((column) => ({
    sorter: column.sortable
      ? (a, b) => {
          const aVal = a[column.dataIndex || column.key];
          const bVal = b[column.dataIndex || column.key];
          if (typeof aVal === "string" && typeof bVal === "string") {
            return aVal.localeCompare(bVal);
          }
          return aVal - bVal;
        }
      : undefined,
    filters: column.filterable
      ? [
          ...new Set(data.map((item) => item[column.dataIndex || column.key])),
        ].map((value) => ({ text: String(value), value }))
      : undefined,
    onFilter: column.filterable
      ? (value, record) => record[column.dataIndex || column.key] === value
      : undefined,
    render: column.render || generateRenderer(column),
    ...column,
  }));

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  return (
    <Table
      columns={antdColumns}
      dataSource={data?.data?.result || data?.data || []}
      rowKey={rowKey}
      loading={isLoading || externalLoading}
      pagination={true}
      className={className}
      style={style}
      scroll={scroll || { x: 500, y: 500 }}
    />
  );
};

export { UniversalTable };
