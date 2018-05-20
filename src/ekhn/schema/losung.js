import { moment } from 'olymp/locale-de';
import cron from 'node-cron';
import losungen from './losungen.json';

export default ({ schema }) => {
  // Losung buffer
  let item;

  // Get Losung
  const get = () => {
    // Randomly
    const date = moment().startOf('day');
    const losung = losungen.filter(
      item =>
        moment(item.Datum, 'DD.MM.YYYY').isSame(date) ||
        moment(new Date(item.Datum)).isSame(date)
    );

    if (losung.length > 0) {
      console.log('Neue Losung nach Datum', date.format());
      item = losung[0];
    } else {
      console.log(
        'Neue Losung zufällig da Datum nicht gefunden',
        date.format()
      );
      item = losungen[Math.floor(Math.random() * losungen.length)];
    }
  };

  cron.schedule('00 01 00 * * *', get);

  // Get initial
  get();

  return schema.addSchema({
    name: 'losung',
    query: `
      losung: Losung
    `,
    resolvers: {
      Query: {
        losung: () => ({
          id: item.Wtag,
          datum: item.Datum,
          tag: item.Wtag,
          sonntag: item.Sonntag,
          losungtext: item.Losungstext,
          losungvers: item.Losungsvers,
          lehrtext: item.Lehrtext,
          lehrvers: item.Lehrtextvers,
        }),
      },
    },
    schema: `
      type Losung {
        id: String
        datum: String
        tag: String
        sonntag: String
        losungtext: String
        losungvers: String
        lehrtext: String
        lehrvers: String
      }
    `,
  });
};
