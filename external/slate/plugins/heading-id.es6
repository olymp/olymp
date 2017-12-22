import ShortID from 'shortid';
/**
 * Slate plugin to ensure a trailing block.
 * @param {Object} [opts] Options for the plugin
 * @param {String|Function} [opts.match='paragraph'] Match last block
 * @param {String} [opts.type] The type of the trailing block to insert
 * @return {Object}
 */

function HeadingId(opts) {
  opts = opts || {};
  opts.match = opts.match || (node => node.type === opts.type);

  return {
    validateNode: node => {
      if (!node.type || node.type.indexOf('heading-') !== 0) {
        return undefined;
      }

      if (node.data.get('id')) {
        return undefined;
      }

      return change =>
        change.setNodeByKey(node.key, {
          data: node.data.set('id', ShortID.generate()),
        });
    },
  };
}

export default HeadingId;
