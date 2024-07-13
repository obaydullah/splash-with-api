export const getRemainingDays = (targetDate) => {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

  const difference = targetDate - new Date();

  const diffDays = Math.floor(Math.abs(difference / oneDay));

  const diffHours = Math.floor(difference / 1000 / 3600) % 24;

  const diffMinutes = Math.floor(difference / 1000 / 60) % 60;

  const diffSeconds = Math.floor(difference / 1000) % 60;

  return {
    day: diffDays,
    hour: diffHours,
    minute: diffMinutes,
    second: diffSeconds,
  };
};
