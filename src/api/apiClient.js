import axios from 'axios';
import {printRespLog, requestConfig} from './interceptorConfig';
const BASE_URL = 'https://api.artic.edu';

export default class apiClient {
  static instance: apiClient | null = null;

  static getInstance(customBaseUrl?) {
    if (apiClient.instance == null) {
      apiClient.instance = new apiClient();
    }
    return this.instance;
  }

  api = () => {
    const axs = axios.create({
      baseURL: BASE_URL,
      timeout: 8000,
    });

    axs.interceptors.response.use(
      resp => {
        printRespLog(resp);
        return resp;
      },
      error => {
        printRespLog(error.response);
        return Promise.reject(error);
      },
    );
    return axs;
  };

  async get(path, config?) {
    const reqConfigDefault = await requestConfig();
    const configs = {
      ...reqConfigDefault,
      ...config,
    };
    return this.api()
      .get(path, configs)
      .then(response => response.data)
      .catch(error => Promise.reject(error.response?.data || {}));
  }

  async post(path, data, config?) {
    const reqConfigDefault = await requestConfig();
    const configs = {
      ...reqConfigDefault,
      ...config,
    };
    return this.api()
      .post(path, data, configs)
      .then(response => response.data)
      .catch(error => Promise.reject(error.response?.data || {}));
  }

  async put(path, data) {
    return this.api()
      .put(path, data)
      .then(response => response.data)
      .catch(error => Promise.reject(error.response?.data || {}));
  }

  async request(config) {
    const reqConfigDefault = await requestConfig();
    const configs = {
      ...reqConfigDefault,
      ...config,
    };
    return this.api().request(configs);
  }
}
