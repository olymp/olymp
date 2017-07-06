import React from 'react';
import Portal from 'react-portal';
// import { Gateway } from 'react-gateway';
import { Menu, Tooltip, Icon } from 'antd';
import { createComponent } from 'react-fela';

export const Button = createComponent(({ theme, active }) => ({
    paddingX: 20,
    '> svg': {
        fill: active ? theme.light : theme.light2,
        size: 16,
        marginBottom: -4,
    },
    '> div > svg': {
        fill: active ? theme.light : theme.light2,
        size: 16,
        marginBottom: -4,
    }
}), ({ onMouseDown, tooltip, children, className }) =>
        (<div onMouseDown={onMouseDown} className={className}>
            <Tooltip placement="bottom" title={tooltip || ''}>
                {children}
            </Tooltip>
        </div>), p => Object.keys(p));

const Close = createComponent(
    ({ theme }) => ({
        position: 'absolute!important',
        right: 0,
    }),
    p => <Menu.Item {...p} />,
    p => Object.keys(p)
);

export default createComponent(
    ({ theme }) => ({
        position: 'fixed',
        top: 0,
        zIndex: 10,
        width: '100%',
        boxShadow: 'inset 0 -10px 10px -10px #000000',
        paddingX: theme.space2,
        justifyContent: 'center',
        display: 'flex',
        '> li': {
            padding: 0,
        },
    }),
    (props) => {
        const { isOpened, className, children } = props;

        if (!isOpened) {
            return <div />;
        }

        /*return (
          <Gateway into="toolbar">
            {children}
          </Gateway>
        );*/

        // Old one, but pimped!
        return (
            <Portal isOpened={!!isOpened}>
                <Menu className={className} mode="horizontal" theme="dark">
                    {children}
                    <Close>
                        <Icon type="close" />
                    </Close>
                </Menu>
            </Portal>
        );
    },
    p => Object.keys(p)
);
