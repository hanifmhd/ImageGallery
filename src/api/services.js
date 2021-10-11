const EDU = '/api/v1';

const HomeServicePath = {
  getAll: (page, limit) => `/artworks?page=${page}&limit=${limit}`,
  getDetail: id => `/artworks/${id}`,
  search: query => `/artworks/search?q=${query}`,
};

export {EDU, HomeServicePath};
