const saveToStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getFromStorage = (key) => {
  const jsonData = localStorage.getItem(key);
  const data = JSON.parse(jsonData);
  return data;
};

const deleteFromStorage = (key) => {
  localStorage.removeItem(key);
};

export { saveToStorage, getFromStorage, deleteFromStorage };
