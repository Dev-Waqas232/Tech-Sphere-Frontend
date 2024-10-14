import { CATEGORIES } from "../constants";

export const findCategory = (value: string) => {
  const category = CATEGORIES.find((cat) => cat.value === value);
  return category?.name;
};
