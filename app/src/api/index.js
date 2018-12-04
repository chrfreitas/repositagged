import axios from 'axios';

export const BASE_URL = 'http://localhost:9000';

const getRepositories = (username) => {
  const url = `${BASE_URL}/repositories/${username}`;

  return fetch(url, {
    method: 'GET',
  }).then(response => response.json());
};

const editTags = ({ id, tags }) => {
  const url = `${BASE_URL}/repositories/create`;

  return axios.post(url, {
    id,
    tags,
  });
};

export default {
  getRepositories,
  editTags,
};
