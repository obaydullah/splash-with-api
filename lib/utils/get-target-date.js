export const getTargetDate = () => {
  const date = new Date();
  date.setUTCDate(1);
  date.setUTCHours(0);
  date.setUTCMinutes(0);
  date.setUTCSeconds(0);
  date.setUTCMilliseconds(0);
  date.setUTCFullYear(date.getUTCFullYear());
  date.setUTCMonth(date.getUTCMonth() + 1);
  return date;
};
