import React, { Component } from 'react';
import { createComponent } from 'olymp-fela';
import { get } from 'lodash';
import { compose, withPropsOnChange } from 'recompose';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, compareAsc } from 'date-fns';
import moment from 'moment';
import { getPrintableValue } from '../utils';

BigCalendar.momentLocalizer(moment);

const min = new Date(0, 0, 0, 7, 0, 0, 0);
const max = new Date(0, 0, 0, 22, 0, 0, 0);

const EventAgenda = onClick => ({ event }) => (
  <div onClick={() => onClick(event)} style={{ cursor: 'pointer' }}>
    <h4>{event.title}</h4>
    {event.desc}
  </div>
);

const Calendar = createComponent(
  ({ theme }) => ({
    '& .rbc-event': {
      backgroundColor: theme.color,
      borderRadius: 0,
      marginX: theme.space1,
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
      const allDay =
        collection.fields.find(x => x.name === startField).innerType.name ===
        'Date';

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
        allDay,
        start: new Date(item[startField]),
        end: endField ? new Date(item[endField]) : new Date(item[startField]),
      }));

      return { events, startField, endField };
    },
  ),
);

@enhance
export default class CalendarView extends Component {
  render() {
    const {
      collection,
      events,
      updateQuery,
      typeName,
      startField,
      endField,
    } = this.props;

    return (
      <Calendar
        selectable
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
        components={{
          agenda: {
            event: EventAgenda(event =>
              updateQuery({ [`@${typeName.toLowerCase()}`]: event.id }),
            ),
          },
        }}
        formats={{
          dateFormat: 'DD.',
          dayFormat: 'dd, DD.MM',
          dayHeaderFormat: 'dddd, DD. MMMM YYYY',
          agendaDateFormat: 'dd, DD.MM.YYYY',
          agendaTimeRangeFormat: ({ start, end }) =>
            compareAsc(start, end)
              ? `${format(start, 'HH:mm')} bis ${format(end, 'HH:mm')}`
              : format(start, 'HH:mm'),
          eventTimeRangeFormat: ({ start, end }) =>
            compareAsc(start, end)
              ? `${format(start, 'HH:mm')} bis ${format(end, 'HH:mm')}`
              : format(start, 'HH:mm'),
        }}
        min={min}
        max={max}
        onSelectEvent={event =>
          updateQuery({ [`@${typeName.toLowerCase()}`]: event.id })
        }
        onSelectSlot={slotInfo => {
          const query = {
            [`@${typeName.toLowerCase()}`]: 'new',
          };

          if (startField) {
            query[startField] = slotInfo.start;
          }

          if (endField) {
            query[endField] = slotInfo.end;
          }

          updateQuery(query);
        }}
      />
    );
  }
}
