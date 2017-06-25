import React from 'react';
import { createComponent, Container, Grid, border } from 'olymp-fela';
import { H2, Panel } from '../components';

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

const Tag = createComponent(
  ({ theme }) => ({
    backgroundColor: theme.dark4,
    paddingY: theme.space2,
    paddingX: theme.space3,
    margin: theme.space2,
    marginLeft: 0,
    display: 'inline-block',
    onHover: {
      backgroundColor: theme.color,
      color: theme.light,
    },
  }),
  'div',
  p => Object.keys(p)
);

export default {
  key: 'GZK.Collections.MagazinBlock',
  label: 'Magazin',
  category: 'Collections',
  editable: false,
  component: ({ attributes, getData, ...props }) =>
    (<Container {...attributes}>
      <Grid>
        <Grid.Item medium={8}>
          <Panel
            title="Der hallux rigidus - Ein typisches Männerproblem"
            bordered="Der hallux rigidus"
          >
            <Image url="https://res.cloudinary.com/djyenzorc/image/upload/x_312,y_438,w_5890,h_3337,c_crop/f_auto,q_auto,fl_lossy/v1478466042/bkgzpJatL_wqz5on.jpg" />
            <p>
              Beim Hallux rigidus handelt es sich um eine fortschreitende
              Arthrose im Großzehengrundgelenk. Diese geht mit einer
              Bewegungseinschränkung einher, um nach vielen Jahren in einer
              Steifheit zu enden (rigidus=steif). Männer sind sehr viel häufiger
              betroffen als Frauen. Bei Frauen bildet sich dafür öfter ein
              Hallux valgus, eine Abweichung der Großzehe zur Außenseite, was
              dann aber auch zur Ausbildung einer sog. sekundären Arthrose
              führen kann.
            </p>
            <a href="/">Weiterlesen...</a>
          </Panel>
        </Grid.Item>
        <Grid.Item medium={4} paddingMini="0.5rem 1rem" paddingMedium="0 1rem">
          <H2>Ausgaben als PDFs</H2>
          <ul>
            <Li>Gesund im Zentrum - <b>Sport</b></Li>
            <Li>Gesund im Zentrum - <b>Gesundheit</b></Li>
            <Li>Gesund im Zentrum - <b>Fitness</b></Li>
          </ul>

          <H2>Schlagworte</H2>
          <Tag>Sport</Tag>
          <Tag>Gesundheit</Tag>
          <Tag>Fitness</Tag>
        </Grid.Item>
      </Grid>
    </Container>),
};
