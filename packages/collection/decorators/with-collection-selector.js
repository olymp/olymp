var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import RRule from 'rrule';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import moment from 'moment';
import { get } from 'lodash';
export default function (options) {
    if (options === void 0) { options = {}; }
    var g = function (prop) { return function (state) { return get(state, prop); }; };
    var createRRule = createSelector([
        g('recurrence.freq'),
        g('recurrence.interval'),
        g('recurrence.weekDays'),
        g('start'),
        g('recurrence.until'),
    ], function (freq, interval, byweekday, dtstart, until) {
        return new RRule({
            freq: freq,
            interval: interval,
            byweekday: byweekday,
            dtstart: new Date(dtstart),
            until: new Date(until),
        });
    });
    var getAssignments = createSelector([g('assignments'), g('rooms'), g('start'), g('end')], function (assignments, rooms, start, end) {
        var monthAssignments = {};
        var dateAssignments = {};
        var organizedAssignments = {};
        var add = function (resource, item, start) {
            var month = moment(start || item.start).month();
            var startOfDay = moment(start || item.start).startOf('day');
            var endOfDay = moment(item.end).startOf('day');
            if (!dateAssignments[+startOfDay])
                dateAssignments[+startOfDay] = [];
            if (!monthAssignments[month])
                monthAssignments[month] = {};
            if (!monthAssignments[month][resource.id])
                monthAssignments[month][resource.id] = [];
            dateAssignments[+startOfDay].push(item);
            monthAssignments[month][resource.id].push(item);
            for (var m = moment(startOfDay); m < endOfDay; m.add(1, 'days')) {
                add(resource, item, m);
            }
        };
        (rooms || []).forEach(function (resource) {
            (assignments || []).forEach(function (item) {
                if (item.resourceId !== resource.id)
                    return;
                var s = moment(item.start);
                var startTime = s.format('HH:mm');
                var endTime = moment(item.start)
                    .add(item.duration, 'minutes')
                    .format('HH:mm');
                if (item.recurrence) {
                    var rule = createRRule(item);
                    rule.between(new Date(start), new Date(end)).forEach(function (date, i) {
                        add(resource, __assign({}, item, { id: item.id + ":" + i, start: +date, end: +moment(date).add(item.duration, 'minutes'), allDay: true }));
                    });
                }
                else if (item.start >= start && item.end <= end) {
                    add(resource, __assign({}, item, { end: +moment(item.start).add(item.duration, 'minutes'), allDay: true }));
                }
            });
        });
        console.log(monthAssignments, dateAssignments);
        return { monthAssignments: monthAssignments, dateAssignments: dateAssignments };
    });
    return connect(function (state, props) { return (__assign({}, getAssignments(props))); });
};
//# sourceMappingURL=with-collection-selector.js.map