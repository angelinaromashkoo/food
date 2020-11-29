import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer q1nRMMSFwC9SLt3llqQOxM1OK7sDKRuEqhrWU8KQRg8_LQz3_2lMTPeYRfDsaT9UH0o_pHeJqZLFHdlxj5XVitiKLdWW5ASRdFD6r3rCQHoLi3qZcb-t-OYptOAfX3Yx',
  },
});
