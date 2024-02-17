const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDate = (rowDate = new Date()) => {
  const date = new Date(rowDate);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = days[date.getDay()];
  const d = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return {
    year,
    month,
    day,
    date: d,
    hour,
    minute,
    fullDate: `${d} ${month} ${year}`,
    fullTime: `${hour}:${minute}`,
  };
};

export default getDate;
