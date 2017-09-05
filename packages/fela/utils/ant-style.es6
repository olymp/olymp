import tinycolor from 'tinycolor2';

export default ({ theme }) => {
  const color = theme.color;
  const transparent = tinycolor(theme.color).setAlpha(0.8).toRgbString();
  const transparent2 = tinycolor(theme.color).setAlpha(0.1).toRgbString();
  const transparent3 = tinycolor(theme.color).setAlpha(0.05).toRgbString();

  return {
    '& ::selection': {
      background: color,
    },
    '& h1': {
      color: theme.dark,
    },
    '& h2': {
      color: theme.dark,
    },
    '& h3': {
      color: theme.dark,
    },
    '& h4': {
      color: theme.dark,
    },
    '& h5': {
      color: theme.dark,
    },
    '& h6': {
      color: theme.dark,
    },
    '& p a': {
      color: theme.color,
    },
    '& .ant-modal-body': {},
    '& .ant-form': {},
    '& .ant-select-selection--single': {
      height: 'initial',
    },
    '& .ant-select-auto-complete.ant-select .ant-select-selection__rendered': {
      lineHeight: '32px',
    },
    '& form.ant-form.ant-form-horizontal .ant-row.ant-form-item': {
      marginBottom: 10,
    },
    '& form.ant-form.ant-form-horizontal': {},
    '& .ant-pagination-item > a': {
      // color: theme.light,
    },
    '& .ant-menu-item .anticon': {
      marginRight: 0,
      overflow: 'visible',
      lineHeight: 0.6,
    },
    '& .ant-menu-item > a > .anticon': {
      overflow: 'visible',
      lineHeight: 0.6,
    },
    '& .ant-menu-submenu-title .anticon': {
      marginRight: 0,
      overflow: 'visible',
      lineHeight: 0.6,
    },
    '& .ant-menu-submenu-title > span > .anticon': {
      overflow: 'visible',
      lineHeight: 0.6,
    },
    '& .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected': {
      backgroundColor: transparent3,
    },
    '& .ant-tree li a:hover': {
      backgroundColor: 'transparent',
    },
    '& .ant-tree li a.ant-tree-node-selected': {
      backgroundColor: 'transparent',
    },
    '& .ant-tree li > a:hover': {
      backgroundColor: transparent3,
    },
    '& .ant-tree li > a.ant-tree-node-selected': {
      backgroundColor: transparent2,
    },
    '& .ant-checkbox-inner': {
      borderColor: transparent2,
    },
    '& .ant-checkbox:hover > .ant-checkbox-inner': {
      borderColor: transparent2,
    },
    '& .ant-checkbox-checked > .ant-checkbox-inner': {
      // backgroundColor: color,
      borderColor: color,
    },
    '& .ant-radio-button-wrapper-focused': {
      color,
    },
    '& .ant-radio-button-wrapper-checked:first-child': {
      color,
      borderColor: color,
    },
    '& .ant-radio-button-wrapper-checked': {
      borderColor: color,
      color,
      boxShadow: `-1px 0 0 0 ${color}`,
    },
    '& .ant-radio-button-wrapper:hover': {
      color,
    },
    '& .ant-radio-checked > .ant-radio-inner': {
      borderColor: color,
      onAfter: {
        backgroundColor: color,
      },
    },
    '& .ant-radio-checked:hover > .ant-radio-inner': {
      borderColor: color,
    },
    '& .ant-btn-primary': {
      color: '#fff',
      backgroundColor: color,
      borderColor: color,
    },
    '& .ant-btn:hover': {
      color,
      backgroundColor: 'white',
      borderColor: color,
    },
    '& .ant-btn:focus': {
      color,
      backgroundColor: 'white',
      borderColor: color,
    },
    '& .ant-input:hover': {
      borderColor: transparent,
    },
    '& .ant-tabs-nav .ant-tabs-tab-active': {
      color: transparent,
    },
    '& .ant-tabs-nav .ant-tabs-tab:hover': {
      color: transparent,
    },
    '& .ant-tabs-ink-bar': {
      backgroundColor: transparent,
    },
    '& .ant-input:focus': {
      borderColor: transparent,
      outline: 0,
      boxShadow: `0 0 0 2px ${transparent2}`,
    },
    '& .ant-input-preSuffix-wrapper:hover .ant-input': {
      borderColor: `${transparent}`,
    },
    '& .ant-menu-item.right': {
      float: 'right',
    },
    '& .ant-menu-item > a:hover': {
      color: `${transparent}`,
      textDecoration: 'none',
    },
    '& .ant-spin': {
      color: `${transparent}`,
    },
    '& .ant-pagination-item-active': {
      borderColor: `${transparent}`,
      backgroundColor: `${transparent}`,
    },
    '& .ant-spin-dot > i': {
      backgroundColor: `${transparent}`,
    },
    '& .ant-menu-horizontal > .ant-menu-submenu > a:hover': {
      color: `${transparent}`,
      textDecoration: 'none',
    },
    '& .ant-menu-submenu-title:hover': {
      color: `${transparent}`,
      backgroundColor: `${transparent2}`,
    },
    '& .ant-menu-inline .ant-menu-selected, .ant-menu-inline .ant-menu-item-selected': {
      borderRight: `2px solid ${transparent}`,
    },
    '& .ant-menu > .ant-menu-item-selected': {
      color: `${transparent}`,
      backgroundColor: `${transparent2}`,
    },
    '& .ant-menu-item-selected > a': {
      color: `${transparent}`,
    },
    '& .ant-menu-submenu-active': {
      backgroundColor: `${transparent2}`,
    },
    '& .ant-menu-item:hover': {
      backgroundColor: `${transparent2}`,
    },
    '& .ant-menu-horizontal.ant-menu-light > .ant-menu-submenu-selected': {
      borderBottom: `2px solid ${transparent}`,
      color: `${transparent}`,
    },
    '& .ant-menu-horizontal.ant-menu-dark > .ant-menu-submenu-selected': {
      color: `${transparent}`,
      backgroundColor: `${transparent2}`,
    },
    '& .ant-menu-horizontal.ant-menu-light > .ant-menu-item-active': {
      borderBottom: `2px solid ${transparent}`,
      color: `${transparent}`,
    },
    '& .ant-menu-horizontal.ant-menu-light > .ant-menu-submenu-active': {
      borderBottom: `2px solid ${transparent}`,
      color: `${transparent}`,
    },
    '& .ant-menu-horizontal.ant-menu-light > .ant-menu-item-selected': {
      borderBottom: `2px solid ${transparent}`,
      color: `${transparent}`,
    },
    '& .ant-menu-horizontal.ant-menu-light > .ant-menu-submenu:hover': {
      borderBottom: `2px solid ${transparent}`,
      color: `${transparent}`,
    },
    '& .ant-menu-horizontal.ant-menu-light > .ant-menu-item:hover': {
      borderBottom: `2px solid ${transparent}`,
      color: `${transparent}`,
    },
    '& .ant-table-thead > tr.ant-table-row-hover': {
      background: `${transparent2}`,
    },
    '& .ant-table-tbody > tr.ant-table-row-hover': {
      background: `${transparent2}`,
    },
    '& .ant-table-thead > tr:hover': {
      background: `${transparent2}`,
    },
    '& .ant-table-tbody > tr:hover:not(.ant-table-expanded-row)': {
      background: `${transparent2}`,
    },
  };
};
