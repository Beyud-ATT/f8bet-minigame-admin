import { createSearchComponent } from "./factory/createSearchComponent";
import { GAME_CATEGORY } from "../utils/constants";

export const CategorySelectSearch = createSearchComponent({
  type: "select",
  fieldName: "category",
  placeholder: "Tìm kiếm theo loại trò chơi",
  options: GAME_CATEGORY,
});
