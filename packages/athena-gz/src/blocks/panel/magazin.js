import React, { Component } from 'react';
import { graphql, gql, Link } from 'olymp';
import { createComponent, border } from 'olymp-fela';
import { Image } from 'olymp-cloudinary';
import moment from 'moment';
import Container from './container';
import { Panel, Li } from '../../components';

const Magazin = createComponent(
  ({ theme }) => ({
    float: 'left',
    marginRight: theme.space2,
    textAlign: 'center',
    '> div': {
      display: 'block',
      border: border(theme),
    },
    onHover: {
      color: theme.color,
      '> div': {
        border: border(theme, theme.color),
      },
    },
  }),
  'a',
  p => Object.keys(p)
);

const Img = createComponent(
  ({ theme }) => ({
    float: 'right',
    marginLeft: theme.space3,
    marginBottom: theme.space2,
  }),
  p => <Image {...p} />,
  p => Object.keys(p)
);

const Ul = createComponent(
  ({ theme }) => ({
    width: '100%',
  }),
  'ul',
  p => Object.keys(p)
);

const Text = createComponent(
  ({ theme }) => ({
    display: '-webkit-box',
    marginY: theme.space2,
    lineHeight: 1.4,
    fontSize: 16,
    WebkitLineClamp: 3,
    height: 1.4 * 16 * 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
  'div',
  p => Object.keys(p)
);

@graphql(
  gql`
    query terminList {
      items: terminList(
        sort: { date: DESC }
        query: {
          state: { ne: REMOVED }
          or: [{ art: { eq: VORTRAG } }, { art: { eq: VERANSTALTUNG } }]
          date: { gt: ${moment().subtract(6, 'months').valueOf()}}
        }
      ) {
        id
        date
        art
        name
        extrakt
        slug
        bild {
          id
          url
          caption
          width
          height
        }
        org {
          id
          farbe
          image {
            id
            url
            caption
            width
            height
          }
        }
      }
      pdfs: fileList(query: { tags: { in: "GiZ" }, state: { ne: REMOVED } }) {
        id
        url
        caption
        width
        height
      }
    }
  `,
  {
    props: ({ ownProps, data }) => ({
      ...ownProps,
      data,
      isLoading: data.loading,
      items: data.items || [],
      pdfs: data.pdfs || [],
    }),
  }
)
class Block extends Component {
  render() {
    const { items, pdfs, attributes, className } = this.props;

    return (
      <Container {...attributes} className={className}>
        <Panel medium={5} title="Magazin">
          {pdfs.map(pdf =>
            (<Magazin
              rel="noopener noreferrer"
              href={pdf.url}
              target="_blank"
              key={pdf.id}
            >
              <Image value={pdf} width={100} />
              {pdf.caption}
            </Magazin>)
          )}
        </Panel>
        <Panel medium={7} title="Veranstaltungen" accent="rgb(73, 146, 195)">
          <Ul>
            {items
              .slice(0, 3)
              .map(({ id, bild, org, art, name, slug, extrakt, date }) =>
                (<Li color="rgb(73, 146, 195)" key={id}>
                  <h3>
                    <Link to={{ pathname: `/news${slug || '/'}` }}>
                      {name}
                    </Link>
                  </h3>
                  <h5>
                    {art} am {moment(date).format('DD. MMMM YYYY, HH:mm')} Uhr
                  </h5>
                  {extrakt &&
                    <div>
                      <Img
                        value={bild || (org || {}).image}
                        width={75}
                        ratio={1}
                        avatar
                      />
                      <Text>
                        {extrakt}
                      </Text>
                      {slug &&
                        <Link to={{ pathname: `/news${slug}` }}>
                          Weiterlesen...
                        </Link>}
                    </div>}
                </Li>)
              )}
            <Li>
              <Link to={{ pathname: '/news/' }}>
                Zeige alle Veranstaltungen...
              </Link>
            </Li>
          </Ul>
        </Panel>
      </Container>
    );
  }
}

export default {
  key: 'GZK.Panel.Magazin',
  label: 'Magazin, Veranstaltungen',
  category: 'Panel',
  editable: false,
  component: Block,
};
