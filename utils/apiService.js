export const Path = {
  newsLetter: `/api/news-letters`,
  products: `/api/products`,
  reviews: `/api/reviews`,
  writeReview: `/api/reviews`,
  signup: `/api/auth/local/register`,
  login: `/api/auth/local`,
  forgotPassword: `/api/auth/forgot-password`,
  home: `/api/home`,
  resetpassword: `/api/auth/reset-password`,
  order: `/api/orders`,
};

const getEndpoint = (apiName, pathValue) => {
  return `${Path[apiName]}/${pathValue}`;
};
export const productDetailsEndpoint = (id) => {
  return getEndpoint("products", id);
};
