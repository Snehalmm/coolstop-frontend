export const Path = {
  newsLetter: `/api/news-letters`,
  products: `/api/products`,
  reviews: `/api/reviews`,
  signup: `/api/auth/local/register`,
  login: `/api/auth/local`,
  forgotPassword: `/api/auth/forgot-password`,
  home: `/api/home`,
  resetpassword: `/api/auth/reset-password`,
  order: `/api/orders`,
  changePassword: `/api/auth/change-password`,
  getDiscountCode: `/api/discount-coupons`,
  getProductcategories: `/api/product-categories`,
  global: `/api/global`,
};

const getEndpoint = (apiName, pathValue) => {
  return `${Path[apiName]}?filters[slug][$eq]=${pathValue}`;
};
export const productDetailsEndpoint = (slug) => {
  return getEndpoint("products", slug);
};

const getCategoriesEndpoint = (apiName, pathValue) => {
  return `${Path[apiName]}?filters[brand][name][$eq]=${pathValue}`;
};
export const categoriesDetailsEndpoint = (name) => {
  return getCategoriesEndpoint("products", name);
};

const getNewletterEndpoint = (apiName, pathValue) => {
  return `${Path[apiName]}?filters[emailId][$eq]=${pathValue}`;
};
export const newsLetterEndpoint = (emailId) => {
  return getNewletterEndpoint("newsLetter", emailId);
};

const deleteEndpoint = (apiName, pathValue) => {
  return `${Path[apiName]}/${pathValue}`;
};
export const deleteNewsLetterEndpoint = (id) => {
  return deleteEndpoint("newsLetter", id);
};
