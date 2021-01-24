const axios = require('axios');

const axiosInstance = axios.default.create({
    baseURL: 'https://api.mercadolibre.com'
});

export default axiosInstance;