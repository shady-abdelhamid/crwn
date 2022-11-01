import "./category-item.scss";

export type Category = {
  id: number;
  title: string;
  imageUrl: string;
};

interface Props {
  category: Category;
}

const CategoryItem = ({ category }: Props) => {
  const { title, imageUrl } = category;
  return (
    <div className="category-item">
      <div
        className="category-item__img"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-item__body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
