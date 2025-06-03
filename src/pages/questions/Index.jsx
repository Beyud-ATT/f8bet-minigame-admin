import { Flex } from "antd";
import { AnswerTextSearch } from "./components/AnswerTextSearch";
import QuestionTable from "./components/QuestionTable";
import { QuestionTextSearch } from "./components/QuestionTextSearch";
import { CategorySelectSearch } from "../../components/CategorySelectSearch";

export default function Questions() {
  return (
    <div>
      <Flex gap={20} className="w-1/2" justify="end">
        <AnswerTextSearch />
        <QuestionTextSearch />
        <CategorySelectSearch />
      </Flex>
      <QuestionTable />
    </div>
  );
}
