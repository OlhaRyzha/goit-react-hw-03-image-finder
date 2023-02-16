import { GalleryItem, ImageGallery } from './ImageGalleryItem.styled';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  onImgClick = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, largeImageURL } = this.props.img;

    return (
      <GalleryItem>
        <ImageGallery onClick={this.onImgClick} src={webformatURL} />
        {this.state.showModal && (
          <Modal onClose={this.onImgClick}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </GalleryItem>
    );
  }
}
