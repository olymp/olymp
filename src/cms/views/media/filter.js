// let filteredItems = items;

    // Auflösungs-Filter
    /* const solutionString = solution && solution.length ? solution[0] : undefined;
    switch (solutionString) {
      case 'Hohe Auflösung':
        filteredItems = items.filter(item => item.height * item.width > 500000);
        break;

      case 'Niedrige Auflösung':
        filteredItems = items.filter(item => item.height * item.width <= 500000);
        break;

      default:
        filteredItems = items;
    }

    // Quellen-Filter
    if (source && source.length) {
      filteredItems = filteredItems.filter(item => item.source === source[0] || (!item.source && source[0] === 'Keine Quelle'));
    }

    // Type-Filter
    if (type && type.length) {
      filteredItems = filteredItems.filter(item => item.format === type[0] || type[0] === 'Andere');
    }
    */

    // Sortierung
    // let sortByKey = sortByState && sortByState.length ? sortByState[0] : undefined;
    /* switch (sortByKey) {
      case 'Name':
        sortByKey = 'label';
        break;

      case 'Auflösung':
        sortByKey = item => item.height * item.width;
        break;

      case 'Höhe':
        sortByKey = item => item.height;
        break;

      case 'Breite':
        sortByKey = item => item.width;
        break;

      case 'Hinzugefügt':
        sortByKey = item => item.createdAt;
        break;

      default:
        sortByKey = 'label';
    }
    sortByKey = [sortByKey]; */

    // Bisher gefilterte Ergebnisse zwischenspiechern für "Alle-Ansicht"
    // (dort kann man nicht nach tags filtern, aber nach dem Rest)
    // const preFilteredItems = filteredItems;

    // Auflösungen/Quellen zusammensuchen
    /* const solutions = {};
    const sources = {};
    const types = {};
    const getOtherFilters = (tree) => {
      (tree.images || []).forEach(item => {
        const solution = item.width * item.height < 500000 ? 'Niedrige Auflösung' : 'Hohe Auflösung';
        if (!solutions[solution]) {
          solutions[solution] = 0;
        }
        solutions[solution] += 1;

        const source = item.source || 'Keine Quelle';
        if (!sources[source]) {
          sources[source] = 0;
        }
        sources[source] += 1;

        const type = item.format || 'Andere';
        if (!types[type]) {
          types[type] = 0;
        }
        types[type] += 1;
      });

      (tree.children || []).forEach(item => getOtherFilters(item));
    };
    getOtherFilters(currentNode); */

/* <Affix>
          <Menu
            selectedKeys={['0']}
            mode="horizontal"
            theme="dark"
            className="olymp-submenu"
          >
            <Menu theme="dark">
              <Menu.Item key="tags">
                <Cascader
                  options={sortBy(tree.children, 'label')}
                  defaultValue={tags}
                  value={tags}
                  changeOnSelect
                  onChange={onTagsFilterChange}
                >
                  <span>{tags && tags.length ? tags.join(' > ') : 'Tags'}</span>
                </Cascader>
                {tags && tags.length ? <i className="anticon anticon-cross-circle" style={{ paddingLeft: '5px' }} onClick={() => onTagsFilterChange()} /> : undefined}
              </Menu.Item>

              <Menu.Item key="solution">
                <Cascader
                  options={[
                    ...Object.keys(solutions).map(key => ({
                      value: key,
                      label: `${key} (${solutions[key]})`,
                    })),
                  ]}
                  defaultValue={solution}
                  value={solution}
                  onChange={onSolutionFilterChange}
                >
                  <span>{solution && solution.length ? solution[0] : 'Auflösung'}</span>
                </Cascader>
                {solution && solution.length ? <i className="anticon anticon-cross-circle" style={{ paddingLeft: '5px' }} onClick={() => onSolutionFilterChange([])} /> : undefined}
              </Menu.Item>

              <Menu.Item key="source">
                <Cascader
                  options={[
                    ...Object.keys(sources).map(key => ({
                      value: key,
                      label: `${key} (${sources[key]})`,
                    })),
                  ]}
                  defaultValue={source}
                  value={source}
                  onChange={onSourceFilterChange}
                >
                  <span>{source && source.length ? source[0] : 'Quelle'}</span>
                </Cascader>
                {source && source.length ? <i className="anticon anticon-cross-circle" style={{ paddingLeft: '5px' }} onClick={() => onSourceFilterChange([])} /> : undefined}
              </Menu.Item>

              <Menu.Item key="type">
                <Cascader
                  options={[
                    ...Object.keys(types).map(key => ({
                      value: key,
                      label: `${key} (${types[key]})`,
                    })),
                  ]}
                  defaultValue={type}
                  value={type}
                  onChange={onTypeFilterChange}
                >
                  <span>{type && type.length ? type[0] : 'Typ'}</span>
                </Cascader>
                {type && type.length ? <i className="anticon anticon-cross-circle" style={{ paddingLeft: '5px' }} onClick={() => onTypeFilterChange([])} /> : undefined}
              </Menu.Item>

              <Menu.Item key="sortBy" style={{ float: 'right' }}>
                <Cascader
                  options={[
                    {
                      value: 'Name',
                      label: 'Name',
                    },
                    {
                      value: 'Hinzugefügt',
                      label: 'Hinzugefügt',
                    },
                    {
                      value: 'Auflösung',
                      label: 'Auflösung',
                    },
                    {
                      value: 'Höhe',
                      label: 'Höhe',
                    },
                    {
                      value: 'Breite',
                      label: 'Breite',
                    },
                  ]}
                  onChange={onSortByChange}
                >
                  <span>{sortByState && sortByState.length ? sortByState[0] : 'Name'}</span>
                </Cascader>
              </Menu.Item>
              <Menu.Item key="add" style={{ float: 'right' }}>
                {uploadLink && uploadLink(
                  <span><Icon type="plus" />Hinzufügen</span>
                )}
              </Menu.Item>
            </Menu>
          </Menu>
        </Affix> */