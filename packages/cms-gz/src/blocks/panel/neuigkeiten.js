import React from 'react';
import Container from './container';
import { Panel, Li } from '../../components';
import Carousel from './carousel';

export default {
  label: 'Neuigkeiten, Einrichtungen',
  category: 'Panel',
  editable: false,
  component: ({ className, attributes }) =>
    (<Container {...attributes} className={className}>
      <Panel
        medium={7}
        title="Neuigkeiten"
        bordered="Neuigkeiten"
        background="rgb(62, 167, 62)"
        color="#FFF"
      >
        <ul>
          <Li>
            <b>Presseartikel vom 15. Dezember 2016</b>
            <p>Vertreterversammlung der KV Hessen wählt neue Vorsitzende</p>
          </Li>
          <Li>
            <b>Publikation vom 08. Dezember 2016</b>
            <p>Pflegeinfo Express</p>
          </Li>
          <Li>
            <b>Presseartikel vom 15. Dezember 2016</b>
            <p>Vertreterversammlung der KV Hessen wählt neue Vorsitzende</p>
          </Li>
          <Li>
            <b>Publikation vom 08. Dezember 2016</b>
            <p>Pflegeinfo Express</p>
          </Li>
          <Li>
            <b>Presseartikel vom 15. Dezember 2016</b>
            <p>MAXIMAL 5 ITEMS!</p>
          </Li>
        </ul>
      </Panel>
      <Carousel
        title="Einrichtungen"
        bordered="Einrichtungen"
        size={5}
        items={[
          {
            url:
              'https://res.cloudinary.com/djyenzorc/image/upload/v1482483297/Z1pLCLtn51l_edd3gh.jpg',
          },
          {
            url:
              'https://res.cloudinary.com/djyenzorc/image/upload/v1482483297/ZJwg-TF0c51l_xfh4q5.jpg',
          },
          {
            url:
              'https://res.cloudinary.com/djyenzorc/image/upload/v1482483297/Wke6YQMjq1x_vprqa2.jpg',
          },
        ]}
      />
    </Container>),
};
