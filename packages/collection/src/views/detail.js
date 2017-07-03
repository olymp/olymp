import React, { Component } from 'react';
import { withRouter, Link } from 'olymp';
import { Menu, Icon } from 'antd';
import { ContentLoader, createComponent } from 'olymp-fela';
import { upperFirst } from 'lodash';
import { Gateway } from 'react-gateway';
import { withItem } from '../decorators';
import { DetailForm } from '../components';

const getFormSchema = ({ fields }) =>
  fields.reduce((result, field) => {
    if (field.type.name === 'Blocks') {
      // if slate => own group
      result[upperFirst(field.name)] = [field];
    } else if (field.type.name === 'Image') {
      // if image => own group
      result[upperFirst(field.name)] = [field];
    } else {
      // Group
      const group = field['@'].detail ? field['@'].detail.arg0 : 'Allgemein';

      if (!result[group]) {
        result[group] = [];
      }
      result[group].push(field);
    }
    return result;
  }, {});

const Flex = createComponent(
  ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.space3,
    '> ul': {
      zIndex: 1,
    },
    '> form': {
      overflow: 'auto',
    },
  }),
  'div',
  []
);

const RightSubMenu = createComponent(
  () => ({
    float: 'right!important',
  }),
  p => <Menu.SubMenu {...p} />,
  p => Object.keys(p)
);
const RightMenuItem = createComponent(
  () => ({
    float: 'right!important',
  }),
  p => <Menu.Item {...p} />,
  p => Object.keys(p)
);

@withRouter
@withItem
export default class CollectionDetail extends Component {
  render() {
    const { id, item, collection, onSave, pathname, query } = this.props;
    const schema = getFormSchema(collection);
    const keys = Object.keys(schema);
    const currentTab = query.tab || Object.keys(schema)[0];
    return (
      <ContentLoader isLoading={id && !item}>
        <Flex>
          <Gateway into="navigation">
            <RightSubMenu>
              <RightMenuItem key="save">
                <span onClick={onSave}>
                  <Icon type="save" /> Speichern
                </span>
              </RightMenuItem>
              {keys.map(tab =>
                (<RightMenuItem key={tab}>
                  <Link to={{ pathname, query: { ...query, tab } }}>
                    {tab}
                  </Link>
                </RightMenuItem>)
              )}
            </RightSubMenu>
          </Gateway>

          <DetailForm
            {...this.props}
            item={item || {}}
            fields={schema[currentTab]}
            onCreate={onSave}
          />
        </Flex>
      </ContentLoader>
    );
  }
}
