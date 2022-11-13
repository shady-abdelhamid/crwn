import "./directory.styles.tsx";

import DirectoryItem, { Category } from "../directory-item/directory-item";
import { StyledDirectory } from "./directory.styles";

type Props = {
  categories: Array<Category>;
};
const Directory = ({ categories }: Props) => (
  <StyledDirectory>
    {categories.map((category) => (
      <DirectoryItem category={category} key={category.id}></DirectoryItem>
    ))}
  </StyledDirectory>
);

export default Directory;
