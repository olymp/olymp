export default (description) => {
  const specialFields = {};
  if (!description) return specialFields;
  description.replace(
    /\@\w+(\[[0-9]+\])?(\(.+\))?/gi,
    (match, text, urlId) => {
      if (!match) return;
      const [split0, values] = match.split('(');
      let [name, index = null] = split0.split('[');
      name = name.substr(1);
      if (index) {
        try {
          index = parseInt(index.substr(index, index.length - 1), 10);
        } catch (err) {
          index = null;
        }
      }
      const specialValues = {};
      try {
        values.substr(0, values.length - 1).split(',').forEach((x, i) => {
          specialValues[`value${i || ''}`] = JSON.parse(x);
        });
      } catch (err) { }
      const specialField = {
        ...specialValues,
      };

      if (index || index === 0) {
        if (!specialFields[name]) specialFields[name] = [];
        specialFields[name].splice(
          index >= specialFields[name].length
            ? specialFields[name].length
            : index,
          0,
          specialField
        );
      } else {
        specialFields[name] = specialField;
      }
    }
  );
  return specialFields;
};
