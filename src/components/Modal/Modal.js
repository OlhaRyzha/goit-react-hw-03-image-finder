import { Overlay, ModalEl } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export function Modal({ children }) {
  return createPortal(
    <>
      <Overlay className="overlay">
        <ModalEl>{children}</ModalEl>
      </Overlay>
    </>,
    modalRoot
  );
}
