import React from 'react';
import { createComponent } from 'olymp-fela';
import Panel from './panel';
import Container from './container';

const Li = createComponent(({ theme }) => ({
  paddingBottom: theme.space2,
  ':last-of-type': {
    paddingBottom: 0,
  },
}), 'li', p => Object.keys(p));

export default {
  label: 'Veranstaltungen, Neuigkeiten',
  category: 'Panel',
  editable: false,
  component: ({ className, ...props }) => (
    <Container className={className}>
      <Panel medium={6} title="Veranstaltungen" background="rgb(73, 146, 195)" color="#FFF">
        <ul>
          <Li>
            <b>Vortrag am 25. April 2017, 18 Uhr</b>
            <p>Ursachen und aktuelle Behandlungsmöglichkeiten von Schulterschmerzen</p>
          </Li>
          <Li>
            <b>Vortrag am 21. März 2017, 18 Uhr</b>
            <p>Gelenkersatz am Knie</p>
          </Li>
        </ul>
      </Panel>
      <Panel medium={6} title="Neuigkeiten" background="rgb(62, 167, 62)" color="#FFF">
        <ul>
          <Li>
            <b>Presseartikel vom 15. Dezember 2016</b>
            <p>Vertreterversammlung der KV Hessen wählt neue Vorsitzende</p>
          </Li>
          <Li>
            <b>Publikation vom 08. Dezember 2016</b>
            <p>Pflegeinfo Express</p>
          </Li>
        </ul>
      </Panel>
    </Container>
  ),
};
