import { GalleryItem, ImageGallery } from './ImageGalleryItem.styled';
import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
export class ImageGalleryItem extends Component {
  state = {
    isBtnClick: false,
  };
  onImgClick = e => {
    this.setState({
      isBtnClick: !false,
    });
  };
  componentDidMount() {
    window.addEventListener('click', e => {
      if (this.state.isBtnClick === false) return;
      if (e.target.classList.contains('overlay')) {
        this.setState({
          isBtnClick: false,
        });
      }
    });
    window.addEventListener('keydown', e => {
      if (this.state.isBtnClick === false) return;
      if (e.key === 'Escape') {
        this.setState({
          isBtnClick: false,
        });
      }
    });
  }
  render() {
    const { webformatURL, largeImageURL } = this.props.img;

    return (
      <GalleryItem>
        <ImageGallery onClick={this.onImgClick} src={webformatURL} />
        {this.state.isBtnClick && <Modal img={largeImageURL} />}
      </GalleryItem>
    );
  }
}
