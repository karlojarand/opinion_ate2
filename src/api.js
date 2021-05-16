import axios from 'axios';

const client = axios.create({
  baseURL: 'https://outside-in-dev-api.herokuapp.com/IBqOcy1M9DSllT7VIWAG20YW9X9ZSxwU',
});

const api = {
    loadRestaurants() {
            return client.get('/restaurants').then(response => response.data);
  },
};
  export default api;