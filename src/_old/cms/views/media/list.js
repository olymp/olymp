import React, { Component } from 'react';
import { cn, Image } from 'olymp';
import { Icon } from 'antd';
import './style.less';

export default class MediaList extends Component {
  render() {
    const { images, className, onClick, selected, multi } = this.props;

    return (
      <div className={cn(className, 'olymp-media')}>
        {(images || []).map((item, index) => {
          const isActive = selected.findIndex(x => x === item.id) !== -1;

          return (
            <div
              onClick={
                typeof onClick === 'function' && (() => onClick(item, isActive))
              }
              key={index}
              className={cn('card card-block file', {
                selected: isActive,
                multi,
              })}
            >
              <Image value={item} width={200} ratio={1} />
              {item.format === 'pdf'
                ? <span className="label">
                    <Icon type="file-pdf" />
                  </span>
                : undefined}
            </div>
          );
        })}
        <div style={{ clear: 'both' }} />
      </div>
    );
  }
}
