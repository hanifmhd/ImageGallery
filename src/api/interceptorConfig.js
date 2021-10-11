const requestConfig = async () => {
  return {
    headers: {
      accept: 'application/json',
      'accept-language': 'en',
      'content-type': 'application/json',
    },
  };
};

const responseConfig = {};

const printRespLog = resp => {
  console.log(`________${resp.config.url}________`);
  console.log(
    JSON.stringify(
      {
        request: {
          method: resp.config.method,
          baseURL: resp.config.baseURL,
          param: resp.config.params || resp.config.data,
          headers: resp.config.headers,
        },
        response: {
          pagination: resp.pagination,
          resp: resp.data,
          error: resp.error,
        },
      },
      null,
      2,
    ),
  );
  console.log('_____________END_______________');
};

export {requestConfig, printRespLog, responseConfig};
