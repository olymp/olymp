import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'olymp-router';
import { withAuth } from 'olymp-auth';
import { createComponent, Button } from 'olymp-fela';

// todo: withAuth auslagern!

export default typeProp => WrappedComponent => {
  const EditButton = withRouter(
    createComponent(
      () => ({
        position: 'absolute',
        top: '50%',
        right: 1,
        transform: 'translate(50%, -50%)',
        zIndex: 2,
      }),
      ({ className, id, type }) => (
        <Button.Edit
          updateQuery={{ [`@${type}`]: id || 'new' }}
          className={className}
        />
      ),
      p => Object.keys(p),
    ),
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
      ({ className, id, auth, logout, ...p }) => {
        const type =
          typeof typeProp === 'function'
            ? typeProp({ id, auth, ...p })
            : typeProp;

        if (!auth || !auth.user || !type) {
          return <WrappedComponent id={id} {...p} />;
        }

        return (
          <div className={className}>
            <WrappedComponent id={id} {...p} />
            <EditButton id={id} type={type} />
          </div>
        );
      },
      p => Object.keys(p),
    ),
  );
  WithEdit.propTypes = {
    id: PropTypes.string.isRequired,
  };

  return WithEdit;
};
