import apiClient from '../apiClient';
import {EDU, HomeServicePath} from '../services';

export const getAll = (page, limit) => {
  return apiClient.getInstance().get(EDU + HomeServicePath.getAll(page, limit));
};

export const getDetail = id => {
  return apiClient.getInstance().get(EDU + HomeServicePath.getDetail(id));
};

export const search = query => {
  return apiClient.getInstance().get(EDU + HomeServicePath.search(query));
};
