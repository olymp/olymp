export default (
  w,
  ratio,
  isPercentage,
  { minWidth, minHeight, maxWidth, maxHeight, maxResolution },
) => {
  let width = w;

  // minWidth/minHeight
  if (minWidth && width < minWidth) {
    width = minWidth;
  }
  if (!isPercentage && minHeight && width * ratio < minHeight) {
    width = minHeight / ratio;
  }

  // maxWidth/maxHeight
  if (maxWidth && width > maxWidth) {
    width = maxWidth;
  }
  if (!isPercentage && maxHeight && width * ratio > maxHeight) {
    width = maxHeight / ratio;
  }

  // maxResolution
  if (width ** 2 * ratio > maxResolution) {
    width = Math.sqrt(maxResolution / ratio);
  }

  return Math.round(width);
};
