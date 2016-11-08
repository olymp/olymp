import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import './dropzone.less';

export default class Dropzone extends Component {
  constructor() {
    super();
    this.state = {
      isDragActive: false,
      isCanActive: false
    };
  }

  static defaultProps = {
    supportClick: false,
    multiple: true
  }

  static propTypes = {
    onDrop: React.PropTypes.func.isRequired,
    onDragOver: React.PropTypes.func,
    onDragLeave: React.PropTypes.func,
    size: React.PropTypes.number,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    style: React.PropTypes.object,
    supportClick: React.PropTypes.bool,
    accept: React.PropTypes.string,
    multiple: React.PropTypes.bool
  }

  onCanDrag = e => {
    this.setState({isCanActive: true});
  }

  onCantDrag = e => {
    this.setState({isCanActive: false});
  }

  componentDidMount() {
    document.addEventListener('dragenter', this.onCanDrag);
    // document.addEventListener('dragover', this.onCanDrag);
    document.addEventListener('dragleave', this.onCantDrag);
    document.addEventListener('drop', this.onCantDrag);
  }

  componentWillUpdate() {
    this.componentWillUnmount();
  }

  componentDidUpdate() {
    this.componentDidMount();
  }

  componentWillUnmount() {
    document.removeEventListener('dragenter', this.onCanDrag);
    // document.removeEventListener('dragover', this.onCanDrag);
    document.removeEventListener('dragleave', this.onCantDrag);
    document.removeEventListener('drop', this.onCantDrag);
  }

  onDragLeave(e) {
    const {onDragLeave} = this.props;

    this.setState({
      isDragActive: false
    });

    if (onDragLeave) {
      onDragLeave(e);
    }
  }

  onDragOver(e) {
    const {onDragOver} = this.props;

    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';

    // set active drag state only when file is dragged into
    // (in mozilla when file is dragged effect is 'uninitialized')
    var effectAllowed = e.dataTransfer.effectAllowed;
    if (effectAllowed === 'all' || effectAllowed === 'uninitialized') {
      this.setState({
        isDragActive: true
      });
    }

    if (onDragOver) {
      onDragOver(e);
    }
  }

  onDrop(e) {
    const {onDrop} = this.props;

    e.preventDefault();

    this.setState({
      isDragActive: false
    });

    var files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    var maxFiles = (this.props.multiple) ? files.length : 1;
    for (var i = 0; i < maxFiles; i++) {
      files[i].preview = URL.createObjectURL(files[i]);
    }

    if (onDrop) {
      files = Array.prototype.slice.call(files, 0, maxFiles);
      onDrop({files, e});
    }
  }

  onClick() {
    const {supportClick} = this.props;
    if (supportClick === true) {
      this.open();
    }
  }

  open() {
    var fileInput = ReactDOM.findDOMNode(this.refs.fileInput);
    fileInput.value = null;
    fileInput.click();
  }

  render() {
    const {isDragActive, isCanActive} = this.state;
    const {children, className, style, accept, multiple, width, height, size} = this.props;

    const _className = [className || '__Dropzone'];
    let _overlay = null;

    if (isDragActive) {
      _overlay = (
        <div className={'can-drop'}><i className='fa fa-dropbox'></i> jetzt loslassen ...</div>
      );
    }
    else if (isCanActive) {
      _overlay = (
        <div className={'can-drag'}><i className='fa fa-arrow-circle-o-down'></i> hier droppen ...</div>
      );
    }

    return (
      <div ref={'dropzone'}
           className={_className.join(' ')}
           onClick={this.onClick.bind(this)}
           onDragLeave={this.onDragLeave.bind(this)}
           onDragOver={this.onDragOver.bind(this)}
           onDrop={this.onDrop.bind(this)}>
        <input style={{display: 'none'}}
               type={'file'}
               multiple={multiple}
               ref={'fileInput'}
               onChange={this.onDrop.bind(this)}
               accept={accept}/>
        {children}
        {_overlay}
      </div>
    )
  }
};
