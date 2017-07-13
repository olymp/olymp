import React from 'react';
import RRule from 'rrule';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import moment from 'moment';
import { get } from 'lodash';
import { colors } from 'olymp';

export default (options = {}) => {
  const g = prop => state => get(state, prop);
  const createRRule = createSelector(
    [
      g('recurrence.freq'),
      g('recurrence.interval'),
      g('recurrence.weekDays'),
      g('start'),
      g('recurrence.until'),
    ],
    (freq, interval, byweekday, dtstart, until) => {
      return new RRule({
        freq,
        interval,
        byweekday,
        dtstart: new Date(dtstart),
        until: new Date(until),
      });
    }
  );
  const getAssignments = createSelector(
    [g('assignments'), g('rooms'), g('start'), g('end')],
    (assignments, rooms, start, end) => {
      const monthAssignments = {};
      const dateAssignments = {};
      const organizedAssignments = {};
      const add = (resource, item, start) => {
        const month = moment(start || item.start).month();
        const startOfDay = moment(start || item.start).startOf('day');
        const endOfDay = moment(item.end).startOf('day');
        if (!dateAssignments[+startOfDay]) dateAssignments[+startOfDay] = [];
        if (!monthAssignments[month]) monthAssignments[month] = {};
        if (!monthAssignments[month][resource.id])
          monthAssignments[month][resource.id] = [];
        dateAssignments[+startOfDay].push(item);
        monthAssignments[month][resource.id].push(item);
        for (var m = moment(startOfDay); m < endOfDay; m.add(1, 'days')) {
          add(resource, item, m);
        }
      };
      (rooms || []).forEach(resource => {
        (assignments || []).forEach(item => {
          if (item.resourceId !== resource.id) return;
          const s = moment(item.start);
          const startTime = s.format('HH:mm');
          const endTime = moment(item.start)
            .add(item.duration, 'minutes')
            .format('HH:mm');
          if (item.recurrence) {
            const rule = createRRule(item);
            rule.between(new Date(start), new Date(end)).forEach((date, i) => {
              add(resource, {
                ...item,
                id: `${item.id}:${i}`,
                start: +date,
                end: +moment(date).add(item.duration, 'minutes'),
                allDay: true,
              });
            });
          } else if (item.start >= start && item.end <= end) {
            add(resource, {
              ...item,
              end: +moment(item.start).add(item.duration, 'minutes'),
              allDay: true,
            });
          }
        });
      });
      console.log(monthAssignments, dateAssignments);
      return { monthAssignments, dateAssignments };
    }
  );

  return connect((state, props) => ({
    ...getAssignments(props),
  }));
};
