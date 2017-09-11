export default (arg) => {
  let date;
  if (arg) {
    const int = parseInt(arg, 10);
    if (!isNaN(int)) {
      date = new Date(int);
    }
  }
  if (!date || isNaN(date.getTime())) {
    date = new Date();
  }
  return date;
};
