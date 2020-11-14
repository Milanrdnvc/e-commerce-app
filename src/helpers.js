export function getFromLocalStorage(key) {
  if (localStorage.getItem(key) === 'undefined') return null;
  return JSON.parse(localStorage.getItem(key));
}

export function setToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getNumOfItemsAdded(items) {
  let numOfItemsAdded = 0;
  items.forEach(item => {
    if (item.added) {
      numOfItemsAdded++;
    }
  });
  return numOfItemsAdded;
}
