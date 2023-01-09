export const changeTimezone = (date: Date, timeZone: string) => {
  const invdate = new Date(
    date.toLocaleString("en-US", {
      timeZone,
    })
  );

  const diff = date.getTime() - invdate.getTime();

  return new Date(date.getTime() - diff);
};
