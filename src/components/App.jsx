import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { TheImgByAPI } from '../services/api';
import { Report } from 'notiflix/build/notiflix-report-aio';
Report.init({
  backgroundColor: 'pink',
  info: {
    buttonColor: 'black',
    buttonBackground: 'white',
    svgColor: 'white',
    titleColor: 'white',
    messageColor: 'black',
  },
});
export class App extends Component {
  state = {
    imgs: null,
    isLoading: false,
    error: null,
    query: '',
    totalHits: null,
  };
  theImgByAPI = new TheImgByAPI();

  formSubmit = query => {
    this.setState({ isLoading: true });
    this.fetchImg(query);
  };

  fetchImg = async query => {
    this.setState({ isLoading: true });
    try {
      await this.theImgByAPI.fetchImgByQuery(query).then(response => {
        this.setState({
          imgs: response.hits,
          isLoading: false,
          query,
          totalHits: response.totalHits,
        });
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  onBtnClick = event => {
    if (this.theImgByAPI.per_page > this.state.totalHits) {
      Report.info('No more images', {
        backOverlayColor: 'pink',
      });
      return;
    }
    this.theImgByAPI.page += 1;
    this.theImgByAPI.per_page =
      this.theImgByAPI.per_page * this.theImgByAPI.page;
    this.fetchImg(this.state.query);
  };
  render() {
    const { imgs } = this.state;

    return (
      <>
        <Searchbar onFormSubmit={this.formSubmit} />
        <ImageGallery imgs={imgs ?? []} />
        {this.state.isLoading && <Loader />}
        {imgs && <Button onClick={this.onBtnClick} />}
      </>
    );
  }
}
