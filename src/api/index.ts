import axios from 'axios';

const instance = axios.create({
  // baseURL: `http://localhost:8080/`
  baseURL: '/'
});

export default instance;

// export const getArticle = instance.get<string>('/test.md');