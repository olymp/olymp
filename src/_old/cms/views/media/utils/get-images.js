export default (files, { color, text, tag }) => files.filter(item => {
  if (color && ((item.palette || []).indexOf(color) === -1)) {
    return false;
  } else if (tag && (item.tags || []).indexOf(tag) === -1) {
    return false;
  } else if (text && ((!item.comment || item.comment.toLowerCase().indexOf(text.toLowerCase()) === -1) &&
    (!item.tags || !item.tags.filter(x => x.toLowerCase().indexOf(text.toLowerCase()) !== -1).length))) {
    return false;
  } return true;
});
