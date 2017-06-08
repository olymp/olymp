import React from 'react';
import { Grid } from 'olymp-fela';
import Panel from './panel';
import Container from './container';

export default {
  label: 'Veranstaltungen, Neuigkeiten',
  category: 'Panel',
  component: ({ className, ...props }) => (
    <Container className={className}>
      <Panel medium={2} title="Veranstaltungen" background="rgb(73, 146, 195)" color="#FFF" size={2}>
        Wir bieten eine Fülle an Präventionsleistungen auf allen Fachgebieten an. Hierbei handelt es sich um vorbeugenden Maßnahmen die dazu dienen, den Eintritt einer Krankheit zu verhindern oder zu verzögern, oder die Krankheitsfolgen abzuschwächen. So kann die Lebensqualität verbessert und die Länge des Lebens selbst begünstigt werden.
      </Panel>
      <Panel medium={1} title="Neuigkeiten" background="rgb(62, 167, 62)" color="#FFF">
        Mach mich in GRID!!!
      </Panel>
    </Container>
  ),
};
