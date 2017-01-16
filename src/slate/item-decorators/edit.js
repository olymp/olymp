import React from 'react';
import { withAuth, withRouter, cn } from 'olymp';
import { Button, Icon } from 'antd';

export default (Item) => {
  const EditDecorator = (props) => {
    const { id, __typename, location, router, auth, getData, className, hasParentItemDecorator } = props;
    const { pathname, query } = location;

    return auth.user && __typename ? (
      <div className={cn(className, !hasParentItemDecorator && 'block-item')}>
        <Button type="primary" shape="circle" className="block-item-edit" onClick={() => router.push({ pathname, query: { ...query, [`@${__typename}`]: id } })}>
          <Icon type="edit" />
        </Button>

        <Item {...props} hasParentItemDecorator className="" />
      </div>
    ) : <Item {...props} />;
  };

  return withAuth(withRouter(EditDecorator));
};
