import React, { Component } from 'react';
import { createComponent, Drawer, Menu } from 'olymp-fela';
import { get } from 'lodash';
import { compose, withPropsOnChange } from 'recompose';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { getPrintableValue } from '../utils';

BigCalendar.momentLocalizer(moment);

const FlexContainer = createComponent(
  ({ theme }) => ({
    position: 'relative',
    padding: theme.space3,
    hasFlex: {
      display: 'flex',
      flex: '1 1 0%',
      flexDirection: 'column',
    },
    '> div': {
      flex: '1 1 0%',
      height: 'auto !important',
      overflow: 'auto',
    },
  }),
  'div',
);

const Calendar = createComponent(
  ({ theme }) => ({
    '& .rbc-event': {
      backgroundColor: theme.color,
      borderRadius: theme.borderRadius,
      onHover: {
        opacity: 0.67,
      },
    },
  }),
  p => <BigCalendar {...p} />,
  p => Object.keys(p),
);

const enhance = compose(
  withPropsOnChange(
    ['items', 'collection', 'sortBy'],
    ({ items, collection, sortBy }) => {
      const nameField = get(collection, 'specialFields.nameField', 'name');
      const descriptionField = get(
        collection,
        'specialFields.descriptionField',
      );
      const startField = get(collection, 'specialFields.startField');
      const endField = get(collection, 'specialFields.endField');
      const allDayField = get(collection, 'specialFields.allDayField', false);

      const events = (items || []).map(item => ({
        id: item.id,
        title: item[nameField],
        desc:
          !!descriptionField &&
          getPrintableValue(
            item[sortBy || descriptionField],
            collection.fields.find(
              field => field.name === (sortBy || descriptionField),
            ),
          ),
        allDay: item[allDayField],
        start: new Date(item[startField]),
        end: endField ? new Date(item[endField]) : new Date(item[startField]),
      }));

      return { events };
    },
  ),
);

@enhance
export default class CalendarView extends Component {
  render() {
    const {
      collection,
      items,
      events,
      id,
      children,
      updateQuery,
      typeName,
    } = this.props;
    const nameField = get(collection, 'specialFields.nameField', 'name');

    return (
      <FlexContainer>
        <Calendar
          events={events}
          messages={{
            allDay: 'Ganztägig',
            previous: 'Zurück',
            next: 'Vor',
            today: 'Heute',
            month: 'Monat',
            week: 'Woche',
            day: 'Tag',
            agenda: 'Agenda',
            date: 'Datum',
            time: 'Zeit',
            event: collection.name,
            // showMore: Function
          }}
          onSelectEvent={event =>
            updateQuery({ [`@${typeName.toLowerCase()}`]: event.id })
          }
        />

        <Drawer
          open={!!id}
          width={475}
          right
          onClose={() => updateQuery({ [`@${typeName.toLowerCase()}`]: null })}
        >
          <Menu
            header={
              id === 'new' ? (
                <Menu.Item large>{collection.name} anlegen</Menu.Item>
              ) : (
                <Menu.Item large>
                  {((items || []).find(x => x.id === id) || {})[nameField] ||
                    'Bearbeiten'}
                  <small>{collection.name} bearbeiten</small>
                </Menu.Item>
              )
            }
            headerColor
            headerInverted
          >
            {children}
          </Menu>
        </Drawer>
      </FlexContainer>
    );
  }
}
