import React from 'react';
import Container from './container';
import Li from './li';
import Panel from './panel';
import Carousel from './carousel';

export default {
  label: 'Veranstaltungen, Magazin',
  category: 'Panel',
  editable: false,
  component: ({ className, attributes }) =>
    (<Container {...attributes} className={className}>
      <Carousel
        title="Magazin"
        bordered="Magazin"
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
      <Panel
        medium={7}
        title="Veranstaltungen"
        bordered="Veranstaltungen"
        background="rgb(73, 146, 195)"
        color="#FFF"
      >
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
