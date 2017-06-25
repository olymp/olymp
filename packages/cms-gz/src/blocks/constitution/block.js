import React from 'react';
import { createComponent, Container, Grid } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import { Blocks } from 'olymp-pages';
import VCard from './vcard';
import { ImageStyles } from '../image';

const Label = Blocks.ImageBlockLabel.component;
const constitution = {
  id: 'Oxbfx5',
  name: 'Orthopädische Praxisklinik',
  kurz: 'Orthopädie',
  art: 'FACHARZTPRAXIS',
  farbe: '#f18e00',
  slug: '/ortho',
  slogan: 'Bewegung ist Leben',
  willkommen:
    'Herzlich Willkommen in der Orthopädischen Praxisklinik im GesundheitsZentrum Kelkheim.',
  etage: '2. Stock',
  freifeld:
    'Termine nur nach Vereinbarung. Die Praxis ist auch gelegentlich Samstags Vormittags geöffnet. Bitte telefonisch anfragen.',
  zeiten: [
    '08:00-12:00,14:00-17:00',
    '08:00-12:00,14:00-17:00',
    '08:00-12:00,14:00-17:00',
    '08:00-12:00,14:00-17:00',
    '08:00-12:00',
    '',
  ],
  eMail: 'info@orthopaeden-zentrum.de',
  fax: null,
  telefon: '06195 6772 400',
  telefonPrivat: null,
  website: 'http://www.orthopaeden-zentrum.de',
  peak: {
    url:
      'http://res.cloudinary.com/djyenzorc/image/upload/v1483094802/tlw6sghsycqfgutiyzgv.jpg',
    width: 3000,
    height: 2000,
    caption: null,
    source: null,
    crop: [3000, 660, 0, 750],
  },
  logo: {
    url:
      'http://res.cloudinary.com/djyenzorc/image/upload/v1479380738/b1bNO1GAfz_zzyq5q.jpg',
    crop: null,
    width: 1654,
    height: 402,
    caption: null,
    source: null,
  },
  leistungen: [
    {
      id: null,
      link:
        'http://www.orthopaeden-zentrum.de/index.php/deutsch/Therapiespektrum/Orthop%E4die+Schwerpunkte?MttgSession=caa791cd071c4d2e4d1eabc64f2ef896',
      name: 'Unsere Schwerpunkte',
      text: {
        nodes: [
          {
            kind: 'block',
            type: 'bulleted-list',
            nodes: [
              {
                kind: 'block',
                type: 'list-item',
                nodes: [
                  {
                    kind: 'text',
                    text: '',
                  },
                  {
                    kind: 'inline',
                    type: 'link',
                    nodes: [
                      {
                        kind: 'text',
                        text: 'Ambulante & Stationäre Operationen',
                      },
                    ],
                    data: {
                      href:
                        'http://www.orthopaeden-zentrum.de/index.php/deutsch/Therapiespektrum?newwpID=97512&MttgSession=caa791cd071c4d2e4d1eabc64f2ef896',
                    },
                  },
                  {
                    kind: 'text',
                    text: '',
                  },
                ],
              },
              {
                kind: 'block',
                type: 'list-item',
                nodes: [
                  {
                    kind: 'text',
                    text: '',
                  },
                  {
                    kind: 'inline',
                    type: 'link',
                    nodes: [
                      {
                        kind: 'text',
                        text: 'Moderne Arthrose Therapien',
                      },
                    ],
                    data: {
                      href:
                        'http://www.orthopaeden-zentrum.de/index.php/deutsch/Therapiespektrum?newwpID=97495&MttgSession=caa791cd071c4d2e4d1eabc64f2ef896',
                    },
                  },
                  {
                    kind: 'text',
                    text: '',
                  },
                ],
              },
              {
                kind: 'block',
                type: 'list-item',
                nodes: [
                  {
                    kind: 'text',
                    text: '',
                  },
                  {
                    kind: 'inline',
                    type: 'link',
                    nodes: [
                      {
                        kind: 'text',
                        text: 'Manuelle Therapien',
                      },
                    ],
                    data: {
                      href:
                        'http://www.orthopaeden-zentrum.de/index.php/deutsch/Therapiespektrum?newwpID=97487&MttgSession=caa791cd071c4d2e4d1eabc64f2ef896',
                    },
                  },
                  {
                    kind: 'text',
                    text: '',
                  },
                ],
              },
              {
                kind: 'block',
                type: 'list-item',
                nodes: [
                  {
                    kind: 'text',
                    text: '',
                  },
                  {
                    kind: 'inline',
                    type: 'link',
                    nodes: [
                      {
                        kind: 'text',
                        text: 'Leitlinienkonforme Osteoporosetherapie',
                      },
                    ],
                    data: {
                      href:
                        'http://www.orthopaeden-zentrum.de/?newwpID=97502&MttgSession=2c0b962168c55fffd3d20dc62f674763',
                    },
                  },
                  {
                    kind: 'text',
                    text: '',
                  },
                ],
              },
              {
                kind: 'block',
                type: 'list-item',
                nodes: [
                  {
                    kind: 'text',
                    text: '',
                  },
                  {
                    kind: 'inline',
                    type: 'link',
                    nodes: [
                      {
                        kind: 'text',
                        text: 'Akupunktur',
                      },
                    ],
                    data: {
                      href:
                        'http://www.orthopaeden-zentrum.de/index.php/deutsch/Therapiespektrum?newwpID=97494&MttgSession=caa791cd071c4d2e4d1eabc64f2ef896',
                    },
                  },
                  {
                    kind: 'text',
                    text: '',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      id: null,
      link: null,
      name: 'Unser operatives Spektrum',
      text: {
        nodes: [
          {
            kind: 'block',
            type: 'bulleted-list',
            nodes: [
              {
                kind: 'block',
                type: 'list-item',
                nodes: [
                  {
                    kind: 'text',
                    text:
                      'Schwerpunkt arthoroskopische Operationen an Schulter- und Kniegelenk',
                  },
                ],
              },
              {
                kind: 'block',
                type: 'list-item',
                nodes: [
                  {
                    kind: 'text',
                    text: 'Autologe Chondrozytentransplantation',
                  },
                ],
              },
              {
                kind: 'block',
                type: 'list-item',
                nodes: [
                  {
                    kind: 'text',
                    text: 'Endoprothetik am Knie',
                  },
                ],
              },
              {
                kind: 'block',
                type: 'list-item',
                nodes: [
                  {
                    kind: 'text',
                    text: 'Umstellungsosteotomien',
                  },
                ],
              },
              {
                kind: 'block',
                type: 'list-item',
                nodes: [
                  {
                    kind: 'text',
                    text: 'Fußchirurgie',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      id: null,
      link:
        'http://www.orthopaeden-zentrum.de/index.php?newwpID=98034&MttgSession=caa791cd071c4d2e4d1eabc64f2ef896',
      name: 'Apparatediagnostik',
      text: {
        nodes: [
          {
            kind: 'block',
            type: 'bulleted-list',
            nodes: [
              {
                kind: 'text',
                text: '\n',
              },
              {
                kind: 'block',
                type: 'list-item',
                nodes: [
                  {
                    kind: 'text',
                    text: '',
                  },
                  {
                    kind: 'inline',
                    type: 'link',
                    nodes: [
                      {
                        kind: 'text',
                        text: 'Bildgebende Diagnostik (digitales Röntgen)',
                      },
                    ],
                    data: {
                      href:
                        'http://www.orthopaeden-zentrum.de/index.php/deutsch/Therapiespektrum?newwpID=97484&MttgSession=caa791cd071c4d2e4d1eabc64f2ef896',
                    },
                  },
                  {
                    kind: 'text',
                    text: '',
                  },
                ],
              },
              {
                kind: 'block',
                type: 'list-item',
                nodes: [
                  {
                    kind: 'text',
                    text: '',
                  },
                  {
                    kind: 'inline',
                    type: 'link',
                    nodes: [
                      {
                        kind: 'text',
                        text: 'Knochendichtemessung (DXA)',
                      },
                    ],
                    data: {
                      href:
                        'http://www.orthopaeden-zentrum.de/index.php/deutsch/Therapiespektrum?newwpID=97502&MttgSession=caa791cd071c4d2e4d1eabc64f2ef896',
                    },
                  },
                  {
                    kind: 'text',
                    text: '',
                  },
                ],
              },
              {
                kind: 'block',
                type: 'list-item',
                nodes: [
                  {
                    kind: 'text',
                    text: '',
                  },
                  {
                    kind: 'inline',
                    type: 'link',
                    nodes: [
                      {
                        kind: 'text',
                        text: '3D-Wirbelsäulenvermessung',
                      },
                    ],
                    data: {
                      href:
                        'http://www.orthopaeden-zentrum.de/index.php/deutsch/Therapiespektrum?newwpID=97497&MttgSession=caa791cd071c4d2e4d1eabc64f2ef896',
                    },
                  },
                  {
                    kind: 'text',
                    text: '',
                  },
                ],
              },
              {
                kind: 'block',
                type: 'list-item',
                nodes: [
                  {
                    kind: 'text',
                    text: '',
                  },
                  {
                    kind: 'inline',
                    type: 'link',
                    nodes: [
                      {
                        kind: 'text',
                        text: 'Körperendgrößenbestimmung',
                      },
                    ],
                    data: {
                      href:
                        'http://www.orthopaeden-zentrum.de/index.php/deutsch/Therapiespektrum?newwpID=97503&MttgSession=caa791cd071c4d2e4d1eabc64f2ef896',
                    },
                  },
                  {
                    kind: 'text',
                    text: '',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  ],
  aesthetik: [],
  vorsorgen: [
    {
      id: null,
      link: null,
      name: 'Fuß-Check',
      text: {
        nodes: [
          {
            kind: 'block',
            type: 'paragraph',
            nodes: [
              {
                kind: 'text',
                text:
                  'Hierbei werden die Füße und die Statik mittels körperlicher Untersuchung, bildgebender Diagnostik und Fußdruckmessung eingehend untersucht. Fußfehlstellungen und Störungen der Statik können dann frühzeitig behandelt werden um diese zu korrigieren. So wird eine weitere Verschlechterung vermieden.',
              },
            ],
          },
        ],
      },
    },
    {
      id: null,
      link: null,
      name: 'Gelenk-Check',
      text: {
        nodes: [
          {
            kind: 'block',
            type: 'paragraph',
            nodes: [
              {
                kind: 'text',
                text:
                  'Hierbei wird im Rahmen einer Anamnese über die beruflich- und sportbedingte Belastung, einer körperlichen Untersuchung und bildgebenden Diagnostik festgestellt, ob Risikofaktoren für einen frühzeitigen Gelenkverschleiß vorliegen. Dann können Maßnahmen eingeleitet werden um eine frühzeitige Abnutzung der betroffenen Gelenke zu vermeiden.',
              },
            ],
          },
        ],
      },
    },
    {
      id: null,
      link: null,
      name: 'Osteoporose-Check',
      text: {
        nodes: [
          {
            kind: 'block',
            type: 'paragraph',
            nodes: [
              {
                kind: 'text',
                text:
                  'Die Osteoporose ist eine häufige Knochenerkrankung, die bevorzugt im höheren Lebensalter auftritt. Sie ist definiert als eine Erkrankung, die zu einem zunehmenden Verlust an Knochenmasse und Knochenstruktur führt und hierdurch ein erhöhtes Knochenbruchrisiko bedingt. Die Zahl der an Osteoporose Erkrankten wird auf ca. 8 Millionen in Deutschland geschätzt, jede 4. postmenopausale Frau und jeder 8. Mann über 60 ist davon betroffen, deshalb ist die Früherkennung wichtig!',
              },
            ],
          },
          {
            kind: 'block',
            type: 'paragraph',
            nodes: [
              {
                kind: 'text',
                text:
                  'Als Risikofaktoren für das Auftreten einer Osteoporose gelten u. a.familiäre Belastung, frühes Einsetzen der Wechseljahre, Bewegungsmangel, Nikotin- und Alkoholabusus, calciumarme Ernährung, längere Cortisoneinnahme, Rheuma sowie Stoffwechselerkrankungen wie z. B. Schilddrüsenüberfunktion.',
              },
            ],
          },
          {
            kind: 'block',
            type: 'paragraph',
            nodes: [
              {
                kind: 'text',
                text:
                  'Beim Vorliegen solcher Risikofaktoren wird ab dem 60. Lebensjahr nach den Leitlinien der Deutschen Gesellschaft für Osteologie die Durchführung einer Knochendichtemessung nach der DXA-Methode an Wirbelsäule und Hüftknochen empfohlen.',
              },
            ],
          },
          {
            kind: 'block',
            type: 'paragraph',
            nodes: [
              {
                kind: 'text',
                text:
                  'In Abhängigkeit vom Ergebnis der DXA-Messung werden wir eine stadiengerechte Therapie der Osteoporose einleiten unter Berücksichtigung individueller Besonderheiten und Unverträglichkeiten. Dies umfasst neben der medikamentösen Basistherapie auch physiotherapeutische und physikalische Maßnahmen sowie ernährungsphysiologische Aspekte. ',
              },
            ],
          },
        ],
      },
    },
    {
      id: null,
      link: null,
      name: 'Rücken-Check',
      text: {
        nodes: [
          {
            kind: 'block',
            type: 'paragraph',
            nodes: [
              {
                kind: 'text',
                text:
                  'In einer orthopädischen Praxis stellen Rückenschmerzen einen Großteil der vorgetragenen Beschwerden dar. Nach einer gezielten Anamneseerhebung und einer gründlichen körperlichen Untersuchung, ggf. ergänzt durch zusätzliche diagnostische bildgebende Verfahren lassen sich in den meisten Fällen die Ursachen für Rückenschmerzen rasch eingrenzen. Vielfach handelt es sich um so genannte funktionelle Beschwerden, die auf muskuläre Insuffizienzen aufgrund von Bewegungsmangel zurückzuführen sind, hier hilft oft ein aufklärendes Gespräch verbunden mit einer sportmedizinischen Beratung. In diesen Formenkreis funktioneller Beschwerden fallen auch sog. Wirbelgelenksblockierungen, die sich mit Hilfe chirotherapeutischer oder osteopathischer Techniken lösen lassen.',
              },
            ],
          },
          {
            kind: 'block',
            type: 'paragraph',
            nodes: [
              {
                kind: 'text',
                text:
                  'Sollten die Rückenschmerzen jedoch trotz muskelaufbauender oder manualtherapeutischer Maßnahmen immer wiederkehren, so ist an das Vorliegen von Fehlstatiken zu denken wie Beinlängendifferenzen oder Fußfehlformen. Hier bieten wir neben Laufbandanalysen auch eine 3D-Wirbelsäulenvermessung an.Es handelt sich hierbei um ein hochpräzises, quantitatives und objektives Verfahren zur Analyse der menschlichen Statik und Haltung, durch die eine computergesteuerte 3D-Rekonstruktion der Wirbelsäule einschließlich Rotationsbestimmung der einzelnen Wirbelkörper ermöglicht wird.',
              },
            ],
          },
          {
            kind: 'block',
            type: 'paragraph',
            nodes: [
              {
                kind: 'text',
                text:
                  'Hierdurch können Körperstatik und -haltung, Skoliosen und alle Formen von Wirbelsäulendeformitäten ohne Strahlenbelastung erkannt, optimal therapiert und anhand von Verlaufsuntersuchungen zuverlässig kontrolliert werden.',
              },
            ],
          },
        ],
      },
    },
    {
      id: null,
      link: null,
      name: 'Säuglingshüfte-Check',
      text: {
        nodes: [
          {
            kind: 'block',
            type: 'paragraph',
            nodes: [
              {
                kind: 'text',
                text:
                  'Hierbei wird bei Säuglingen und Kleinkindern mittels körperlicher Untersuchung und Sonografie festgestellt, ob eine Hüftgelenks-Fehlstellungen besteht. Eine frühzeitig festgestellte Hüftdysplasie kann mit guten Ergebnissen konservativ behandelt werden. So sind spätere operative Korrektur-Eingriffe vermeidbar.',
              },
            ],
          },
        ],
      },
    },
    {
      id: null,
      link: null,
      name: 'Sportler-Check',
      text: {
        nodes: [
          {
            kind: 'block',
            type: 'paragraph',
            nodes: [
              {
                kind: 'text',
                text: '\n',
              },
            ],
          },
        ],
      },
    },
  ],
  personen: [
    {
      id: '8T3WkMv',
      name: 'Dr. Klaus-Wolfgang Richter',
      beschreibung:
        'Facharzt für Orthopädie, \nChirotherapie, Sportmedizin, Osteologie, Spezielle Schmerztherapie.',
      bild: {
        url:
          'http://res.cloudinary.com/djyenzorc/image/upload/v1481083897/pyyfbp0dwkmxb1uzwzhs.jpg',
        crop: null,
        width: 2072,
        height: 2474,
        caption: null,
        source: null,
      },
      telefon: null,
      fax: null,
      eMail: null,
      text: {
        nodes: [
          {
            kind: 'block',
            type: 'paragraph',
            nodes: [
              {
                kind: 'text',
                ranges: [
                  {
                    text: '',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      id: 'fiWdYMf',
      name: 'Dr. Heino Kniffler',
      beschreibung:
        'Facharzt für Orthopädie, \nTeilgebietsbezeichnung Rheumatologie, \nSpezielle Orthopädische Chirurgie, Sportmedizin, Chirotherapie, Osteologie, Spezielle Schmerztherapie, BG-Unfallarzt',
      bild: {
        url:
          'http://res.cloudinary.com/djyenzorc/image/upload/v1481083829/sewtk0tjyyd8hiqmkoj4.jpg',
        crop: null,
        width: 1200,
        height: 1800,
        caption: null,
        source: null,
      },
      telefon: null,
      fax: null,
      eMail: null,
      text: {
        nodes: [
          {
            kind: 'block',
            type: 'paragraph',
            nodes: [
              {
                kind: 'text',
                ranges: [
                  {
                    text: '',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      id: 'y4vSetb',
      name: 'Carsten Dehler',
      beschreibung:
        'Facharzt für Orthopädie, Chirotherapie, Sportmedizin, Notfallmedizin, Präventivmediziner DAPM',
      bild: {
        url:
          'http://res.cloudinary.com/djyenzorc/image/upload/v1478960180/cv31tejs4bn7ixenl6ga.jpg',
        crop: null,
        width: 460,
        height: 598,
        caption: null,
        source: null,
      },
      telefon: null,
      fax: null,
      eMail: null,
      text: {
        nodes: [
          {
            kind: 'block',
            type: 'paragraph',
            nodes: [
              {
                kind: 'text',
                ranges: [
                  {
                    text: '',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  ],
};

const Content = createComponent(
  ({ theme }) => ({
    width: '100%',
    paddingX: theme.space3,
  }),
  p => <Grid.Item medium={7} {...p} />,
  p => Object.keys(p)
);

const Peak = createComponent(
  ImageStyles,
  ({ className, header, subheader, ...rest }) =>
    (<div className={className}>
      <div>
        <div>
          <Image {...rest} width="100%" />
        </div>
      </div>
      <Label>
        <h1>{header}</h1>
        <p>{subheader}</p>
      </Label>
    </div>),
  p => Object.keys(p)
);

export default {
  key: 'GZK.Collections.ConstitutionBlock',
  label: 'Einrichtung',
  category: 'Collections',
  editable: true,
  component: ({ className, attributes, children }) =>
    (<div>
      <Peak
        value={constitution.peak}
        header={constitution.slogan}
        subheader={constitution.willkommen}
      />
      <Container className={className} {...attributes}>
        <Grid>
          <Grid.Item medium={5}>
            <VCard constitution={constitution} />
          </Grid.Item>
          <Content>
            {children}
          </Content>
        </Grid>
      </Container>
    </div>),
};
