import axios from 'axios'

export const onGetProduct = () => {
  return axios.get(`https://cc-mock-api.herokuapp.com/product`);
}

export const onGetProductById = (id) => {
  return axios.get(`https://cc-mock-api.herokuapp.com/product/${id}`);
}