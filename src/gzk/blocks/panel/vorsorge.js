import React from 'react';
import Panel from './panel';
import Container from './container';

export default {
  label: 'Vorsorge, Medizin, Video',
  category: 'Panel',
  editable: false,
  component: ({ className, attributes }) => (
    <Container {...attributes} className={className}>
      <Panel medium={4} title="Vorsorge" bordered="Vorsorge">
        Wir bieten eine Fülle an Präventionsleistungen auf allen Fachgebieten an. Hierbei handelt es sich um vorbeugenden Maßnahmen die dazu dienen, den Eintritt einer Krankheit zu verhindern oder zu verzögern, oder die Krankheitsfolgen abzuschwächen. So kann die Lebensqualität verbessert und die Länge des Lebens selbst begünstigt werden.
      </Panel>
      <Panel medium={4} title="Medizin" bordered="Medizin">
        Die hier niedergelassenen Ärzte und medizinische Dienstleister bieten umfassende gesundheitliche Leistungen an. Unter einem Dach, aus einer Hand bietet Ihnen unser interdisziplinäres Konzept viele Vorteile: kurze Wege, effektive Arztbesuche, schnelle Ergebnisse, abgestimmte Behandlungen sowie eine hohe medizinische Qualität.
      </Panel>
      <Panel medium={4} title="Unser Video" bordered="Unser Video" padding={0}>
        <iframe title="Unser Video" width="100%" height="100%" src="https://www.youtube.com/embed/iMDa7TXiEW4" frameBorder="0" allowFullScreen />
      </Panel>
    </Container>
  ),
};
