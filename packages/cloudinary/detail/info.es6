import React from 'react';
import { Form, Input } from 'antd';
import { format } from 'date-fns';
import { CollapsePanel } from './utils';

const FormForFullLayout = {
  wrapperCol: { span: 24, offset: 0 },
  style: { marginBottom: 4 },
};

export default (item, app) => (
  <CollapsePanel header="Meta-Daten" key="2">
    <Form.Item key="project" label="Projekt" {...FormForFullLayout}>
      <Input disabled placeholder="Projekt" value={app} />
    </Form.Item>
    <Form.Item key="size" label="Größe" {...FormForFullLayout}>
      <Input
        disabled
        placeholder="Größe"
        value={`${item.width}x${item.height}`}
      />
    </Form.Item>
    <Form.Item key="date" label="Hinzugefügt" {...FormForFullLayout}>
      <Input
        disabled
        placeholder="Hinzugefügt"
        value={`${format(item.createdAt, 'DD. MMMM YYYY, HH:mm:ss')} Uhr`}
      />
    </Form.Item>
    <Form.Item key="format" label="Format" {...FormForFullLayout}>
      <Input disabled placeholder="Format" value={item.format} />
    </Form.Item>
    {item.format === 'pdf' ? (
      <Form.Item key="pages" label="Seiten" {...FormForFullLayout}>
        <Input disabled placeholder="Seiten" value={item.pages} />
      </Form.Item>
    ) : (
      undefined
    )}
    <Form.Item key="bytes" label="Dateigröße" {...FormForFullLayout}>
      <Input
        disabled
        placeholder="Dateigröße"
        value={`${item.bytes / 1000} kB`}
      />
    </Form.Item>
  </CollapsePanel>
);
