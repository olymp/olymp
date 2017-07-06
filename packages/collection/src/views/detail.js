import React, { Component } from 'react';
import { withRouter, Link } from 'olymp';
import { Menu, Icon, Button } from 'antd';
import { ContentLoader, createComponent } from 'olymp-fela';
import { upperFirst } from 'lodash';
import { Gateway } from 'react-gateway';
import { withItem } from '../decorators';
import { DetailForm } from '../components';

const getFormSchema = ({ fields }) =>
  fields.reduce((result, field) => {
    const label = !!field['@'] && !!field['@'].label && field['@'].label.arg0;

    if (field.type.name === 'Blocks') {
      // if slate => own group
      result[label || upperFirst(field.name)] = [field];
    } else if (field.type.name === 'Image') {
      // if image => own group
      result[label || upperFirst(field.name)] = [field];
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
    paddingX: theme.space3,
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

@withRouter
@withItem
export default class CollectionDetail extends Component {
  state = { tab: null };
  render() {
    const { id, item, collection, onSave, pathname, query } = this.props;
    const schema = getFormSchema(collection);
    const keys = Object.keys(schema);
    const currentTab = this.state.tab || Object.keys(schema)[0];

    return (
      <ContentLoader isLoading={id && !item}>
        <Flex>
          <Gateway into="navigation">
            <Menu.Item key="save">
              <a href="javascript:;" onClick={onSave}>
                <Button type="primary" style={{ margin: '0 -15px' }}>
                  <Icon type="save" /> Speichern
                </Button>
              </a>
            </Menu.Item>
            {keys.map(tab =>
              (<Menu.Item key={tab}>
                <a onClick={() => this.setState({ tab })}>
                  {tab}
                </a>
              </Menu.Item>)
            )}
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
