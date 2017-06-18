import React from 'react';
import { withAuth, withRouter } from 'olymp';
import { Button, Dropdown } from 'antd';
import withCollectionTree from './with-collection-tree';
import CmsAction from './action';
import { createComponent } from 'olymp-fela';

const Styled = createComponent(
  ({ left, top }) => ({
    zIndex: 1001,
    position: 'fixed',
    top: top || 10,
    left: left || 10,
    '> img': {
      width: '100%',
      height: 'auto',
      padding: 2,
      marginTop: -6,
    },
  }),
  ({ collectionTree, location, auth, className }) => {
    return (
      <Dropdown
        overlay={
          <CmsAction
            collections={collectionTree}
            {...location}
            location={location}
            auth={auth}
          />
        }
        overlayClassName="ant-dropdown-left"
        placement="bottomLeft"
      >
        <Button
          type="primary"
          shape="circle"
          size="large"
          className={className}
        >
          <img src="/logo.png" alt="Olymp CMS" />
        </Button>
      </Dropdown>
    );
  },
  p => Object.keys(p)
);

export default withRouter(withAuth(withCollectionTree(Styled)));
