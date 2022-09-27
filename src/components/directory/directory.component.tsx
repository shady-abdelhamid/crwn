import "./directory.styles.scss";

import CategoryItem, {
  Category,
} from "../category-item/category-item.component";

type Props = {
  categories: Array<Category>;
};
const Directory = ({ categories }: Props) => (
  <div className="directory">
    {categories.map((category) => (
      <CategoryItem category={category} key={category.id}></CategoryItem>
    ))}
  </div>
);

export default Directory;
