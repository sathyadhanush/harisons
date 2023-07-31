import { DateTime } from 'luxon';

export function startDate(date) {
  const d = date;
  d.setUTCHours(0, 0, 0, 0);
  return d;
}

export function endDate(date) {
  const d = date;
  d.setUTCHours(23, 59, 59, 0);
  return d;
}

export function getDate(date) {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

export function getDateAndTime(string) {
  return DateTime.fromISO(string).toLocaleString(DateTime.DATETIME_SHORT);
}

export function getDateFromString(string) {
  // console.log(`date`, string);
  const date = new Date(string);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}
