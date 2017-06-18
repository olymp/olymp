import React, { Component, PropTypes } from 'react';
import {
  useBlockBase,
  useGenericBlock,
  useBlockToolbar,
  GenericBlock,
  Block,
} from 'olymp-slate';
import { cn } from 'olymp';

const defaultVideo = 'https://www.youtube.com/embed/zalYJacOhpo';
const actions = props => [
  {
    type: 'youtube.url',
    icon: 'film',
    toggle: () => {
      const { setData, getData } = props;
      const currentUrl = getData('url') || defaultVideo;
      const url = window.prompt('URL', currentUrl);
      if (url) { setData({ url }); }
    },
    active: false,
  },
];

@useGenericBlock({
  label: 'Kontakt',
  category: 'Klinik',
  align: true,
  props: ['url'],
  editable: false,
  actions,
})
export default class Kontakt extends Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    className: PropTypes.string,
    getData: PropTypes.func,
  };

  render() {
    const { style, getData, children, ...rest } = this.props;
    const url = getData('url', defaultVideo);

    return (
      <GenericBlock
        {...rest}
        className="figure-element"
        toolbarStyle={{ marginLeft: -11, marginRight: -11 }}
      >
        <div className="gz-big-element col-md-4" style={style}>
          <div className="gz-panel mt-1">
            <p>
              <h5>
                Kontakt
              </h5>
              <small>
                <i>
                  Unsere Anmeldung ist täglich zwischen 7 und 16 Uhr besetzt.
                </i>
              </small>
              <br />
              <b>T</b> 06195 . 6773 280
              <br />
              <b>F</b> 06195 . 6773 281
              <br />
              inf@privatklinik-kelkheim.de
            </p>

            <p>
              Privatklinik Kelkheim
              <br />
              Frankenallee 1
              <br />
              65779 Kelkheim
            </p>
          </div>
          {children}
        </div>
      </GenericBlock>
    );
  }
}
