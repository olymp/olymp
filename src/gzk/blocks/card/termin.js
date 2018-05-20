import React, { Component } from 'react';
import { gql, graphql, Link } from 'olymp';
import { useGenericBlock, GenericBlock } from 'olymp/slate';
import take from 'lodash/take';
import moment from 'moment';
import capitalize from 'lodash/upperFirst';

@graphql(
  gql`
    query terminList {
      items: terminList(
        sort: { date: DESC }
        query: { state: { eq: PUBLISHED } }
      ) {
        id
        name
        art
        date
        slug
      }
    }
  `,
  {
    /* eslint-disable */
    options: () => ({}),
  }
)
@useGenericBlock({
  category: 'Karte',
  label: 'Termin',
  editable: false,
  props: ['title', 'color', 'size', 'max', 'types'],
  actions: props => [
    {
      icon: 'heading',
      type: 'set-title',
      toggle: () => {
        const { setData, getData } = props;
        const title = window.prompt('Titel', getData('title'));
        setData({ title });
      },
    },
    {
      icon: 'list',
      type: 'set-type',
      options: [
        {
          value: 'VERANSTALTUNG,VORTRAG',
          label: 'Veranstaltungen und Vorträge',
        },
        {
          value: 'PUBLIKATION,PRESSE',
          label: 'Presse und Publikationen',
        },
      ],
      toggle: ({ key }) => {
        const { setData, getData } = props;
        setData({ types: key });
      },
    },
    {
      icon: 'eyedropper',
      type: 'set-color',
      options: [
        {
          value: '#4992c3',
          label: 'Blau',
        },
        {
          value: '#3ea73e',
          label: 'Grün',
        },
      ],
      toggle: ({ key }) => {
        const { setData, getData } = props;
        setData({ color: key });
      },
    },
    {
      icon: 'expand',
      type: 'set-size',
      toggle: () => {
        const { setData, getData, size } = props;
        setData({ size: size === 1 ? 2 : 1 });
      },
    },
  ],
})
export default class GzCardTermin extends Component {
  static defaultProps = {
    title: 'Termine',
    size: 1,
    max: 5,
    color: '#4992c3',
    types: 'PUBLIKATION,PRESSE,VERANSTALTUNG,VORTRAG',
  };
  render() {
    const {
      children,
      title,
      data,
      router,
      size,
      color,
      types,
      max,
    } = this.props;
    const cloudinary = { width: 300 * 1.2 * size, height: 250 };
    const list =
      data.items &&
      take(data.items.filter(x => types.split(',').includes(x.art)), max);
    return (
      <GenericBlock
        {...this.props}
        className={`gz-big-element col-md-${4 * size}`}
        toolbarStyle={{ marginLeft: -11, marginRight: -11 }}
      >
        <h2>{title}</h2>
        <div
          className="gz-image-box gz-box-colored gz-height-250 mt-1"
          style={{ backgroundColor: color }}
        >
          <div className="list-group">
            {list &&
              list.map(({ id, date, slug, name, art }) => (
                <Link
                  className="list-group-item"
                  key={id}
                  to={`/news${slug}`}
                  style={{ backgroundColor: 'transparent', border: 0 }}
                >
                  <u>
                    {capitalize(
                      art.toLowerCase().replace('presse', 'presseartikel')
                    )}
                    {art.indexOf('P') === 0 ? ' vom ' : ' am '}
                    {moment(date)
                      .utcOffset('+01:00')
                      .format('DD. MMMM YYYY')}{' '}
                    <small>
                      {moment(date)
                        .utcOffset('+01:00')
                        .format('HH:mm')
                        .replace('00:00', '')}
                    </small>
                  </u>
                  <br />
                  {name}
                </Link>
              ))}
          </div>
        </div>
      </GenericBlock>
    );
  }
}
