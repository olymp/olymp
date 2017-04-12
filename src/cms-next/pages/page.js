import React, { Component, PropTypes } from 'react';
import { Link, graphql, gql, withAuth, withRouter } from 'olymp';
import { Menu, Button, Form, Input, Icon, notification } from 'antd';
import { EnvelopeO, Key } from 'olymp-icons';
import { onEnterFocus, onEnterOk, layout, onError, onSuccess } from 'olymp/ui';
import { Modal, SplitView, List, Panel } from 'olymp/ui';
import { lowerFirst } from 'lodash';
import { Gateway } from 'react-gateway';
import Edit from './edit-page';
import { Hashtax } from 'olymp/hashtax';
import { queryPage } from './gql';

export const Page = ({ item }) => (
  <Hashtax value={item.text} page={item} />
);
Page.propTypes = {
  item: PropTypes.object,
};
Page.defaultProps = {
  item: {},
};
export const PageGql = queryPage(Page);
