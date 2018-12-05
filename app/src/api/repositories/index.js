import axios from 'axios';

export const BASE_URL = 'http://localhost:9000';

const getRepositories = (username) => {
  const url = `${BASE_URL}/repositories/${username}`;
  return axios.get(url).then(response => response.data);
};

export default {
  getRepositories,
};