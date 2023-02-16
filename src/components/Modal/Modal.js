import { Overlay, ModalEl } from './Modal.styled';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  onImgKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };
  onOverlayClick = e => {
    if (e.target.classList.contains('overlay')) {
      this.props.onClose();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('click', this.onOverlayClick);
    window.removeEventListener('keydown', this.onImgKeyDown);
  }
  componentDidMount() {
    window.addEventListener('click', this.onOverlayClick);
    window.addEventListener('keydown', this.onImgKeyDown);
  }
  render() {
    const { children } = this.props;
    return createPortal(
      <>
        <Overlay className="overlay">
          <ModalEl>{children}</ModalEl>
        </Overlay>
      </>,
      modalRoot
    );
  }
}
