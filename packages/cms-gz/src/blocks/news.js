import React from 'react';
import { createComponent, Container, Grid, border } from 'olymp-fela';
import { H2 } from '../components';
import Panel from './panel/panel';

export default {
  label: 'Neuigkeiten',
  category: 'Collections',
  editable: false,
  component: ({ attributes, getData, ...props }) =>
    (<Container {...attributes}>
      <Grid>
        <Grid.Item medium={8}>
          <Panel
            title="Vertreterversammlung der KV Hessen wählt neue Vorsitzende"
            bordered="Vertreterversammlung"
          >
            <Image url="https://res.cloudinary.com/djyenzorc/image/upload/w_100,h_119,c_fill/f_auto,q_auto,fl_lossy/v1481083897/pyyfbp0dwkmxb1uzwzhs.jpg" />
            <p>
              Herzlichen Glückwunsch Dr. Klaus-Wolfgang Richter zu seiner
              Wiederwahl zum Vorsitzenden der Vertretersammlung mit 49 von 50
              Stimmen!
            </p>
            <a href="/">Mehr erfahren...</a>
            <H5>Presseartikel vom 15. Dezember 2016</H5>
          </Panel>
          <Panel title="Knorpelschäden und Arthrose" bordered="Knorpelschäden">
            <Image url="https://res.cloudinary.com/djyenzorc/image/upload/x_134,y_197,w_853,h_1249,c_crop/f_auto,q_auto,fl_lossy/v1481083829/sewtk0tjyyd8hiqmkoj4.jpg" />
            <p>
              Prävention und moderne Behandlungsmöglichkeiten von Knorpelschäden
              und Arthrose - Ein Vortrag von Dr. Heino Kniffler.
            </p>
            <a href="/">Mehr erfahren...</a>
            <H5>Vortrag am 24. Januar 2017, 18:00 Uhr</H5>
          </Panel>
        </Grid.Item>
        <Grid.Item
          medium={4}
          paddingMini="1rem 1rem 0 1rem"
          paddingMedium="1rem 1.5rem"
        >
          <H2>Vorträge & Veranstaltungen</H2>
          <ul>
            <Li>
              <b>25. April 2017, 18:00 Uhr</b>
              <p>
                Ursachen und aktuelle Behandlungsmöglichkeiten von
                Schulterschmerzen
              </p>
            </Li>
            <Li>
              <b>21. März 2017, 18:00 Uhr</b>
              <p>Gelenkersatz am Knie</p>
            </Li>
            <Li>
              <b>25. April 2017, 18:00 Uhr</b>
              <p>
                Ursachen und aktuelle Behandlungsmöglichkeiten von
                Schulterschmerzen
              </p>
            </Li>
            <Li>
              <b>21. März 2017, 18:00 Uhr</b>
              <p>Gelenkersatz am Knie</p>
            </Li>
            <Li>
              <b>25. April 2017, 18:00 Uhr</b>
              <p>MAXIMAL 5 ITEMS!</p>
            </Li>
          </ul>

          <H2>Publikationen</H2>
          <ul>
            <Li>
              <b>25. April 2017, 18:00 Uhr</b>
              <p>
                Ursachen und aktuelle Behandlungsmöglichkeiten von
                Schulterschmerzen
              </p>
            </Li>
            <Li>
              <b>21. März 2017, 18:00 Uhr</b>
              <p>Gelenkersatz am Knie</p>
            </Li>
            <Li>
              <b>25. April 2017, 18:00 Uhr</b>
              <p>
                Ursachen und aktuelle Behandlungsmöglichkeiten von
                Schulterschmerzen
              </p>
            </Li>
            <Li>
              <b>21. März 2017, 18:00 Uhr</b>
              <p>Gelenkersatz am Knie</p>
            </Li>
            <Li>
              <b>25. April 2017, 18:00 Uhr</b>
              <p>MAXIMAL 5 ITEMS!</p>
            </Li>
          </ul>

          <H2>Presse</H2>
          <ul>
            <Li>
              <b>25. April 2017, 18:00 Uhr</b>
              <p>
                Ursachen und aktuelle Behandlungsmöglichkeiten von
                Schulterschmerzen
              </p>
            </Li>
            <Li>
              <b>21. März 2017, 18:00 Uhr</b>
              <p>Gelenkersatz am Knie</p>
            </Li>
            <Li>
              <b>25. April 2017, 18:00 Uhr</b>
              <p>
                Ursachen und aktuelle Behandlungsmöglichkeiten von
                Schulterschmerzen
              </p>
            </Li>
            <Li>
              <b>21. März 2017, 18:00 Uhr</b>
              <p>Gelenkersatz am Knie</p>
            </Li>
            <Li>
              <b>25. April 2017, 18:00 Uhr</b>
              <p>MAXIMAL 5 ITEMS!</p>
            </Li>
          </ul>
        </Grid.Item>
      </Grid>
    </Container>),
};

const Image = createComponent(
  ({ theme }) => ({
    marginRight: theme.space2,
    width: 100,
    height: 'auto',
    float: 'left',
  }),
  ({ className, url }) => <img className={className} src={url} alt="" />,
  p => Object.keys(p)
);

const H5 = createComponent(
  ({ theme }) => ({
    marginTop: theme.space3,
  }),
  ({ className, children }) => <h5 className={className}>{children}</h5>,
  p => Object.keys(p)
);

const Li = createComponent(
  ({ theme }) => ({
    paddingTop: theme.space2,
    borderBottom: border(theme),
    ':last-of-type': {
      marginBottom: theme.space3,
    },
  }),
  'li',
  p => Object.keys(p)
);
