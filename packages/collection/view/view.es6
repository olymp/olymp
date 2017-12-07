import React, { Component } from 'react';
import { withSearch } from 'olymp-utils';
import { withRouter } from 'olymp-router';
import { Sidebar, Drawer } from 'olymp-fela';
import Menu, {StackedMenu} from 'olymp-fela/menu';
import { createComponent } from 'react-fela';
import {
  FaDatabase,
  FaTrashO,
  FaArchive,
  FaClockO,
  FaPlus,
  FaAngleRight,
  FaChevronLeft,
} from 'olymp-icons';
import { Image } from 'olymp-cloudinary';
import { get } from 'lodash';
import { Icon } from 'antd';
import { compose, withPropsOnChange, withState } from 'recompose';
import isAfter from 'date-fns/isAfter';
import { getPrintableValue } from '../utils';
import withItems from '../with-items';
import withCollection from '../with-collection';
import Calendar from './calendar';
import Table from './table';
import Detail from './detail';

const FlexContainer = createComponent(
  ({ theme }) => ({
    position: 'relative',
    hasFlex: {
      display: 'flex',
      flex: '1 1 0%',
      flexDirection: 'column',
    },
    '> .rbc-calendar': {
      padding: theme.space3,
    },
    '> div': {
      hasFlex: {
        flex: '1 1 0%',
      },
      height: 'auto !important',
      overflow: 'auto',
      '> .rbc-toolbar': {
        '> .rbc-toolbar-label': {
          color: theme.color,
          fontWeight: 200,
          fontSize: '200%',
        },
      },
    },
  }),
  'div',
);

const enhance = compose(
  withRouter,
  withSearch('search'),
  withCollection,
  withItems,
  withState('keys', 'setKeys', []),
  withPropsOnChange(['collection', 'items'], ({ collection, items = [] }) => {
    const startField = get(collection, 'specialFields.startField');
    const endField = get(collection, 'specialFields.endField');

    return {
      items:
        startField || startField
          ? items.map(item => ({
              ...item,
              state:
                item.state === 'PUBLISHED' &&
                !isAfter(item[endField || startField], new Date())
                  ? 'EXPIRED'
                  : 'PUBLISHED',
            }))
          : items,
    };
  }),
  withPropsOnChange(
    ['collection', 'items', 'typeName', 'id', 'keys'],
    ({ collection, items = [], updateQuery, typeName, id, sortBy, keys }) => ({
      menuItems: items
        .filter(x => x.state === (keys[0] || 'PUBLISHED'))
        .map(item => ({
          key: item.id,
          image: item[collection.specialFields.imageField],
          description: getPrintableValue(
            item[sortBy || collection.specialFields.descriptionField],
            collection.fields.find(
              field =>
                field.name ===
                (sortBy || collection.specialFields.descriptionField),
            ),
          ),
          color: item[collection.specialFields.colorField],
          active: item.id === id,
          label: item[collection.specialFields.nameField] || 'Kein Titel',
          onClick: () =>
            updateQuery({ [`@${typeName.toLowerCase()}`]: item.id }),
        })),
    }),
  ),
);

@enhance
export default class CollectionView extends Component {
  renderMenu = () => {
    const {
      collection,
      menuItems,
      typeName,
      updateQuery,
      keys,
      setKeys,
    } = this.props;
    const startField = get(collection, 'specialFields.startField');

    return (
      <Menu
        header={
          <Menu.Item
            icon={
              collection.specialFields.icon ? (
                <Icon
                  type={collection.specialFields.icon}
                  style={{ fontSize: 32 }}
                />
              ) : (
                <FaDatabase />
              )
            }
            large
            extra={
              <Menu.Extra
                onClick={() =>
                  updateQuery({ [`@${typeName.toLowerCase()}`]: 'new' })
                }
                disabled={!!keys.length}
                large
              >
                <FaPlus />
              </Menu.Extra>
            }
          >
            {get(collection, 'specialFields.label', collection.name)}
          </Menu.Item>
        }
      >
        {!!keys.length && (
          <Menu.Item icon={<FaChevronLeft />} onClick={() => setKeys([])}>
            Zurück
          </Menu.Item>
        )}
        {!keys.length &&
          !!startField && (
            <Menu.Item
              icon={<FaClockO />}
              extra={<FaAngleRight />}
              onClick={() => setKeys(['EXPIRED'])}
            >
              Abgelaufen
            </Menu.Item>
          )}
        {!keys.length && (
          <Menu.Item
            icon={<FaArchive />}
            extra={<FaAngleRight />}
            onClick={() => setKeys(['DRAFT'])}
          >
            Archiv
          </Menu.Item>
        )}
        {!keys.length && (
          <Menu.Item
            icon={<FaTrashO />}
            extra={<FaAngleRight />}
            onClick={() => setKeys(['REMOVED'])}
          >
            Papierkorb
          </Menu.Item>
        )}
        <Menu.Divider />
        {menuItems.map(
          ({ key, label, description, image, color, active, onClick }) => (
            <Menu.Item
              key={key}
              onClick={onClick}
              icon={!!image && <Image value={image} width={40} height={40} />}
              active={active}
              large={!!image}
            >
              {color ? <span style={{ color }}>{label}</span> : label}
              {!!description && <small>{description}</small>}
            </Menu.Item>
          ),
        )}
      </Menu>
    );
  };

  render() {
    const {
      collection,
      fieldNames,
      typeName,
      id,
      refetchQuery,
      isLoading,
      keys,
      items,
      replaceQuery,
    } = this.props;
    const nameField = get(collection, 'specialFields.nameField', 'name');
    const startField = get(collection, 'specialFields.startField');

    return (
      <Sidebar
        flex
        menu={
          <StackedMenu
            isLoading={isLoading}
            keys={keys}
            renderMenu={this.renderMenu}
          />
        }
      >
        <FlexContainer>
          {startField ? (
            <Calendar {...this.props} />
          ) : (
            <Table
              {...this.props}
              items={items.filter(x => x.state === (keys[0] || 'PUBLISHED'))}
            />
          )}
        </FlexContainer>

        <Drawer
          open={!!id}
          width={475}
          right
          onClose={() =>
            replaceQuery({
              [`@${typeName.toLowerCase()}`]: null,
            })
          }
        >
          <Menu
            header={
              id === 'new' ? (
                <Menu.Item large>
                  {collection.specialFields.label} anlegen
                </Menu.Item>
              ) : (
                <Menu.Item large>
                  {((items || []).find(x => x.id === id) || {})[nameField] ||
                    'Bearbeiten'}
                  <small>{collection.specialFields.label} bearbeiten</small>
                </Menu.Item>
              )
            }
            headerColor
            headerInverted
          >
            <Detail
              id={id === 'new' ? null : id}
              key={id || 'new'}
              refetchQuery={refetchQuery}
              fieldNames={fieldNames}
              collection={collection}
              typeName={typeName}
            />
          </Menu>
        </Drawer>
      </Sidebar>
    );
  }
}
