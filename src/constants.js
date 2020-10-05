const prod = {
  url: {
    apiUrl: 'https://mystash.herokuapp.com',
  }
};

const dev = {
  url: {
    apiUrl: 'http://localhost:3000',
  }
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
