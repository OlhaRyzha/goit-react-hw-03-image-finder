import axios from 'axios';
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
export class TheImgByAPI {
  static BASE_URL = 'https://pixabay.com/api';
  static API_KEY = '32830040-7bce44f963d1f6b8a44f1755d';

  constructor() {
    axios.defaults.baseURL = TheImgByAPI.BASE_URL;
    this.q = null;
    this.page = 1;
    this.per_page = 12;
  }

  async fetchImgByQuery(query) {
    try {
      const response = await axios.get('/', {
        params: {
          key: TheImgByAPI.API_KEY,
          q: query,
          page: this.page,
          per_page: this.per_page,
          orientation: 'horizontal',
          image_type: 'photo',
        },
      });

      return response.data;
    } catch (err) {
      if (err.response.status === 400) {
        Report.info('No more images');
        return;
      }
      console.log(err);
    }
  }
}
