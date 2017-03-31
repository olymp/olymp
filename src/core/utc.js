import moment from 'moment';

const offset = moment().utcOffset();
export default function() {
  return moment.utc.apply(this, arguments).add(offset, 'm');
};

