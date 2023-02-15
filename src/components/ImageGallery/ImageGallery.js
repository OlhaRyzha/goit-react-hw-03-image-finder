import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ imgs }) {
  return (
    <Gallery>
      {imgs.map(img => (
        <ImageGalleryItem key={img.id} img={img} />
      ))}
    </Gallery>
  );
}
