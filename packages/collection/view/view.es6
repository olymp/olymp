import React, { Component } from 'react';
import { withSearch } from 'olymp-utils';
import { withRouter } from 'olymp-router';
import { SectionHeading, Sidebar, StackedMenu, Menu } from 'olymp-fela';
import {
  FaDatabase,
  FaTrash,
  FaArchive,
  FaClockO,
  FaPlus,
  FaAngleRight,
  FaChevronLeft,
} from 'olymp-icons';
import { Image } from 'olymp-cloudinary';
import { get } from 'lodash';
import { compose, withPropsOnChange, withState } from 'recompose';
import isAfter from 'date-fns/isAfter';
import { getPrintableValue } from '../utils';
import withItems from '../with-items';
import withCollection from '../with-collection';
import Calendar from './calendar';
import Detail from './detail';

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
  renderMenu = key => {
    const {
      collection,
      menuItems,
      typeName,
      updateQuery,
      keys,
      setKeys,
    } = this.props;

    console.log(key);

    return (
      <Menu
        header={
          <Menu.Item icon={<FaDatabase />} large>
            {get(collection, 'specialFields.label', collection.name)}
          </Menu.Item>
        }
      >
        <Menu.Item
          icon={<FaPlus />}
          onClick={() => updateQuery({ [`@${typeName.toLowerCase()}`]: 'new' })}
          disabled={!!keys.length}
        >
          Hinzufügen
        </Menu.Item>
        {!!keys.length && (
          <Menu.Item icon={<FaChevronLeft />} onClick={() => setKeys([])}>
            Zurück
          </Menu.Item>
        )}
        {!keys.length && (
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
            icon={<FaTrash />}
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
    } = this.props;
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
        {startField ? (
          <Calendar {...this.props}>
            <Detail
              id={id === 'new' ? null : id}
              key={id || 'new'}
              refetchQuery={refetchQuery}
              fieldNames={fieldNames}
              collection={collection}
              typeName={typeName}
            />
          </Calendar>
        ) : (
          <div>
            {!id || id === 'new' ? (
              <SectionHeading>
                {`${get(
                  collection,
                  'specialFields.label',
                  collection.name,
                )} anlegen`}
              </SectionHeading>
            ) : (
              <SectionHeading
                description={`${get(
                  collection,
                  'specialFields.label',
                  collection.name,
                )} bearbeiten`}
              >
                Bearbeiten
              </SectionHeading>
            )}

            <Detail
              id={id === 'new' ? null : id}
              key={id || 'new'}
              refetchQuery={refetchQuery}
              fieldNames={fieldNames}
              collection={collection}
              typeName={typeName}
            />
          </div>
        )}
      </Sidebar>
    );
  }
}
