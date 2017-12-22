export default data => {
  if (!data) return [];
  return [...data.keys()].map(x => ({
    name: x,
    val:
      typeof data.get(x) === 'object'
        ? JSON.stringify(data.get(x))
        : `"${data.get(x)}"`,
  }));
};
