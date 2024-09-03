export function getDayOfWeek(dateString) {
  const date = new Date(dateString);
  date.setDate(date.getDate() + 1);
  const options = { weekday: "long" };
  return date.toLocaleDateString("en-US", options);
}
