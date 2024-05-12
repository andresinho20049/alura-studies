const timeToSeconds = (time?: string) => {
  if (!time) return 0;

  const [hours = "0", minutes = "0", seconds = "0"] = time.split(":");

  const hoursOnSeconds = Number(hours) * 3600;
  const minutesOnSeconds = Number(minutes) * 60;
  return hoursOnSeconds + minutesOnSeconds + Number(seconds);
};

export default timeToSeconds;
