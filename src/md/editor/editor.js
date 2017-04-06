import Slate from 'slate/lib/components/editor';
import createSuggestPlugin from './plugin-suggest';
import createTrailingBlock from './plugin-trailing-block';

export class SlateEditor extends Component {
  fetch(value) {
    if (!this.props.suggestions) return Promise.resolve([]);
    return new Promise(yay => {
      yay(this.props.suggestions.filter(x => x.key.toLowerCase().indexOf(value.toLowerCase()) !== -1));
    });
  }
  constructor(props) {
    super(props);
    this.plugins = [
      createTrailingBlock({ type: 'paragraph' }),
      createSuggestPlugin({
        trigger: '+',
        groupBy: i => i.key.split('-')[0],
        fetch: this.fetch
      })
    ];
  }
  render() {
    return (
      <Slate plugins={this.plugins} {...this.props} />
    )
  }
}
