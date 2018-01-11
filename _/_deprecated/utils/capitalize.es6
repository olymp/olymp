export default (str) => {
  if (!str) { return str; }
  return str.charAt(0).toUpperCase() + str.substring(1);
};
