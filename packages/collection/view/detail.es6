import React from 'react';
import { compose } from 'recompose';
import { ContentLoader } from 'olymp-fela';
import { connect } from 'react-redux';
import { Form } from 'antd';
import withItem from '../decorators/with-item';
import DetailForm from '../form';

const enhance = compose(
  Form.create(),
  withItem,
  connect(({ location }) => ({
    activeField: location.query.field,
  })),
);

const CollectionDetail = enhance(({ id, item, onSave, onClone, ...rest }) => (
  <ContentLoader isLoading={id && !item}>
    <DetailForm
      {...rest}
      id={id}
      item={item || {}}
      onSave={onSave}
      onCreate={onSave}
    />
  </ContentLoader>
));

CollectionDetail.displayName = 'CollectionDetail';
export default CollectionDetail;
