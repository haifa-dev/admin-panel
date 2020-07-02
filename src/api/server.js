import axios from 'axios';

export const baseURL = 'http://localhost:5000';
export const serverURL = `${baseURL}/api/v1`;

export default axios.create({
  baseURL: serverURL
});
