import React, { Component } from 'react';
import { withRouter, Prompt } from 'olymp';
import { Button, Form, Icon } from 'antd';
import { Sidebar } from 'olymp/ui';

@withRouter
@Form.create()
export default class MediathekSidebar extends Component {
  render() {
    const { router, pathname, images, form } = this.props;

    const leftButtons = (
      <div>
        <Button.Group>
          <Button onClick={() => router.push({pathname, query: { ...query, ['@mediathek']: undefined }})}>
            <Icon type="close" />
          </Button>
        </Button.Group>
      </div>
    );
    const rightButtons = (
      <div>
        <Button.Group>
          <Button>
            <Icon type="save" />
          </Button>
        </Button.Group>
      </div>
    );

    return (
      <Sidebar
        leftButtons={leftButtons}
        rightButtons={rightButtons}
        onClose={() => router.push(pathname)}
        minWidth={300}
        padding={0}
        title="Mediathek"
        subtitle="Medien sichten und verwalten"
      >
        <Prompt when={form.isFieldsTouched()} message={location => `Änderungen verwerfen?`} />
        Hier kommt das ausgewählte Bild hin
        {/* images.map(image => image.id) */}
      </Sidebar>
    );
  }
}
