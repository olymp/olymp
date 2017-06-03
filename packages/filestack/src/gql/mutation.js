import { gql, graphql } from 'olymp';
import { onError, onSuccess } from 'olymp/ui';

const transform = (image) => {
  const newImage = {
    createdById: null,
    state: !image.state ? 'PUBLISHED' : image.state,
    crop: null,
    createdAt: +new Date(),
    tags: null,
    caption: null,
    source: null,
  };

  Object.keys(image).forEach((key) => {
    switch (key) {
      case 'originalPath':
        break;

      case 'url':
        break;

      case 'source':
        break;

      case 'status':
        break;

      case 'filename':
        newImage.name = image[key];
        break;

      case 'mimetype':
        newImage.type = image[key];
        break;

      case 'size':
        newImage.bytes = image[key];
        break;

      default:
        newImage[key] = image[key];
    }
  });

  return newImage;
};

const ok = (item, mutate) => {
  mutate({
    variables: {
      id: item.id,
      input: { ...item, __typename: undefined },
    },
    updateQueries: (!item.id || item.state === 'REMOVED') ? {
      fileStackList: (prev, { mutationResult }) => ({
        ...prev,
        items: !item.id ?
          { ...prev.items, item } :
            prev.items.filter(i => i.id !== mutationResult.data.item.id),
      }),
    } : undefined,
  }).then(({ data: { item } }) => {
    if (item.state === 'REMOVED') {
      onSuccess('Gelöscht', `Datei '${item.name}' wurde gelöscht`);
    } else {
      onSuccess('Gespeichert', `Datei '${item.name}' wurde gespeichert`);
    }
  }).catch(onError);
};

export default graphql(gql`
  mutation fileStack($id: String, $input: FileStackInput) {
    item: fileStack(id: $id, input: $input) {
      id name type createdAt crop width height bytes tags caption source state createdById
    }
  }
`, {
  props: ({ ownProps, mutate }) => ({
    ...ownProps,
    save: item => ok(transform(item), mutate),
  }),
});
