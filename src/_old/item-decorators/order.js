import React from 'react';
import { withAuth, cn } from 'olymp';
import { Button, Icon } from 'antd';

export default (Item) => {
  const OrderDecorator = (props) => {
    const { auth, className, hasParentItemDecorator } = props;

    return auth.user
      ? <div className={cn(className, !hasParentItemDecorator && 'block-item')}>
        <Button shape="circle" className="block-item-order" disabled>
          <Icon type="up" />
        </Button>
        <Button shape="circle" className="block-item-order" disabled>
          <Icon type="down" />
        </Button>

        <Item {...props} hasParentItemDecorator className="" />
      </div>
      : <Item {...props} />;
  };

  return withAuth(OrderDecorator);
};
