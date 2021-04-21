import localforage from "localforage";
import eventsArray from "./data.json";

export const myStore = localforage.createInstance({
  name: "localdb",
  storeName: "events",
});

eventsArray.forEach((event, key) => {
  myStore.setItem(String(key), event);
});

export const fetchDataFromIndexedDB = () => {
  let eventsList = [];
  if (eventsArray.length > 0) {
    eventsArray.forEach((event, key) => {
      const result = myStore.getItem(String(key));
      eventsList.push(result);
    });
  }
  return eventsList;
};

// export const rows = [];

// function getRows() {
//   for (let i = 0; i < 24; i++) {
//     rows.push(i);
//   }
// }

// getRows();

export const getRows = () => {
  const rows = [];
  for (let i = 0; i < 24; i++) {
    rows.push(i);
  }
  return rows;
};
