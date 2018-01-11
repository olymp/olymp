import Evernote from 'evernote';
import { parse } from 'himalaya';

const is = (line, size) =>
  line.attributes &&
  line.attributes.find(
    x => x.key === 'style' && x.value && x.indexOf(size) !== -1
  ).length > 0;

export default ({ token, sandbox, upload }) => app => {
  const client = new Evernote.Client({
    token,
    sandbox,
    china: false
  });
  const store = client.getNoteStore();

  const handleFile = async file => {
    const tags = await Promise.all(
      (file.tagGuids || []).map(x => store.getTag(x))
    );
    const resources = (await Promise.all(
      (file.resources || []).map(x =>
        upload(x.data.body, {
          name: x.guid,
          publicId: x.data.bodyHash.toString('hex'),
          tags: ['cms', file.guid, app]
        })
      )
    )).reduce(
      (current, resource) => ({
        ...current,
        [resource.id]: resource
      }),
      {}
    );

    const handleLine = line => {
      if (line.tagName === 'div') {
        console.log(line.children);
        if (line.children.length === 0) {
          return null;
        }
        return {
          type: 'div',
          kind: 'block',
          nodes: line.children.map(handleLine).filter(x => x)
        };
      } else if (line.tagName === 'en-media') {
        return {
          type: 'img',
          kind: 'block',
          data: resources[line.attributes.find(x => x.key === 'hash').value],
          nodes: []
        };
      } else if (line.tagName === 'ul') {
        return {
          type: 'ul',
          kind: 'block',
          nodes: line.children.map(handleLine).filter(x => x)
        };
      } else if (line.tagName === 'li') {
        return {
          type: 'li',
          kind: 'block',
          nodes: line.children.map(handleLine).filter(x => x)
        };
      } else if (line.tagName === 'a') {
        return {
          type: 'a',
          kind: 'block',
          nodes: line.children.map(handleLine).filter(x => x)
        };
      } else if (line.tagName === 'br') {
        return null;
      } else if (
        line.type === 'text' &&
        (is('8px') || is('10px') || is('12px'))
      ) {
        return {
          type: 'small',
          kind: 'block',
          nodes: [
            {
              kind: 'text',
              leaves: [
                {
                  kind: 'leaf',
                  text: line.content
                }
              ]
            }
          ]
        };
      } else if (
        line.type === 'text' &&
        (is('18px') || is('24px') || is('36px'))
      ) {
        return {
          type: `h${is('18px') ? 3 : is('24px') ? 2 : 1}`,
          kind: 'block',
          nodes: [
            {
              kind: 'text',
              leaves: [
                {
                  kind: 'leaf',
                  text: line.content
                }
              ]
            }
          ]
        };
      } else if (line.type === 'text') {
        return {
          kind: 'text',
          leaves: [
            {
              kind: 'leaf',
              text: line.content
            }
          ]
        };
      }
      return null;
    };

    const result = {
      rootId: file.guid,
      src: file.content,
      name: file.title,
      createdAt: new Date(file.created),
      updatedAt: new Date(file.updated),
      nodes: (parse(file.content)[1].children || [])
        .map(handleLine)
        .filter(x => x),
      tags: (tags || []).map(x => x.name)
    };

    console.log(result.name);
    console.log(JSON.stringify(result.nodes, null, 2));
    /* if (
      result.text.trim().indexOf('--') === 0 &&
      result.text.split('--').length > 1
    ) {
      const fm = result.text.split('--')[1];
      const data = yaml.load(fm);
      result.data = data;
      result.text = result.text.substr(fm.length + 4).trim();
    } */
    return result;
  };

  const getNodes = async () => {
    const result = await store.findNotesMetadata(
      {
        words: `tag:${app}`
      },
      0,
      100,
      {
        includeTitle: true
      }
    );
    const ids = result.notes.map(x => x.guid);
    return Promise.all(
      ids.map(x => store.getNote(x, true, true, false, false).then(handleFile))
    );
  };

  return getNodes();
};
