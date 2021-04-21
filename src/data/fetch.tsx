import localforage from "localforage";
import eventsArray from "./data.json";

export const myStore = localforage.createInstance({
  name: "localdb",
  storeName: "events",
});

eventsArray.forEach((event, key) => {
  myStore.setItem(String(key), event);
});

type Event = {
  title: String;
  date: String;
  startTime: Number;
  duration: Number;
};

export const fetchDataFromIndexedDB = () => {
  let eventsList: Promise<Event | null>[] = [];
  if (eventsArray.length > 0) {
    eventsArray.forEach((event, key) => {
      let result: Promise<Event | null> = myStore.getItem(String(key));
      eventsList.push(result);
    });
  }
  return eventsList;
};

export const getRows = () => {
  const rows = [];
  for (let i = 0; i < 24; i++) {
    rows.push(i);
  }
  return rows;
};
