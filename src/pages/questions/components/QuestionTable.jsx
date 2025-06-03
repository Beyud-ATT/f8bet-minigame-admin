import { Flex, Space, Tag } from "antd";
import { UniversalTable } from "../../../components/TableLayout";
import { getFullQuestions } from "../../../services/questionsAPI";
import { DIFFICULTY, GAME_CATEGORY } from "../../../utils/constants";
import { LuCheckCheck } from "react-icons/lu";
import CreateUpdateModal from "../../../components/CreateUpdateModal";
import DeleteModal from "../../../components/DeleteModal";
import { useSearchParams } from "react-router";

export default function QuestionTable() {
  const [searchParams] = useSearchParams();
  const answer = searchParams.get("answer");
  const question = searchParams.get("question");
  const category = searchParams.get("category");

  const questionColumns = [
    { key: "question", title: "Câu hỏi", dataIndex: "question" },
    {
      key: "category",
      title: "Loại trò chơi",
      dataIndex: "category",
      align: "center",
      render: (value) => {
        const { label, color } = GAME_CATEGORY.find(
          (item) => item.value === value,
        );
        return <Tag color={color}>{label}</Tag>;
      },
    },
    {
      key: "difficulty",
      title: "Độ khó",
      dataIndex: "difficulty",
      align: "center",
      render: (value) => {
        const { label, color } = DIFFICULTY.find(
          (item) => item.value === value,
        );
        return <Tag color={color}>{label}</Tag>;
      },
    },
    {
      key: "options",
      title: "Đáp án",
      dataIndex: "options",
      render: (options) => {
        return options.map((option) => (
          <Flex align="center">
            <span className="mr-1">{option.text}</span>
            <span>
              {option.isCorrect ? (
                <LuCheckCheck className="text-green-500" />
              ) : (
                ""
              )}
            </span>
          </Flex>
        ));
      },
    },
    {
      key: "action",
      title: "Hành động",
      dataIndex: "action",
      align: "center",
      render: () => (
        <Space size="middle">
          <CreateUpdateModal />
          <DeleteModal />
        </Space>
      ),
    },
  ];

  return (
    <UniversalTable
      queryKey={["questions", answer, question, category]}
      queryFn={getFullQuestions}
      columns={questionColumns}
      scroll={{ x: 500, y: 550 }}
    />
  );
}
