import { Flex } from "antd";
import RegisterQuestions from "./components/RegisterQuestions";
import PlayerTable from "./components/PlayerTable";
import { AccountTextSearch } from "./components/AccountTextSearch";
import { StartDateSearch } from "./components/StartDateSearch";
import { EndDateSearch } from "./components/EndDateSearch";
import { CategorySelectSearch } from "../../components/CategorySelectSearch";

export default function Histories() {
  return (
    <Flex vertical>
      <RegisterQuestions />
      <Flex gap={20}>
        <AccountTextSearch />
        <StartDateSearch />
        <EndDateSearch />
        <CategorySelectSearch />
      </Flex>
      <PlayerTable />
    </Flex>
  );
}
