import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'olymp-router';
import { withAuth } from 'olymp-auth';
import { createComponent, Button } from 'olymp-fela';

// todo: withAuth auslagern!

const getPos = node => {
  if (node) {
    return node.getBoundingClientRect();
  }

  return {};
};

export default typeProp => WrappedComponent => {
  const EditButton = withRouter(
    createComponent(
      ({ parent }) => {
        const pos = getPos(this.button);

        /* console.log(parent);
        console.log(window.scrollX, window.scrollX); */

        return {
          /* position: 'fixed',
          top: pos.top < parent.top ? parent.top : '50%',
          left: parent.right,
          transform: 'translate(-50%, -50%)', */
          position: 'absolute',
          top: '50%',
          right: 1,
          transform: 'translate(50%, -50%)',
          zIndex: 2,
        };
      },
      ({ className, id, type }) => (
        <div
          ref={button => {
            this.button = button;
          }}
          className={className}
        >
          <Button.Edit updateQuery={{ [`@${type}`]: id || 'new' }} />
        </div>
      ),
      p => Object.keys(p),
    ),
  );

  const WithEdit = withAuth(
    createComponent(
      ({ theme }) => ({
        position: 'relative',
        '> *:last-of-type': {
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
          '> *:last-of-type': {
            display: 'block',
          },
        },
      }),
      ({ className, id, auth, logout, ...p }) => {
        const type =
          typeof typeProp === 'function'
            ? typeProp({ id, auth, ...p })
            : typeProp;
        const pos = getPos(this.content);

        if (!id || !auth || !auth.user || !type) {
          return <WrappedComponent id={id} {...p} />;
        }

        return (
          <div
            className={className}
            ref={content => {
              this.content = content;
            }}
          >
            <WrappedComponent id={id} {...p} />
            <EditButton id={id} type={type} parent={pos} />
          </div>
        );
      },
      p => Object.keys(p),
    ),
  );
  WithEdit.propTypes = {
    id: PropTypes.string,
  };

  return WithEdit;
};
