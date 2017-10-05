import React from 'react';
import PropTypes from 'prop-types';
import { Upload } from 'antd';
import { compose, onlyUpdateForPropTypes, setPropTypes, withPropsOnChange } from 'recompose';
import { Sidebar, List } from 'olymp-ui';
import { Image } from '../components';

/* const directories = orderBy(
      this.getDirectories(),
      ['active', 'disabled', 'countFilter', 'countAll', 'label'],
      ['desc', 'asc', 'desc', 'desc', 'asc'],
    ); */

const image = ({ image }) => <Image value={image} width={37} height={37} />;

// @withPropsOnChange(['items', 'search', 'filter'])
const enhance = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    onClose: PropTypes.func,
    setSearch: PropTypes.func,
    setTags: PropTypes.func,
    directories: PropTypes.arrayOf(PropTypes.object),
    upload: PropTypes.object,
    search: PropTypes.string,
    tags: PropTypes.array,
  }),
  withPropsOnChange(['directories'], ({ directories }) => ({
    disabled: directories.find(dir => dir.disabled),
    visibleItems: directories.filter(dir => !dir.active && !dir.disabled),
  })),
);

export default enhance(
  ({ upload, onClose, search, setSearch, setTags, tags, visibleItems, disabled }) => (
    <Sidebar
      header={<List.Filter placeholder="Filter ..." onChange={setSearch} value={search} />}
      leftButtons={onClose && <Sidebar.Button shape="circle" onClick={onClose} icon="close" />}
      rightButtons={
        <Upload {...upload}>
          <Sidebar.Button shape="circle" icon="plus" />
        </Upload>
      }
      isOpen
      padding={0}
      title="Mediathek"
      subtitle="Medien sichten und verwalten"
    >
      {disabled && (
        <List.Item label="Zurück" icon="left" onClick={() => setTags(tags.slice(0, -1))} />
      )}
      {visibleItems.map(dir => <List.Item {...dir} image={image(dir)} />)}
    </Sidebar>
  ),
);
