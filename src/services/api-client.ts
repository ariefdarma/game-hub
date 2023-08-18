import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '912b3b9871094dbdb830349c4e1d74a2',
  },
});
