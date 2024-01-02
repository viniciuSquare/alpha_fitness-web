export function formatTime(time: string) {
  let formattedTime: string;

  if (time.includes(":")) {
    formattedTime = `${time
      .substring(0, time.indexOf(":") + 1)
      .padEnd(2, "0")}${time
        .substring(time.indexOf(":") + 1)
        .padEnd(2, "0")}`;
  } else {
    formattedTime = secondsToMinutes(Number(time));
  }

  return formattedTime;
}

export function secondsToMinutes(seconds: number) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}