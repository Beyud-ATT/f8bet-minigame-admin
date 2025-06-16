import { UniversalTable } from "../../../components/TableLayout";
import { GAME_CATEGORY } from "../../../utils/constants";
import { Flex, Tag } from "antd";
import moment from "moment";
import usePlayer from "../../../hooks/usePlayer";
import DeleteModal from "./DeleteModal";
import Pagination from "../../../components/Pagination";

const playerColumns = [
  {
    key: "account",
    title: "Tên người chơi",
    dataIndex: "account",
    width: 150,
  },
  {
    key: "category",
    title: "Loại trò chơi",
    dataIndex: "category",
    render: (value) => {
      const { label, color } = GAME_CATEGORY.find(
        (item) => item.value === value,
      );
      return <Tag color={color}>{label}</Tag>;
    },
    align: "center",
  },
  {
    key: "result",
    title: "Kết quả",
    dataIndex: "result",
    align: "center",
    render: (_, record) => {
      return (
        <span>
          {record?.correctAnswer}/{record?.totalQuestion}
        </span>
      );
    },
  },
  {
    key: "status_register",
    title: "Trạng thái",
    dataIndex: "status_register",
    align: "center",
    width: 150,
    render: (value) => {
      return (
        <div
          className="rounded-lg px-2 py-1 font-semibold text-white"
          style={{ backgroundColor: value === "accept" ? "green" : "orange" }}
        >
          {value === "accept" ? "Đã trả lời" : "Đang trả lời"}
        </div>
      );
    },
  },
  {
    key: "createdAt",
    title: "Bắt đầu",
    dataIndex: "createdAt",
    align: "center",
    type: "date",
  },
  {
    key: "updatedAt",
    title: "Kết thúc",
    dataIndex: "updatedAt",
    align: "center",
    type: "date",
  },
  {
    key: "duration",
    title: "Thời gian",
    dataIndex: "duration",
    align: "center",
    render: (_, record) => {
      const start = moment(record?.createdAt);
      const end = moment(record?.updatedAt);
      const duration = end.diff(start, "seconds");
      return <span>{duration} giây</span>;
    },
  },
  {
    key: "action",
    title: "Hành động",
    dataIndex: "action",
    align: "center",
    render: (_, record) => {
      return (
        <Flex align="center" justify="center" gap={5}>
          <DeleteModal record={record} />
        </Flex>
      );
    },
  },
];

export default function PlayerTable() {
  const playerData = usePlayer();

  return (
    <>
      <UniversalTable
        queryData={playerData}
        columns={playerColumns}
        scroll={{ x: 500, y: 350 }}
        pagination={false}
      />
      <Pagination
        pagination={{
          total: playerData?.data?.data?.pagination?.totalRecords,
          pageSize: 100,
        }}
        showSizeChanger={false}
      />
    </>
  );
}
