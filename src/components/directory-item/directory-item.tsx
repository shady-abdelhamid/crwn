
import { H2, P, StyledBgImage, StyledBody, StyledCategoryItem } from "./directory-item.styles";

export type Category = {
  id: number;
  title: string;
  imageUrl: string;
};

interface Props {
  category: Category;
}

const DirectoryItem = ({ category }: Props) => {
  const { title, imageUrl } = category;
  console.log(imageUrl);
  
  return (
    <StyledCategoryItem>
      <StyledBgImage imageUrl={imageUrl}/>
      <StyledBody>
        <H2>{title}</H2>
        <P>Shop Now</P>
      </StyledBody>
    </StyledCategoryItem>
  );
};

export default DirectoryItem;
