import { ImageShow } from "./ImageShow";

export const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} />;
  });

  return <div>{renderedImages}</div>;
};
