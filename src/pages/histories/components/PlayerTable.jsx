import { getListPlayer } from "../../../services/adminAPI";
import { UniversalTable } from "../../../components/TableLayout";
import { GAME_CATEGORY } from "../../../utils/constants";
import { Space, Tag } from "antd";
import DeleteModal from "../../../components/DeleteModal";
import moment from "moment";
import { useSearchParams } from "react-router";

export default function PlayerTable() {
  const [searchParams] = useSearchParams();
  const account = searchParams.get("account");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const category = searchParams.get("category");

  const questionColumns = [
    { key: "account", title: "Tên người chơi", dataIndex: "account" },
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
      render: () => (
        <Space size="middle">
          <DeleteModal />
        </Space>
      ),
    },
  ];

  return (
    <UniversalTable
      queryKey={["players", account, startDate, endDate, category]}
      queryFn={() => getListPlayer({ account, startDate, endDate, category })}
      columns={questionColumns}
      scroll={{ x: 500, y: 350 }}
    />
  );
}
