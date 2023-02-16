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
    window.removeEventListener('keydown', this.onImgKeyDown);
  }
  componentDidMount() {
    window.addEventListener('keydown', this.onImgKeyDown);
  }
  render() {
    const { children } = this.props;
    return createPortal(
      <>
        <Overlay onClick={this.onOverlayClick} className="overlay">
          <ModalEl>{children}</ModalEl>
        </Overlay>
      </>,
      modalRoot
    );
  }
}
