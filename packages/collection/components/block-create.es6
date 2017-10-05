import React from 'react';
import { Link } from 'olymp-router';
import { createComponent } from 'olymp-fela';
import { Button } from 'antd';
import cn from 'classnames';
import { branch } from './block-edit';

const getType = typeName => (typeof typeName === 'function' ? typeName() : typeName);
const CreateButton = branch(
  createComponent(
    ({ bottom = false }) => ({
      position: 'absolute',
      left: '50%',
      top: !bottom ? 0 : undefined,
      bottom: bottom ? 0 : undefined,
      transform: bottom ? 'translate(-50%, 50%)' : 'translate(-50%, -50%)',
      zIndex: 2,
    }),
    ({ className, typeName }) => (
      <Link
        updateQuery={{ [`@${getType(typeName)}`]: 'new' }}
        className={cn('block-create-button', className)}
      >
        <Button type="primary" shape="circle" icon="plus" />
      </Link>
    ),
    p => Object.keys(p),
  ),
  () => null,
);

CreateButton.wrap = WrappedComponent =>
  branch(
    createComponent(
      ({ theme }) => ({
        position: 'relative',
        '& .block-create-button': {
          display: 'none',
        },
        onHover: {
          onBefore: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 2,
            content: '""',
            borderTop: `2px solid ${theme.color}`,
            zIndex: 1,
          },
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
          '& .block-create-button': {
            display: 'block',
          },
        },
      }),
      p => <WrappedComponent {...p} />,
      p => Object.keys(p),
    ),
    WrappedComponent,
  );
export default CreateButton;
