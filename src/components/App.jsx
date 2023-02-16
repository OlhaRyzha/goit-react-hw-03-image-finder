import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { TheImgByAPI } from '../services/api';

export class App extends Component {
  state = {
    imgs: null,
    isLoading: false,
    error: null,
    query: '',
    page: 1,
    showLoadMore: false,
  };
  theImgByAPI = new TheImgByAPI();

  formSubmit = query => {
    this.setState({
      query,
      imgs: [],
      isloading: false,
      error: null,
      page: 1,
      showLoadMore: false,
    });
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      try {
        const { hits, totalHits } = await this.theImgByAPI.fetchImgByQuery(
          query,
          page
        );
        this.setState(prevState => ({
          imgs: [...prevState.imgs, ...hits],
          showLoadMore: page < Math.ceil(totalHits / 12),
        }));
      } catch (error) {
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  onBtnClick = event => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { imgs, isLoading, showLoadMore } = this.state;

    return (
      <>
        <Searchbar onFormSubmit={this.formSubmit} />
        {imgs?.length > 0 && <ImageGallery imgs={imgs} />}

        {isLoading && <Loader />}
        {showLoadMore && <Button onClick={this.onBtnClick} />}
      </>
    );
  }
}
