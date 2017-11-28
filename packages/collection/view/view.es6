import React, { Component } from 'react';
import { withSearch } from 'olymp-utils';
import { withRouter } from 'olymp-router';
import { SectionHeading, Sidebar, Menu } from 'olymp-fela';
import {
  FaDatabase,
  FaTrash,
  FaArchive,
  FaClockO,
  FaPlus,
  FaAngleRight,
} from 'olymp-icons';
import { Image } from 'olymp-cloudinary';
import { get } from 'lodash';
import { compose, withPropsOnChange } from 'recompose';
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
  withPropsOnChange(
    ['collection', 'items', 'typeName', 'id'],
    ({ collection, items = [], updateQuery, typeName, id, sortBy }) => ({
      menuItems: items.map(item => ({
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
        onClick: () => updateQuery({ [`@${typeName.toLowerCase()}`]: item.id }),
      })),
    }),
  ),
);

@enhance
export default class CollectionView extends Component {
  render() {
    const {
      collection,
      fieldNames,
      menuItems,
      typeName,
      id,
      refetchQuery,
      updateQuery,
    } = this.props;
    const startField = get(collection, 'specialFields.startField');

    return (
      <Sidebar
        flex
        menu={
          <Menu
            header={
              <Menu.Item icon={<FaDatabase />} large>
                {get(collection, 'specialFields.label', collection.name)}
              </Menu.Item>
            }
          >
            <Menu.Item
              icon={<FaPlus />}
              onClick={() =>
                updateQuery({ [`@${typeName.toLowerCase()}`]: 'new' })
              }
            >
              Hinzufügen
            </Menu.Item>
            <Menu.Item icon={<FaClockO />} extra={<FaAngleRight />}>
              Abgelaufen
            </Menu.Item>
            <Menu.Item icon={<FaArchive />} extra={<FaAngleRight />}>
              Archiv
            </Menu.Item>
            <Menu.Item icon={<FaTrash />} extra={<FaAngleRight />}>
              Papierkorb
            </Menu.Item>
            <Menu.Divider />
            {menuItems.map(
              ({ key, label, description, image, color, active, onClick }) => (
                <Menu.Item
                  key={key}
                  onClick={onClick}
                  icon={
                    !!image && <Image value={image} width={40} height={40} />
                  }
                  active={active}
                  large={!!image}
                >
                  {color ? <span style={{ color }}>{label}</span> : label}
                  {!!description && <small>{description}</small>}
                </Menu.Item>
              ),
            )}
          </Menu>
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
