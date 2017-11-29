import React, { Component } from 'react';
import { createComponent } from 'olymp-fela';
import { get } from 'lodash';
import { compose, withPropsOnChange } from 'recompose';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { getPrintableValue } from '../utils';

BigCalendar.momentLocalizer(moment);

const min = new Date(0, 0, 0, 7, 0, 0, 0);
const max = new Date(0, 0, 0, 22, 0, 0, 0);

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
    const { collection, events, updateQuery, typeName } = this.props;

    return (
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
        min={min}
        max={max}
        onSelectEvent={event =>
          updateQuery({ [`@${typeName.toLowerCase()}`]: event.id })
        }
      />
    );
  }
}
