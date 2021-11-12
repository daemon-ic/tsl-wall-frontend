import moment from "moment";

export const smartTimestamp = (postedTimestamp) => {
  const postedDate = new Date(Number(postedTimestamp));
  return moment(postedDate.toString()).fromNow();
};

export const pathAndButtonMatch = (buttonName) => {
  const path = window.location.pathname;
  const firstPath = path.split("/")[1];
  buttonName = buttonName.toLowerCase();
  return firstPath === buttonName ? true : false;
};
