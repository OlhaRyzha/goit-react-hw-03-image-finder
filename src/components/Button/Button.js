import { GalleryBtn } from './Button.styled';

export function Button({ onClick }) {
  return <GalleryBtn onClick={onClick}>Load more</GalleryBtn>;
}
