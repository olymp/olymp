import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'olymp-router';
import { withAuth } from 'olymp-auth';
import { createComponent } from 'olymp-fela';
import { Button } from 'antd';

// todo: withAuth auslagern!

export default type => WrappedComponent => {
  const EditButton = withRouter(
    createComponent(
      () => ({
        position: 'absolute',
        top: '50%',
        right: 1,
        transform: 'translate(50%, -50%)',
        zIndex: 2,
      }),
      ({ className, id, pathname, query }) =>
        <Link
          to={{
            pathname,
            query: { ...query, [`@${type}`]: id || 'new', modal: null },
          }}
          className={className}
        >
          <Button type="primary" shape="circle" icon="edit" />
        </Link>,
      p => Object.keys(p)
    )
  );

  const WithEdit = withAuth(
    createComponent(
      ({ theme }) => ({
        position: 'relative',
        '> a:last-of-type': {
          display: 'none',
        },
        onHover: {
          onBefore: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: theme.dark5,
          },
          onAfter: {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            height: '100%',
            width: 2,
            borderRight: `2px solid ${theme.color}`,
            zIndex: 1,
          },
          '> a:last-of-type': {
            display: 'block',
          },
        },
      }),
      ({ className, id, auth, ...p }) =>
        auth && auth.user
          ? <div className={className}>
              <WrappedComponent id={id} {...p} />
              <EditButton id={id} />
            </div>
          : <WrappedComponent id={id} {...p} />,
      p => Object.keys(p)
    )
  );
  WithEdit.propTypes = {
    id: PropTypes.string.isRequired,
  };

  return WithEdit;
};
