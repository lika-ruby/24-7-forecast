import { Item, Img, Down, Title, Link } from "./New.js";

export const New = ({ id, name, img, url }) => {
  return (
    <Item id={id}>
      <Img src={img} alt={name} />
      <Down>
        <Title>{name}</Title>
        <Link href={url} target="blanc">
          See more
        </Link>
      </Down>
    </Item>
  );
};
