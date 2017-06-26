import React from 'react';
import Container from './container';
import { Panel, Li } from '../../components';
import Carousel from './carousel';

export default {
  key: 'GZK.Panel.Magazin',
  label: 'Magazin, Veranstaltungen',
  category: 'Panel',
  editable: false,
  component: ({ className, attributes }) =>
    (<Container {...attributes} className={className}>
      <Carousel
        title="Magazin"
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
      <Panel medium={7} title="Veranstaltungen" accent="rgb(73, 146, 195)">
        <ul>
          <Li>
            <b>Vortrag am 25. April 2017, 18:00 Uhr</b>
            <p>
              Ursachen und aktuelle Behandlungsmöglichkeiten von
              Schulterschmerzen
            </p>
          </Li>
          <Li>
            <b>Vortrag am 21. März 2017, 18:00 Uhr</b>
            <p>Gelenkersatz am Knie</p>
          </Li>
          <Li>
            <b>Vortrag am 25. April 2017, 18:00 Uhr</b>
            <p>
              Ursachen und aktuelle Behandlungsmöglichkeiten von
              Schulterschmerzen
            </p>
          </Li>
          <Li>
            <b>Vortrag am 21. März 2017, 18:00 Uhr</b>
            <p>Gelenkersatz am Knie</p>
          </Li>
          <Li>
            <b>Vortrag am 25. April 2017, 18:00 Uhr</b>
            <p>MAXIMAL 5 ITEMS!</p>
          </Li>
        </ul>
      </Panel>
    </Container>),
};
