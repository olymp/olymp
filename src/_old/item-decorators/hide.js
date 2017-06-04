import React from 'react';
import { withAuth, cn } from 'olymp';
import { Button, Icon } from 'antd';

export default (Item) => {
  const HideDecorator = (props) => {
    const { auth, className, hasParentItemDecorator } = props;

    return auth.user ? (
      <div className={cn(className, !hasParentItemDecorator && 'block-item')}>
        { true ? (
          <Button shape="circle" className="block-item-hide" disabled>
            <Icon type="eye-o" />
          </Button>
        ) : (
          <Button type="primary" shape="circle" className="block-item-hide">
            <Icon type="eye" />
          </Button>
        )}

        <Item {...props} hasParentItemDecorator className="" />
      </div>
    ) : <Item {...props} />;
  };

  return withAuth(HideDecorator);
};
