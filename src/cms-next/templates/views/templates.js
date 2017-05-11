import React, { Component } from 'react';
import { withState } from 'olymp';
import { Container, Placeholder, SplitView } from 'olymp/ui';
import { Hashtax } from 'olymp/hashtax';
import { queryTemplate } from '../gql';
import ListSidebar from './list';
import SelectionSidebar from './selection';

@withState('text')
@queryTemplate
class Templates extends Component {
  state = {
    search: undefined,
  };

  render() {
    const { id, setText, item, form, deviceWidth, handleListClick, onClose } = this.props;
    const { search } = this.state;
    const text = this.props.text || item.text;

    return (
      <SplitView deviceWidth={deviceWidth}>
        <ListSidebar
          id={id}
          onClick={handleListClick}
          onClose={onClose}
          search={search}
          onSearch={search => this.setState({ search })}
        />

        <Container>
          {text ? <Hashtax value={text} /> : <Placeholder>Vorschau</Placeholder>}
        </Container>

        <SelectionSidebar item={item} onCancel={() => handleListClick({ id: null })} setText={setText} />
      </SplitView>
    );
  }
}
export default Templates;
