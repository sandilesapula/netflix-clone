import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default instance;

// https://api.themoviedb.org/3/discover/tv?api_key=feab598da53be747d6518d05a3e58a5d&with_networks=213
// http://localhost:3000/discover/tv?api_key=feab598da53be747d6518d05a3e58a5d&with_networks=213