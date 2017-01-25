import React, { Component } from 'react';
import { withRouter, cn } from 'olymp';
import { Icon } from 'antd';
import { Image } from '../../edits';
import './style.less';

@withRouter
export default class MediaList extends Component {
  render() {
    const { images = [], className, onClick, selected, multi } = this.props;

    return (
      <div className={cn(className, 'olymp-media')}>
        {images.map((item, index) => {
          const isActive = selected.findIndex(x => x === item.id) !== -1;

          return (
            <div onClick={typeof onClick === 'function' && (() => onClick(item, isActive))} key={index} className={`card card-block file ${isActive ? 'selected' : ''} ${multi ? 'multi' : ''}`}>
              <Image value={item} width={200} ratio={1} />
              {
                item.format === 'pdf' ? (
                  <span className="label">
                    <Icon type="file-pdf" />
                  </span>
                ) : undefined
              }
            </div>
          );
        })}
        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}
