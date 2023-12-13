import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";



export const CarouselDemo = ({ CardImg }) => {
  return <ImageGallery
    originalHeight={600}
    originalWidth={560}

    thumbnailHeight={150}
    thumbnailWidth={150}

    infinite={false}
    showPlayButton={false}
    showNav={false}
    items={CardImg}
  />;

}
