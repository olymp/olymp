import cron from 'node-cron';
import fetch from 'isomorphic-fetch';

// Url for Glaubensimpuls
const url =
  'https://api.instagram.com/v1/users/976930779/media/recent?access_token=15212360.ba4c844.05522f13a1e84fe5b8280d65c0cc8353&count=1';
// authkey hier generieren lassen (andere Seiten gehen nicht (mehr)): http://instagramwordpress.rafsegat.com/docs/get-access-token/#access_token=15212360.ba4c844.f7f2feb22b774ade838666d3dd0affb5
const testData = {
  pagination: {
    next_url:
      'https://api.instagram.com/v1/users/976930779/media/recent?access_token=15212360.ba4c844.f7f2feb22b774ade838666d3dd0affb5\u0026count=1\u0026max_id=1399824060582295380_976930779',
    next_max_id: '1399824060582295380_976930779',
  },
  meta: {
    code: 200,
  },
  data: [
    {
      attribution: null,
      tags: ['adventszeit', 'glaubensimpuls', 'adventskalender'],
      user: {
        username: 'glaubensimpuls',
        profile_picture:
          'https://scontent.cdninstagram.com/t51.2885-19/14596804_145964162529557_8997841624809603072_a.jpg',
        id: '976930779',
        full_name: 'Glaubensimpuls',
      },
      comments: {
        count: 0,
      },
      filter: 'Normal',
      images: {
        low_resolution: {
          url:
            'https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/15276660_1868281953406201_7949528957844455424_n.jpg?ig_cache_key=MTM5OTgyNDA2MDU4MjI5NTM4MA%3D%3D.2',
          width: 320,
          height: 320,
        },
        thumbnail: {
          url:
            'https://scontent.cdninstagram.com/t51.2885-15/s150x150/e35/15276660_1868281953406201_7949528957844455424_n.jpg?ig_cache_key=MTM5OTgyNDA2MDU4MjI5NTM4MA%3D%3D.2',
          width: 150,
          height: 150,
        },
        standard_resolution: {
          url:
            'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/15276660_1868281953406201_7949528957844455424_n.jpg?ig_cache_key=MTM5OTgyNDA2MDU4MjI5NTM4MA%3D%3D.2',
          width: 640,
          height: 640,
        },
      },
      link: 'https://www.instagram.com/p/BNtLJEHDXdU/',
      likes: {
        count: 9,
      },
      created_time: '1481092053',
      user_has_liked: false,
      users_in_photo: [],
      caption: {
        created_time: '1481092053',
        text:
          '#Glaubensimpuls zum 7. Dezember #Adventskalender \nWir w\u00fcnschen Dir eine gesegnete #Adventszeit \nhier t\u00e4gl. als Video http://ow.ly/dLLU306RK3V',
        from: {
          username: 'glaubensimpuls',
          profile_picture:
            'https://scontent.cdninstagram.com/t51.2885-19/14596804_145964162529557_8997841624809603072_a.jpg',
          id: '976930779',
          full_name: 'Glaubensimpuls',
        },
        id: '17856441649103694',
      },
      type: 'image',
      id: '1399824060582295380_976930779',
      location: null,
    },
  ],
};

export default ({ schema }) => {
  // Losung buffer
  let item = testData;

  // Get Losung
  /* const get = () => {
    // Get Glaubensimpuls from url
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(json => {
        item = json;
        console.log('Neuer Impuls');
      })
      .catch(err => console.log(err));
  };

  cron.schedule('00 00 * * * *', get);

  // Get initial
  get();

  if (!item || !item.data || !item.data[0]) item = testData; */

  return schema.addSchema({
    name: 'glaubensimpuls',
    query: `
      glaubensimpuls: Glaubensimpuls
    `,
    resolvers: {
      Query: {
        glaubensimpuls: () => ({
          thumb: {
            url: item.data[0].images.thumbnail.url,
            width: item.data[0].images.thumbnail.width,
            height: item.data[0].images.thumbnail.height,
            caption: item.data[0].caption ? item.data[0].caption.text : '',
            source: item.data[0].user.profile_picture,
          },
          small: {
            url: item.data[0].images.low_resolution.url,
            width: item.data[0].images.low_resolution.width,
            height: item.data[0].images.low_resolution.height,
            caption: item.data[0].caption ? item.data[0].caption.text : '',
            source: item.data[0].user.profile_picture,
          },
          large: {
            url: item.data[0].images.standard_resolution.url,
            width: item.data[0].images.standard_resolution.width,
            height: item.data[0].images.standard_resolution.height,
            caption: item.data[0].caption ? item.data[0].caption.text : '',
            source: item.data[0].user.profile_picture,
          },
          tags: item.data[0].tags,
        }),
      },
    },
    schema: `
      type Glaubensimpuls {
        thumb: Image
        small: Image
        large: Image
        # @label("Schlagworte")
        tags: [String]
      }
    `,
  });
};
