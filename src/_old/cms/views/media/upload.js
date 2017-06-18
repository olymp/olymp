import React, { Component } from 'react';
import { graphql, withApollo } from 'react-apollo';
import { fieldNames } from '../../decorators/file';
import gql from 'graphql-tag';
import { Modal, Upload } from 'antd';
const modalSettings = {
  visible: true,
  style: { top: 20 },
  okText: 'Speichern',
  cancelText: 'Abbruch',
};
const Dragger = Upload.Dragger;

@withApollo
@graphql(
  gql`query cloudinaryRequest { cloudinaryRequest { apiKey, url, signature, timestamp } }`,
  {
    forceFetch: true,
  }
)
@graphql(
  gql`mutation cloudinaryRequestDone($id: String, $token: String) { cloudinaryRequestDone(id: $id, token: $token) { ${fieldNames} } }`,
  {
    props({ ownProps, mutate }) {
      return {
        done({ id, token }) {
          return mutate({
            variables: { id, token },
            updateQueries: {
              fileList: (prev, { mutationResult }) => {
                const newData = mutationResult.data.cloudinaryRequestDone;
                return {
                  items: [...prev.items, newData],
                };
              },
            },
          });
        },
      };
    },
  }
)
export default class UploadModal extends Component {
  state = {};
  getUploadPops = () =>
    !this.props.data.cloudinaryRequest
      ? {}
      : {
          showUploadList: true,
          data: {
            api_key: this.props.data.cloudinaryRequest.apiKey,
            signature: this.props.data.cloudinaryRequest.signature,
            timestamp: this.props.data.cloudinaryRequest.timestamp,
          },
          action: this.props.data.cloudinaryRequest.url,
          onChange: info => {
            if (info.file.status === 'uploading') {
              this.setState({ uploading: true });
            } else if (info.file.status === 'done') {
              const file = info.file.response;
              file.id = file.public_id;
              this.props
                .done({
                  id: file.id,
                  token: this.props.data.cloudinaryRequest.signature,
                })
                .then(() => {
                  if (this.props.onSave) this.props.onSave(file);
                  else this.setState({ uploading: false });
                });
            } else if (info.file.status === 'error') {
              console.log('error');
            }
          },
        };

  handleCancel = () => {
    this.props.onClose();
  };

  handleCreate = () => {
    const { save, onClose } = this.props;
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) return;
      save(values, { commit: false }).then(onClose);
    });
  };

  render() {
    const { onClose, modal } = this.props;
    const { uploading } = this.state;
    const inner = (
      <Dragger {...this.getUploadPops()}>
        <p className="ant-upload-drag-icon">
          <i className="fa fa-inbox fa-5x" />
        </p>
        {uploading === undefined
          ? <p className="ant-upload-text">Klicken oder Datei hierher ziehen</p>
          : null}
        {uploading === true
          ? <p className="ant-upload-text">Bitte warten ...</p>
          : null}
        {uploading === false
          ? <p className="ant-upload-text">Fertig!</p>
          : null}
        {/* <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>*/}
      </Dragger>
    );
    return modal
      ? <Modal
          {...modalSettings}
          title="Upload"
          onCancel={onClose}
          onOk={onClose}
          footer={[]}
        >
          {inner}
        </Modal>
      : inner;
  }
}
