import axios from 'axios';

const KEY = 'AIzaSyBzRH0HydTBz3zRLMciVfHKgxse_wyrpYQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
