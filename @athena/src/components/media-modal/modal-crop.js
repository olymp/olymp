import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Dropzone, Navbar, Icon, InputGroup, InputGroupAddon, Button } from '@olymp/adonis';

import { Select } from '@olymp/adonis/edits';
import './modal-cropjs.less';

let Cropper = null;
if (typeof window !== 'undefined'){
  Cropper = require('cropperjs');
}

const options = {
  'Freie Auswahl': 0,
  'Postkarte': 3 / 2,
  'Portrait': 2 / 3,

  'Quadratisch': 1,
  'Landschaft': 19 / 7,
  'Kino': 16 / 9,
};

export default class MediaCrop extends Component {
  static defaultProps = {
     image: {
        url: 'http://placehold.it/350x150',
      },
      buttons: [],
     imageWidth: 12,
     format: 0,
   }

  constructor(props) {
     super();
     const { format } = props;
     this.state = {
        format,
      };
   }

  render() {
    const { image, buttons } = this.props;
    const { format } = this.state;

    return (
      <div style={{ minHeight: '500px' }}>
        <Navbar color="faded" light>
          <Navbar.Nav navbar>
            <Navbar.Item>
              <Navbar.Link className="btn btn-default" href="javascript:;" onClick={() => this.props.onChange(null)}>
                <i className="fa fa-arrow-left"></i> Zur Mediathek
              </Navbar.Link>
            </Navbar.Item>
          </Navbar.Nav>
          <Navbar.Nav navbar className="pull-right">
            <Navbar.Item>
              <Navbar.Link className="btn btn-default" href="javascript:;" onClick={this.setSelectAll.bind(this)}>
                Alles auswählen
              </Navbar.Link>
            </Navbar.Item>
            {buttons.map((button, index) => <Navbar.Item key={index}>{button}</Navbar.Item>)}
          </Navbar.Nav>
          {/*!this.props.format ? <Navbar.Form role="search">
            <InputGroup>
              <Select value={format} updateValue={this.setFormat.bind(this)}
                options={Object.keys(options).map(i => ({ value: options[i], name: i }))}
              />
            </InputGroup>
          </Navbar.Form> : null*/}
        </Navbar>
        <img src={(image.url || image.src).replace('/upload/', '/upload/w_500,h_500,dpr_auto,c_limit,q_auto,f_auto/')} ref="image" id="cropImage" />
      </div>
    );
  }

  mountJcrop() {
     const { image } = this.props;
     const { params } = image;
     const { format } = this.props;

     const data = params && params.cropX != undefined && params.cropY != undefined && params.cropW != undefined && params.cropH != undefined
         ? { x: params.cropX, y: params.cropY, width: params.cropW, height: params.cropH } : null;

     var first = true;
     this.cropper = new Cropper(ReactDOM.findDOMNode(this.refs.image), {
        viewMode: 2,
        zoomable: false,
        responsive: false,
        movable: false,
        autoCrop: !!params || format,
        data,
      });
     this.refs.image.addEventListener('crop', ({ detail }) => {
        if (first) {
           first = false;
           return;
         }
        if ((image.url || image.src).indexOf('/upload/') !== -1) {
          const cropImage = this.cropper.getImageData();
          detail.x = detail.x / cropImage.naturalWidth * image.width;
          detail.y = detail.y / cropImage.naturalHeight * image.height;
          detail.width = detail.width / cropImage.naturalWidth * image.width;
          detail.height = detail.height / cropImage.naturalHeight * image.height;
        }
        this.setPreview(detail, image);
      });

     if (format) {
        this.cropper.setAspectRatio(format === 0 || format === '0' ? null : format);
      }
   }

  componentDidMount() {
     this.mountJcrop();
   }

  shouldComponentUpdate(newProps, newState) {
     return false;
   }

  setFormat(format) {
     this.setState({ format });
     this.cropper.setAspectRatio(format === 0 || format === '0' ? null : format);
   }

  setSelectAll() {
     const { image } = this.state;
     this.cropper.clear();
     this.setState({ image: { ...image, params: null } });
   }

  setPreview({ x, y, width, height }) {
    if (!x && !y && !width && !height) {
      return;
    }
    const { onChange } = this.props;
    onChange({
      ...this.props.image,
      crop: [Math.round(width), Math.round(height), Math.round(x), Math.round(y)],
    });
  }
}
