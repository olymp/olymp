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
        right: 0,
        transform: 'translate(50%, -50%)',
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
      () => ({
        position: 'relative',
        '> a:last-of-type': {
          display: 'none',
        },
        onHover: {
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
