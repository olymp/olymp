var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import { createComponent, Container, Grid, border, SchemaLoader, } from 'olymp-fela';
import { graphql, gql } from 'olymp-utils';
import { Link } from 'olymp-router';
import { Image } from 'olymp-cloudinary';
import { FaDownload } from 'olymp-icons';
import { orderBy, upperFirst, range } from 'lodash';
import moment from 'moment';
import { H2, Panel, Item as ListItem } from '../components';
var loaderSchema = [
    {
        height: 0,
    },
    {
        width: 'container',
        grid: [
            {
                medium: 7,
                children: range(9).map(function () { return ({
                    height: 180,
                    width: '100%',
                }); }),
            },
            {
                medium: 5,
                height: 500,
            },
        ],
    },
];
export var Column = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        textAlign: 'right',
        '> h2': {
            marginBottom: theme.space0,
        },
        '> h2:not(:first-child)': {
            marginTop: theme.space4,
        },
    });
}, function (p) { return React.createElement(Grid.Item, __assign({}, p)); }, function (p) { return Object.keys(p); });
export var Content = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        hasFlex: {
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            justifyContent: 'space-between',
        },
        maxWidth: '100%',
        paddingLeft: theme.space2,
        marginBottom: "-" + theme.space3,
        '> a': {
            marginTop: theme.space3,
            color: theme.color,
        },
    });
}, 'div', function (p) { return Object.keys(p); });
export var Img = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        float: 'left',
        marginRight: theme.space2,
        alignSelf: 'flex-start',
    });
}, function (p) { return React.createElement(Image, __assign({}, p)); }, function (p) { return Object.keys(p); });
export var Li = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        paddingY: theme.space3,
        borderBottom: border(theme, theme.dark4),
        onHover: {},
        ':last-of-type': {
            marginBottom: theme.space3,
        },
    });
}, 'li', function (p) { return Object.keys(p); });
var DownloadLink = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.dark,
        '> svg': {
            marginLeft: theme.space2,
        },
    });
}, 'a', function (p) { return Object.keys(p); });
var Item = function (props) {
    var name = props.name, description = props.description, slug = props.slug, org = props.org, date = props.date, person = props.person;
    var image = props.image ||
        org.logo || {
        url: 'https://res.cloudinary.com/djyenzorc/image/upload/v1499270971/kdmxe7pl54cqtdfc7ggy.jpg',
        width: 400,
        height: 300,
    };
    return (React.createElement(Panel, { accent: org.color, title: name, subtitle: moment(date).format('DD. MMMM YYYY') + ", " + (person.name ||
            'Redaktion') },
        React.createElement(Img, { value: image, width: 160, avatar: true }),
        React.createElement(Content, null,
            React.createElement("p", null, description),
            slug &&
                React.createElement(Link, { to: { pathname: "/magazin" + slug } }, "Weiterlesen..."))));
};
var TagContainer = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        hasFlex: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        },
    });
}, 'div', function (p) { return Object.keys(p); });
var Tag = createComponent(function (_a) {
    var theme = _a.theme;
    return ({
        backgroundColor: theme.dark5,
        paddingY: theme.space1,
        paddingX: theme.space2,
        marginLeft: theme.space3,
        marginY: theme.space1,
        fontSize: '90%',
        flexGrow: 1,
        whiteSpace: 'nowrap',
        textAlign: 'center',
        display: 'inline-block',
        onHover: {
            backgroundColor: theme.color,
            color: theme.light,
        },
    });
}, 'div', function (p) { return Object.keys(p); });
var component = graphql((_a = ["\n    query articleList {\n      items: articleList(\n        sort: { date: DESC }\n        query: { state: { eq: PUBLISHED } }\n      ) {\n        id\n        name\n        description\n        date\n        slug\n        tags\n        state\n        image {\n          id\n          width\n          height\n          url\n          crop\n        }\n        org {\n          id\n          name\n          logo {\n            id\n            width\n            height\n            url\n            crop\n          }\n          color\n        }\n        person {\n          id\n          name\n        }\n      }\n      pdfs: fileList(query: { tags: { in: \"GiZ\" }, state: { eq: PUBLISHED } }) {\n        id\n        url\n        caption\n      }\n    }\n  "], _a.raw = ["\n    query articleList {\n      items: articleList(\n        sort: { date: DESC }\n        query: { state: { eq: PUBLISHED } }\n      ) {\n        id\n        name\n        description\n        date\n        slug\n        tags\n        state\n        image {\n          id\n          width\n          height\n          url\n          crop\n        }\n        org {\n          id\n          name\n          logo {\n            id\n            width\n            height\n            url\n            crop\n          }\n          color\n        }\n        person {\n          id\n          name\n        }\n      }\n      pdfs: fileList(query: { tags: { in: \"GiZ\" }, state: { eq: PUBLISHED } }) {\n        id\n        url\n        caption\n      }\n    }\n  "], gql(_a)), {
    props: function (_a) {
        var ownProps = _a.ownProps, data = _a.data;
        return (__assign({}, ownProps, { data: data, isLoading: data.loading, items: data.items || [], pdfs: data.pdfs || [] }));
    },
})(function (_a) {
    var attributes = _a.attributes, items = _a.items, pdfs = _a.pdfs, isLoading = _a.isLoading;
    var tags = items.reduce(function (tags, item) {
        (item.tags || []).forEach(function (tag) {
            var index = tags.findIndex(function (item) { return item.tag === tag; });
            if (index === -1) {
                tags.push({ tag: tag, count: 1 });
            }
            else {
                tags[index].count += 1;
            }
        });
        return tags;
    }, []);
    return (React.createElement(SchemaLoader, { isLoading: isLoading, schema: loaderSchema },
        React.createElement(Container, __assign({}, attributes),
            React.createElement(Grid, null,
                React.createElement(Grid.Item, { medium: 7, paddingMedium: "0 0 0 0.5rem" }, items.map(function (item) {
                    return React.createElement(Item, __assign({}, item, { org: item.org || {}, person: item.person || {}, key: item.id }));
                })),
                React.createElement(Column, { medium: 4, offsetMedium: 1, offsetLarge: 1, offsetHuge: 1, paddingMini: "0.5rem 1rem 0 1rem", paddingMedium: "0 0.5rem 0 0" },
                    React.createElement(H2, { right: true }, "Ausgaben als PDFs"),
                    pdfs.map(function (pdf, i) {
                        return React.createElement(ListItem, { key: i },
                            React.createElement(DownloadLink, { rel: "noopener noreferrer", href: pdf.url, target: "_blank" },
                                "Gesund im Zentrum - ",
                                React.createElement("b", null, pdf.caption),
                                React.createElement(FaDownload, { size: 15 })));
                    }),
                    React.createElement(H2, { right: true }, "Schlagworte"),
                    React.createElement(TagContainer, null, orderBy(tags, ['count', 'tag'], ['desc', 'asc']).map(function (tag) {
                        return React.createElement(Tag, { key: tag.tag },
                            upperFirst(tag.tag),
                            " ",
                            React.createElement("small", null,
                                "(",
                                tag.count,
                                ")"));
                    })))))));
});
export default {
    key: 'GZK.Collections.MagazinBlock',
    label: 'Magazin',
    category: 'Collections',
    editable: false,
    component: component,
};
var _a;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhY2thZ2VzL2F0aGVuYS1nei9ibG9ja3MvbWFnYXppbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssTUFBTSxPQUFPLENBQUM7QUFDMUIsT0FBTyxFQUNMLGVBQWUsRUFDZixTQUFTLEVBQ1QsSUFBSSxFQUNKLE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxZQUFZLENBQUM7QUFDcEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNwQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDcEQsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksSUFBSSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFNUQsSUFBTSxZQUFZLEdBQUc7SUFDbkI7UUFDRSxNQUFNLEVBQUUsQ0FBQztLQUNWO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsV0FBVztRQUNsQixJQUFJLEVBQUU7WUFDSjtnQkFDRSxNQUFNLEVBQUUsQ0FBQztnQkFDVCxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFNLE9BQUEsQ0FBQztvQkFDNUIsTUFBTSxFQUFFLEdBQUc7b0JBQ1gsS0FBSyxFQUFFLE1BQU07aUJBQ2QsQ0FBQyxFQUgyQixDQUczQixDQUFDO2FBQ0o7WUFDRDtnQkFDRSxNQUFNLEVBQUUsQ0FBQztnQkFDVCxNQUFNLEVBQUUsR0FBRzthQUNaO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSxN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b0JBQW9CLEVBQ2hDLGFBQWEsRUFBQyxjQUFjO29CQUU1QixvQkFBQyxFQUFFLElBQUMsS0FBSyw4QkFBdUI7b0JBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDZixPQUFBLG9CQUFDLFFBQVEsSUFBQyxHQUFHLEVBQUUsQ0FBQzs0QkFDZCxvQkFBQyxZQUFZLElBQ1gsR0FBRyxFQUFDLHFCQUFxQixFQUN6QixJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFDYixNQUFNLEVBQUMsUUFBUTs7Z0NBRUssK0JBQUksR0FBRyxDQUFDLE9BQU8sQ0FBSztnQ0FDeEMsb0JBQUMsVUFBVSxJQUFDLElBQUksRUFBRSxFQUFFLEdBQUksQ0FDWCxDQUNOO29CQVRYLENBU1csQ0FDWjtvQkFFRCxvQkFBQyxFQUFFLElBQUMsS0FBSyx3QkFBaUI7b0JBQzFCLG9CQUFDLFlBQVksUUFDVixPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRzt3QkFDdkQsT0FBQSxvQkFBQyxHQUFHLElBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHOzRCQUNkLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDOzs0QkFBRTs7Z0NBQVMsR0FBRyxDQUFDLEtBQUs7b0NBQVUsQ0FDOUM7b0JBRk4sQ0FFTSxDQUNQLENBQ1ksQ0FDUixDQUNKLENBQ0csQ0FDQyxDQUNoQixDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFlO0lBQ2IsR0FBRyxFQUFFLDhCQUE4QjtJQUNuQyxLQUFLLEVBQUUsU0FBUztJQUNoQixRQUFRLEVBQUUsYUFBYTtJQUN2QixRQUFRLEVBQUUsS0FBSztJQUNmLFNBQVMsV0FBQTtDQUNWLENBQUMiLCJmaWxlIjoicGFja2FnZXMvYXRoZW5hLWd6L2Jsb2Nrcy9tYWdhemluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gIGNyZWF0ZUNvbXBvbmVudCxcbiAgQ29udGFpbmVyLFxuICBHcmlkLFxuICBib3JkZXIsXG4gIFNjaGVtYUxvYWRlcixcbn0gZnJvbSAnb2x5bXAtZmVsYSc7XG5pbXBvcnQgeyBncmFwaHFsLCBncWwgfSBmcm9tICdvbHltcC11dGlscyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnb2x5bXAtcm91dGVyJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnb2x5bXAtY2xvdWRpbmFyeSc7XG5pbXBvcnQgeyBGYURvd25sb2FkIH0gZnJvbSAnb2x5bXAtaWNvbnMnO1xuaW1wb3J0IHsgb3JkZXJCeSwgdXBwZXJGaXJzdCwgcmFuZ2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgSDIsIFBhbmVsLCBJdGVtIGFzIExpc3RJdGVtIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbmNvbnN0IGxvYWRlclNjaGVtYSA9IFtcbiAge1xuICAgIGhlaWdodDogMCxcbiAgfSxcbiAge1xuICAgIHdpZHRoOiAnY29udGFpbmVyJyxcbiAgICBncmlkOiBbXG4gICAgICB7XG4gICAgICAgIG1lZGl1bTogNyxcbiAgICAgICAgY2hpbGRyZW46IHJhbmdlKDkpLm1hcCgoKSA9PiAoe1xuICAgICAgICAgIGhlaWdodDogMTgwLFxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIH0pKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG1lZGl1bTogNSxcbiAgICAgICAgaGVpZ2h0OiA1MDAsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgQ29sdW1uID0gY3JlYXRlQ29tcG9uZW50KFxuICAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAnPiBoMic6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2UwLFxuICAgIH0sXG4gICAgJz4gaDI6bm90KDpmaXJzdC1jaGlsZCknOiB7XG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNlNCxcbiAgICB9LFxuICB9KSxcbiAgcCA9PiA8R3JpZC5JdGVtIHsuLi5wfSAvPixcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBjcmVhdGVDb21wb25lbnQoXG4gICh7IHRoZW1lIH0pID0+ICh7XG4gICAgaGFzRmxleDoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBmbGV4R3JvdzogMSxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgfSxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjZTIsXG4gICAgbWFyZ2luQm90dG9tOiBgLSR7dGhlbWUuc3BhY2UzfWAsXG4gICAgJz4gYSc6IHtcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2UzLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLFxuICAgIH0sXG4gIH0pLFxuICAnZGl2JyxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuZXhwb3J0IGNvbnN0IEltZyA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBmbG9hdDogJ2xlZnQnLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjZTIsXG4gICAgYWxpZ25TZWxmOiAnZmxleC1zdGFydCcsXG4gIH0pLFxuICBwID0+IDxJbWFnZSB7Li4ucH0gLz4sXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG5cbmV4cG9ydCBjb25zdCBMaSA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwYWRkaW5nWTogdGhlbWUuc3BhY2UzLFxuICAgIGJvcmRlckJvdHRvbTogYm9yZGVyKHRoZW1lLCB0aGVtZS5kYXJrNCksXG4gICAgb25Ib3Zlcjoge1xuICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiB0aGVtZS5kYXJrNSxcbiAgICB9LFxuICAgICc6bGFzdC1vZi10eXBlJzoge1xuICAgICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjZTMsXG4gICAgfSxcbiAgfSksXG4gICdsaScsXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG5cbmNvbnN0IERvd25sb2FkTGluayA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBjb2xvcjogdGhlbWUuZGFyayxcbiAgICAnPiBzdmcnOiB7XG4gICAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjZTIsXG4gICAgfSxcbiAgfSksXG4gICdhJyxcbiAgcCA9PiBPYmplY3Qua2V5cyhwKVxuKTtcblxuY29uc3QgSXRlbSA9IHByb3BzID0+IHtcbiAgY29uc3QgeyBuYW1lLCBkZXNjcmlwdGlvbiwgc2x1Zywgb3JnLCBkYXRlLCBwZXJzb24gfSA9IHByb3BzO1xuXG4gIGNvbnN0IGltYWdlID0gcHJvcHMuaW1hZ2UgfHxcbiAgb3JnLmxvZ28gfHwge1xuICAgIHVybDpcbiAgICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kanllbnpvcmMvaW1hZ2UvdXBsb2FkL3YxNDk5MjcwOTcxL2tkbXhlN3BsNTRjcXRkZmM3Z2d5LmpwZycsXG4gICAgd2lkdGg6IDQwMCxcbiAgICBoZWlnaHQ6IDMwMCxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYW5lbFxuICAgICAgYWNjZW50PXtvcmcuY29sb3J9XG4gICAgICB0aXRsZT17bmFtZX1cbiAgICAgIHN1YnRpdGxlPXtgJHttb21lbnQoZGF0ZSkuZm9ybWF0KCdERC4gTU1NTSBZWVlZJyl9LCAke3BlcnNvbi5uYW1lIHx8XG4gICAgICAgICdSZWRha3Rpb24nfWB9XG4gICAgPlxuICAgICAgPEltZyB2YWx1ZT17aW1hZ2V9IHdpZHRoPXsxNjB9IGF2YXRhciAvPlxuICAgICAgPENvbnRlbnQ+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPC9wPlxuICAgICAgICB7c2x1ZyAmJlxuICAgICAgICAgIDxMaW5rIHRvPXt7IHBhdGhuYW1lOiBgL21hZ2F6aW4ke3NsdWd9YCB9fT5XZWl0ZXJsZXNlbi4uLjwvTGluaz59XG4gICAgICA8L0NvbnRlbnQ+XG4gICAgPC9QYW5lbD5cbiAgKTtcbn07XG5cbmNvbnN0IFRhZ0NvbnRhaW5lciA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBoYXNGbGV4OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICB9LFxuICB9KSxcbiAgJ2RpdicsXG4gIHAgPT4gT2JqZWN0LmtleXMocClcbik7XG5cbmNvbnN0IFRhZyA9IGNyZWF0ZUNvbXBvbmVudChcbiAgKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLmRhcms1LFxuICAgIHBhZGRpbmdZOiB0aGVtZS5zcGFjZTEsXG4gICAgcGFkZGluZ1g6IHRoZW1lLnNwYWNlMixcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjZTMsXG4gICAgbWFyZ2luWTogdGhlbWUuc3BhY2UxLFxuICAgIGZvbnRTaXplOiAnOTAlJyxcbiAgICBmbGV4R3JvdzogMSxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIG9uSG92ZXI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUuY29sb3IsXG4gICAgICBjb2xvcjogdGhlbWUubGlnaHQsXG4gICAgfSxcbiAgfSksXG4gICdkaXYnLFxuICBwID0+IE9iamVjdC5rZXlzKHApXG4pO1xuXG5jb25zdCBjb21wb25lbnQgPSBncmFwaHFsKFxuICBncWxgXG4gICAgcXVlcnkgYXJ0aWNsZUxpc3Qge1xuICAgICAgaXRlbXM6IGFydGljbGVMaXN0KFxuICAgICAgICBzb3J0OiB7IGRhdGU6IERFU0MgfVxuICAgICAgICBxdWVyeTogeyBzdGF0ZTogeyBlcTogUFVCTElTSEVEIH0gfVxuICAgICAgKSB7XG4gICAgICAgIGlkXG4gICAgICAgIG5hbWVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgZGF0ZVxuICAgICAgICBzbHVnXG4gICAgICAgIHRhZ3NcbiAgICAgICAgc3RhdGVcbiAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgd2lkdGhcbiAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICB1cmxcbiAgICAgICAgICBjcm9wXG4gICAgICAgIH1cbiAgICAgICAgb3JnIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIG5hbWVcbiAgICAgICAgICBsb2dvIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB3aWR0aFxuICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgICB1cmxcbiAgICAgICAgICAgIGNyb3BcbiAgICAgICAgICB9XG4gICAgICAgICAgY29sb3JcbiAgICAgICAgfVxuICAgICAgICBwZXJzb24ge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgbmFtZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwZGZzOiBmaWxlTGlzdChxdWVyeTogeyB0YWdzOiB7IGluOiBcIkdpWlwiIH0sIHN0YXRlOiB7IGVxOiBQVUJMSVNIRUQgfSB9KSB7XG4gICAgICAgIGlkXG4gICAgICAgIHVybFxuICAgICAgICBjYXB0aW9uXG4gICAgICB9XG4gICAgfVxuICBgLFxuICB7XG4gICAgcHJvcHM6ICh7IG93blByb3BzLCBkYXRhIH0pID0+ICh7XG4gICAgICAuLi5vd25Qcm9wcyxcbiAgICAgIGRhdGEsXG4gICAgICBpc0xvYWRpbmc6IGRhdGEubG9hZGluZyxcbiAgICAgIGl0ZW1zOiBkYXRhLml0ZW1zIHx8IFtdLFxuICAgICAgcGRmczogZGF0YS5wZGZzIHx8IFtdLFxuICAgIH0pLFxuICB9XG4pKCh7IGF0dHJpYnV0ZXMsIGl0ZW1zLCBwZGZzLCBpc0xvYWRpbmcgfSkgPT4ge1xuICBjb25zdCB0YWdzID0gaXRlbXMucmVkdWNlKCh0YWdzLCBpdGVtKSA9PiB7XG4gICAgKGl0ZW0udGFncyB8fCBbXSkuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgY29uc3QgaW5kZXggPSB0YWdzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0udGFnID09PSB0YWcpO1xuXG4gICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgIHRhZ3MucHVzaCh7IHRhZywgY291bnQ6IDEgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWdzW2luZGV4XS5jb3VudCArPSAxO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0YWdzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2NoZW1hTG9hZGVyIGlzTG9hZGluZz17aXNMb2FkaW5nfSBzY2hlbWE9e2xvYWRlclNjaGVtYX0+XG4gICAgICA8Q29udGFpbmVyIHsuLi5hdHRyaWJ1dGVzfT5cbiAgICAgICAgPEdyaWQ+XG4gICAgICAgICAgPEdyaWQuSXRlbSBtZWRpdW09ezd9IHBhZGRpbmdNZWRpdW09XCIwIDAgMCAwLjVyZW1cIj5cbiAgICAgICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PlxuICAgICAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAgICAgIHsuLi5pdGVtfVxuICAgICAgICAgICAgICAgIG9yZz17aXRlbS5vcmcgfHwge319XG4gICAgICAgICAgICAgICAgcGVyc29uPXtpdGVtLnBlcnNvbiB8fCB7fX1cbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvR3JpZC5JdGVtPlxuICAgICAgICAgIDxDb2x1bW5cbiAgICAgICAgICAgIG1lZGl1bT17NH1cbiAgICAgICAgICAgIG9mZnNldE1lZGl1bT17MX1cbiAgICAgICAgICAgIG9mZnNldExhcmdlPXsxfVxuICAgICAgICAgICAgb2Zmc2V0SHVnZT17MX1cbiAgICAgICAgICAgIHBhZGRpbmdNaW5pPVwiMC41cmVtIDFyZW0gMCAxcmVtXCJcbiAgICAgICAgICAgIHBhZGRpbmdNZWRpdW09XCIwIDAuNXJlbSAwIDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxIMiByaWdodD5BdXNnYWJlbiBhbHMgUERGczwvSDI+XG4gICAgICAgICAgICB7cGRmcy5tYXAoKHBkZiwgaSkgPT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17aX0+XG4gICAgICAgICAgICAgICAgPERvd25sb2FkTGlua1xuICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICBocmVmPXtwZGYudXJsfVxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBHZXN1bmQgaW0gWmVudHJ1bSAtIDxiPntwZGYuY2FwdGlvbn08L2I+XG4gICAgICAgICAgICAgICAgICA8RmFEb3dubG9hZCBzaXplPXsxNX0gLz5cbiAgICAgICAgICAgICAgICA8L0Rvd25sb2FkTGluaz5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxIMiByaWdodD5TY2hsYWd3b3J0ZTwvSDI+XG4gICAgICAgICAgICA8VGFnQ29udGFpbmVyPlxuICAgICAgICAgICAgICB7b3JkZXJCeSh0YWdzLCBbJ2NvdW50JywgJ3RhZyddLCBbJ2Rlc2MnLCAnYXNjJ10pLm1hcCh0YWcgPT5cbiAgICAgICAgICAgICAgICA8VGFnIGtleT17dGFnLnRhZ30+XG4gICAgICAgICAgICAgICAgICB7dXBwZXJGaXJzdCh0YWcudGFnKX0gPHNtYWxsPih7dGFnLmNvdW50fSk8L3NtYWxsPlxuICAgICAgICAgICAgICAgIDwvVGFnPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9UYWdDb250YWluZXI+XG4gICAgICAgICAgPC9Db2x1bW4+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvU2NoZW1hTG9hZGVyPlxuICApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAga2V5OiAnR1pLLkNvbGxlY3Rpb25zLk1hZ2F6aW5CbG9jaycsXG4gIGxhYmVsOiAnTWFnYXppbicsXG4gIGNhdGVnb3J5OiAnQ29sbGVjdGlvbnMnLFxuICBlZGl0YWJsZTogZmFsc2UsXG4gIGNvbXBvbmVudCxcbn07XG4iXX0=
