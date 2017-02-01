import React, { Component } from 'react';
import orderBy from 'lodash/orderBy';
import useBlockBase from '../../base';

const INCLUDED_TAGS = 'incl-tags';
const EXCLUDED_TAGS = 'excl-tags';

export default fn => (Block) => {
  @useBlockBase()
  class ToolbarTagFilter extends Component {
    render() {
      const { children, getData, setData, data, actions = [] } = this.props;

      const items = data && !data.loading ? fn(data) : [];
      const selectedTags = getData('tags', ['Alle', 'Ohne']);
      const tagObj = { Alle: items.length, Ohne: 0 };
      items.forEach((item) => {
        if (item.tags && item.tags.length) {
          (item.tags || []).forEach((tag) => {
            if (!tagObj[tag]) tagObj[tag] = 0;

            tagObj[tag] += 1;
          });
        } else {
          tagObj.Ohne += 1;
        }
      });
      const tags = orderBy(
        Object.keys(tagObj).map(key => ({ key, count: tagObj[key] })), ['key', 'count'], ['asc', 'desc']
      );

      return (
        <Block
          {...this.props}
          actions={[
            {
              type: 'filterTags',
              icon: 'tags',
              multi: true,
              excluding: true,
              options: tags.map(({ key, count }) => ({
                value: key,
                label: key,
                active: selectedTags.findIndex(tag => tag === key) !== -1,
                disabled: (key !== 'Alle' && selectedTags.findIndex(tag => tag === 'Alle') !== -1) ||
                  (key === 'Alle' && selectedTags.length && selectedTags.findIndex(tag => tag === 'Alle') === -1),
                anzahl: count,
              })),
              toggle: (tagSelection) => {
                console.log(tagSelection);
                // setData({ tags: (tags || []).map(tag => tag.key) });
                setData({ tags: (tags || []).map(tag => tag.key) });
              },
            },
            ...actions
          ]}
        >
          {children}
        </Block>
      );
    }
  }

  return ToolbarTagFilter;
};
