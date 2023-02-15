import axios from 'axios';

export class TheImgByAPI {
  static BASE_URL = 'https://pixabay.com/api';
  static API_KEY = '32830040-7bce44f963d1f6b8a44f1755d';

  constructor() {
    axios.defaults.baseURL = TheImgByAPI.BASE_URL;
    this.q = null;
    this.page = 1;
    this.per_page = 12;
  }

  async fetchImgByQuery(query, page = 1) {
    try {
      const { data } = await axios.get('/', {
        params: {
          key: TheImgByAPI.API_KEY,
          q: query,
          page: page,
          per_page: this.per_page,
          orientation: 'horizontal',
          image_type: 'photo',
        },
      });

      return data;
    } catch (err) {
      console.log(err);
    }
  }
}
