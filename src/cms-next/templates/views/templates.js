import React, { Component } from 'react';
import { withState } from 'olymp';
import { Container } from 'olymp/ui';
import { Hashtax } from 'olymp/hashtax';
import { SplitView } from '../../style';
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
    const { id, text, setText, item, form, deviceWidth, handleListClick, onClose } = this.props;
    const { search } = this.state;

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
          <Hashtax value={text || item.text} />
        </Container>

        <SelectionSidebar item={item} onCancel={() => handleListClick({ id: null })} setText={setText} />
      </SplitView>
    );
  }
}
export default Templates;
