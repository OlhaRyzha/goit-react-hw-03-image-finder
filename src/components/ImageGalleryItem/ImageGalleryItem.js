import { GalleryItem, ImageGallery } from './ImageGalleryItem.styled';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  onImgClick = e => {
    this.setState({
      showModal: !false,
    });
  };
  onImgKeyDown = e => {
    if (this.state.isBtnClick === false) return;
    if (e.key === 'Escape') {
      this.setState({
        showModal: false,
      });
    }
  };
  onOverlayClick = e => {
    if (this.state.isBtnClick === false) return;
    if (e.target.classList.contains('overlay')) {
      this.setState({
        showModal: false,
      });
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
    const { webformatURL, largeImageURL } = this.props.img;

    return (
      <GalleryItem>
        <ImageGallery onClick={this.onImgClick} src={webformatURL} />
        {this.state.showModal && (
          <Modal>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </GalleryItem>
    );
  }
}
