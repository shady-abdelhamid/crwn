import "./directory.styles.tsx";

import CategoryItem, { Category } from "../category-item/category-item";
import { StyledDirectory } from "./directory.styles";

type Props = {
  categories: Array<Category>;
};
const Directory = ({ categories }: Props) => (
  <StyledDirectory>
    {categories.map((category) => (
      <CategoryItem category={category} key={category.id}></CategoryItem>
    ))}
  </StyledDirectory>
);

export default Directory;
