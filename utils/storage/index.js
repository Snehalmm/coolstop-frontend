// import { useCookies } from "react-cookie";

const saveToStorage = (key, data) => {
  // const [cookies, setCookie, removeCookie] = useCookies(key);
  // setCookie(key, JSON.stringify(data));
  localStorage.setItem(key, JSON.stringify(data));
};

const getFromStorage = (key) => {
  // const [cookies, setCookie, removeCookie] = useCookies(key);
  const jsonData = localStorage.getItem(key);
  // const cookieJson = setCookie(key);

  const data = JSON.parse(jsonData);
  return data;
};

const deleteFromStorage = (key) => {
  // const [cookies, setCookie, removeCookie] = useCookies(key);
  // removeCookie(key);
  localStorage.removeItem(key);
};

export { saveToStorage, getFromStorage, deleteFromStorage };
