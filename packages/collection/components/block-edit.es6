import React from 'react';
import { Link } from 'olymp-router';
import { createComponent } from 'olymp-fela';
import { Button } from 'antd';
import { connect } from 'react-redux';
import cn from 'classnames';

export const branch = (Left, Right) =>
  connect(({ auth }) => ({
    show: auth && auth.user,
  }))(({ show, ...rest }) => (show ? <Left {...rest} /> : <Right {...rest} />));

const getType = typeName => (typeof typeName === 'function' ? typeName() : typeName);
const EditButton = branch(
  createComponent(
    () => ({
      position: 'absolute',
      top: '50%',
      right: 1,
      transform: 'translate(50%, -50%)',
      zIndex: 2,
    }),
    ({ className, typeName, id }) => (
      <Link
        updateQuery={{ [`@${getType(typeName)}`]: id, modal: null }}
        className={cn('block-edit-button', className)}
      >
        <Button type="primary" shape="circle" icon="edit" />
      </Link>
    ),
    p => Object.keys(p),
  ),
  () => null,
);

EditButton.wrap = WrappedComponent =>
  branch(
    createComponent(
      ({ theme }) => ({
        position: 'relative',
        '& .block-edit-button': {
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
          '& .block-edit-button': {
            display: 'block',
          },
        },
      }),
      p => <WrappedComponent {...p} />,
      p => Object.keys(p),
    ),
    WrappedComponent,
  );

export default EditButton;
