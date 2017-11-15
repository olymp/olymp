import tinycolor from 'tinycolor2';

export default ({ theme }) => {
  const color = theme.color;
  const transparent = tinycolor(theme.color)
    .setAlpha(0.8)
    .toRgbString();
  const transparent2 = tinycolor(theme.color)
    .setAlpha(0.1)
    .toRgbString();
  const transparent3 = tinycolor(theme.color)
    .setAlpha(0.05)
    .toRgbString();

  return {
    '& ::selection': {
      background: color,
    },
    '& .ant-menu-item svg': {
      marginBottom: -2,
      marginRight: -2,
    },
    '& .ant-tree li .ant-tree-node-content-wrapper': {
      height: 'initial',
      lineHeight: 'initial',
    },
    '& .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled)': {
      borderColor: theme.color,
    },
    '& .ant-input.ant-select-search__field': {
      height: 32,
    },
    '& .ant-form-item-control .ant-input-suffix > svg': {
      fill: theme.dark2,
    },
    '& p a': {
      color: theme.color,
    },
    '& .ant-slider-dot-active': {
      borderColor: transparent,
    },
    '& .ant-slider > .ant-slider-track': {
      backgroundColor: transparent,
    },
    '& .ant-slider-handle': {
      borderColor: transparent,
    },
    '& .ant-slider:hover .ant-slider-handle': {
      borderColor: theme.color,
    },
    '& .ant-select-dropdown-menu-item.ant-select-dropdown-menu-item-active': {
      backgroundColor: transparent3,
    },
    '& .ant-calendar-today-btn': {
      color: theme.color,
    },
    '& a.ant-dropdown-link': {
      color: theme.color,
    },
    '& .ant-calendar-selected-day > .ant-calendar-date': {
      backgroundColor: theme.color,
    },
    '& .ant-input-number:focus': {
      borderColor: theme.color,
    },
    '& .ant-input-number:hover': {
      borderColor: theme.color,
    },
    '& .ant-time-picker-input:hover': {
      borderColor: theme.color,
    },
    '& .ant-select-selection:hover': {
      borderColor: theme.color,
    },
    '& .ant-select-selection:focus': {
      borderColor: theme.color,
    },
    '& .ant-calendar-picker:hover .ant-calendar-picker-input:not(.ant-input-disabled)': {
      borderColor: theme.color,
    },
    '& .ant-select-auto-complete.ant-select input.ant-input:focus': {
      borderColor: theme.color,
    },
    '& .ant-select-auto-complete.ant-select input.ant-input:hover': {
      borderColor: theme.color,
    },
    '& form.ant-form.ant-form-horizontal .ant-row.ant-form-item': {
      marginBottom: 10,
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
