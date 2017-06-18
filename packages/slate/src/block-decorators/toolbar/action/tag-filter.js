import React from 'react';
import orderBy from 'lodash/orderBy';
import intersection from 'lodash/intersection';

const INCLUDED_TAGS = 'incl-tags';
const EXCLUDED_TAGS = 'excl-tags';

export default fn => Block => props => {
  const { children, getData, setData, data, actions = [] } = props;

  const items = (!!data && !data.loading && fn(data)) || [];

  const includedTags = getData(INCLUDED_TAGS, ['Alle']);
  const excludedTags = getData(EXCLUDED_TAGS, []);

  const tagObj = { Alle: items.length, Ohne: 0 };
  items.forEach(item => {
    if (item.tags && item.tags.length) {
      (item.tags || []).forEach(tag => {
        if (!tagObj[tag]) tagObj[tag] = 0;

        tagObj[tag] += 1;
      });
    } else {
      tagObj.Ohne += 1;
    }
  });
  const tags = orderBy(
    Object.keys(tagObj).map(key => ({ key, count: tagObj[key] })),
    ['key', 'count'],
    ['asc', 'desc']
  );

  let filteredItems = items.filter(
    item =>
      includedTags.includes('Alle') ||
      (item.tags &&
        item.tags.length &&
        includedTags.length &&
        intersection(item.tags, includedTags.filter(tag => tag !== 'Ohne'))
          .length) ||
      ((!item.tags || !item.tags.length) && includedTags.includes('Ohne'))
  );
  if (excludedTags.length) {
    filteredItems = filteredItems.filter(
      item =>
        ((excludedTags.includes('Ohne') && item.tags && item.tags.length) ||
          !excludedTags.includes('Ohne')) &&
        !intersection(item.tags, excludedTags.filter(tag => tag !== 'Ohne'))
          .length
    );
  }

  return (
    <Block
      {...props}
      actions={[
        {
          type: 'filterTags',
          icon: 'tags',

          options: tags.map(({ key, count }) => ({
            value: key,
            label: key,
            active: includedTags.includes(key),
            disabled:
              excludedTags.includes(key) ||
                (key !== 'Alle' && includedTags.includes('Alle')) ||
                (key === 'Alle' &&
                  includedTags.length &&
                  !includedTags.includes('Alle')),
            anzahl: count,
          })),

          exceptions: tags
            .filter(tag => tag.key !== 'Alle')
            .map(({ key, count }) => ({
              value: key,
              label: key,
              active: excludedTags.includes(key),
              disabled:
                !includedTags.includes('Alle') &&
                  (includedTags.includes(key) || key === 'Ohne'),
              anzahl: count,
            })),

          toggle: tagSelection => {
            if (tagSelection) {
              if (tagSelection.include && tagSelection.exclude) {
                setData({
                  [INCLUDED_TAGS]: tagSelection.include.map(tag => tag.key),
                  [EXCLUDED_TAGS]: tagSelection.exclude.map(tag => tag.key),
                });
              } else if (tagSelection.include) {
                setData({
                  [INCLUDED_TAGS]: tagSelection.include.map(tag => tag.key),
                });
              } else if (tagSelection.exclude) {
                setData({
                  [EXCLUDED_TAGS]: tagSelection.exclude.map(tag => tag.key),
                });
              }
            }
          },

          label: 'Inhalte nach Tags filtern',
        },
        ...actions,
      ]}
      filteredData={filteredItems}
    >
      {children}
    </Block>
  );
};
