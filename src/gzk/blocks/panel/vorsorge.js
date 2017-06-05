import React from 'react';
import { styled } from 'olymp';
import { Container } from 'olymp-fela';

export default {
  label: 'Vorsorge, Medizin, Video',
  category: 'Panel',
  component: ({ className, ...props }) => (
    <Container className={className}>
      <Panel title="Vorsorge">
        Wir bieten eine Fülle an Präventionsleistungen auf allen Fachgebieten an. Hierbei handelt es sich um vorbeugenden Maßnahmen die dazu dienen, den Eintritt einer Krankheit zu verhindern oder zu verzögern, oder die Krankheitsfolgen abzuschwächen. So kann die Lebensqualität verbessert und die Länge des Lebens selbst begünstigt werden.
      </Panel>
      <Panel title="Medizin">
        Die hier niedergelassenen Ärzte und medizinische Dienstleister bieten umfassende gesundheitliche Leistungen an. Unter einem Dach, aus einer Hand bietet Ihnen unser interdisziplinäres Konzept viele Vorteile: kurze Wege, effektive Arztbesuche, schnelle Ergebnisse, abgestimmte Behandlungen sowie eine hohe medizinische Qualität.
      </Panel>
      <Panel title="Unser Video" padding={0}>
        <iframe title="Unser Video" width="100%" height="auto" src="https://www.youtube.com/embed/iMDa7TXiEW4" frameBorder="0" allowFullScreen />
      </Panel>
    </Container>
  ),
};

const Panel = styled(({ theme, padding = '0.5rem' }) => ({
  width: `${100 / 3}%`,
  float: 'left',
  padding: theme.space3,
  '> h2': {
    marginBottom: theme.space1,
  },
  '> p': {
    backgroundColor: theme.dark5,
    color: theme.dark2,
    padding,
    borderBottomRightRadius: 40,
    '> iframe': {
      display: 'block',
      borderBottomRightRadius: 40,
    }
  },
}), ({ className, title, children }) => (
  <div className={className}>
    <h2>{title}</h2>
    <p>{children}</p>
  </div>
), p => p);
