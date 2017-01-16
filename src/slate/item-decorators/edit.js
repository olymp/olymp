import React from 'react';
import { Link } from 'olymp';
import { Button, Icon } from 'antd';

export default (Item) => {
  const EditDecorator = props => (
    <div style={{ position: 'relative' }} className="block-item">
      <Button shape="circle" className="block-item-order">
        <Icon type="up" />
      </Button>
      <Link
        to={{
          pathname: props.location && props.location.pathname,
          query: { ...(props.location && props.location.query), [`@Termin`]: props.id },
        }}
      >
        <Button type="primary" shape="circle" className="block-item-edit">
          <Icon type="edit" />
        </Button>
      </Link>
      { true ? (
        <Button shape="circle" className="block-item-delete">
          <Icon type="eye-o" />
        </Button>
      ) : (
        <Button type="primary" shape="circle" className="block-item-delete">
          <Icon type="eye" />
        </Button>
      )}
      <Button shape="circle" className="block-item-order">
        <Icon type="down" />
      </Button>

      <Item {...props} />
    </div>
  );

  return EditDecorator;
};
