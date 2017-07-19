import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'olymp-router';
import { withAuth } from 'olymp-auth';
import { createComponent } from 'olymp-fela';
import { Button } from 'antd';

// todo: withAuth auslagern!

export default type => WrappedComponent => {
  const CreateButton = withRouter(
    createComponent(
      () => ({
        position: 'absolute',
        left: '50%',
        bottom: 1,
        transform: 'translate(-50%, 50%)',
        zIndex: 2,
      }),
      ({ className, pathname, query }) =>
        <Link
          to={{
            pathname,
            query: { ...query, [`@${type}`]: 'new', modal: null },
          }}
          className={className}
        >
          <Button type="primary" shape="circle" icon="plus" />
        </Link>,
      p => Object.keys(p)
    )
  );

  return withAuth(
    createComponent(
      ({ theme }) => ({
        position: 'relative',
        '> a:last-of-type': {
          display: 'none',
        },
        onHover: {
          onAfter: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 2,
            content: '""',
            borderTop: `2px solid ${theme.color}`,
            zIndex: 1,
          },
          '> a:last-of-type': {
            display: 'block',
          },
        },
      }),
      ({ className, auth, ...p }) =>
        auth && auth.user
          ? <div className={className}>
              <WrappedComponent {...p} />
              <CreateButton />
            </div>
          : <WrappedComponent {...p} />,
      p => Object.keys(p)
    )
  );
};
