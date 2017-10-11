export default obj =>
  (obj
    ? Object.keys(obj)
      .sort()
      .map((key) => {
        const val = obj[key];
        if (val === undefined) {
          return '';
        }
        if (val === null) {
          return key;
          // return encodeURIComponent(key);
        }
        if (Array.isArray(val)) {
          const result = [];

          val.slice().forEach((val2) => {
            if (val2 === undefined) {
              return;
            }

            if (val2 === null) {
              result.push(key);
              // result.push(encodeURIComponent(key));
            } else {
              result.push(`${key}=${encodeURIComponent(val2)}`);
              // result.push(encodeURIComponent(key) + '=' + encodeURIComponent(val2));
            }
          });

          return result.join('&');
        }
        return `${key}=${encodeURIComponent(val)}`;
        // return encodeURIComponent(key, opts) + '=' + encodeURIComponent(val, opts);
      })
      .filter(x => x.length > 0)
      .join('&')
    : '');
