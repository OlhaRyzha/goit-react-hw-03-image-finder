import { Overlay, ModalEl } from './Modal.styled';
export function Modal({ img }) {
  return (
    <>
      <Overlay className="overlay">
        <ModalEl>
          <img src={img} alt="" />
        </ModalEl>
      </Overlay>
    </>
  );
}
