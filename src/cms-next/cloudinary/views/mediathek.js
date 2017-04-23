import React, { Component, PropTypes } from 'react';
import { Button, Icon } from 'antd';
import { styled } from 'olymp';
import { Sidebar } from 'olymp/ui';
import { Gateway } from 'react-gateway';
import { queryMedias } from '../gql';
import { Splitview } from '../../pages/styled';
import Image from '../image';
import List from '../list';
import Detail from '../detail';

const ThumbsContainer = styled(({ theme }) => ({
  margin: '1rem',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  alignContent: 'space-around',
  alignItems: 'baseline',
}), 'div', p => p);

const Thumb = styled(({ theme, isActive }) => ({
  margin: '.25rem 0',
  border: isActive ? `2px solid ${theme.color}` : 'none',
  transform: isActive ? 'scale(1.1)' : 'none',
  zIndex: isActive ? 2 : 1,
  cursor: 'pointer',
  position: 'relative',
  boxShadow: '0px 0px 12px 0px rgba(0,0,0,0.75)',
  ':hover': {
    transform: 'scale(1.1)',
    transition: 'all .15s ease-in-out',
    zIndex: 3,
  }
}), 'div', ({ isActive, ...p }) => p);

const ImageLabel = styled(({ theme }) => ({
  opacity: .75,
  position: "absolute",
  top: '50%',
  left: '50%',
  transform: "translate(-50%, -50%)",
  backgroundColor: theme.color,
  color: "#FFF",
  borderRadius: "50%",
  textAlign: "center",
  fontSize: 17,
  paddingTop: 3,
  paddingLeft: 1,
  width: 25,
  height: 25,
  lineHeight: 1.25,
  boxShadow: "0px 0px 12px 0px rgba(0,0,0,0.75)",
  ':hover': {
    opacity: 1,
  }
}), 'div', p => p);

const Line = styled(({ theme }) => ({
  marginBottom: 0,
}), 'hr', p => p);

class Mediathek extends Component {
  state = {
    isOpen: true,
    selection: 0,
  };

  render() {
    const { selected, onSelect, onClose, deviceWidth, items } = this.props;
    const { isOpen, selection } = this.state;

    return (
      <Splitview deviceWidth={deviceWidth}>
        <Sidebar
          leftButtons={
            <Button type="primary" shape="circle" onClick={() => onClose(this)}>
              <Icon type="close" />
            </Button>
          }
          rightButtons={
            <Button type="primary" shape="circle">
              <Icon type="upload" />
            </Button>
          }
          isOpen={isOpen}
          minWidth={400}
          padding={0}
          title="Mediathek"
          subtitle="Medien sichten und verwalten"
        >
          Hier kommen die Ordner hin
        </Sidebar>

        <List
          onSelect={onSelect}
          selected={selected}
          items={items}
          activeItem={selected[selection]}
        />

        {items && selected && selected.length ? (
          <Sidebar
            leftButtons={
              <Button
                type="primary"
                shape="circle"
                onClick={() => this.setState({ selection: selection + 1 < selected.length ? selection + 1 : 0})}
              >
                <Icon type="left" />
              </Button>
            }
            rightButtons={
              <Button
                type="primary"
                shape="circle"
                onClick={() => this.setState({ selection: selection ? selection - 1 : selected.length - 1})}
              >
                <Icon type="right" />
              </Button>
            }
            footer={
              <div>
                <Button onClick={() => {}} type="primary">Speichern</Button>
                <Button onClick={() => {}}>Abbrechen</Button>
              </div>
            }
            isOpen
            title="Bearbeiten"
            width={350}
            minWidth={350}
            maxWidth={350}
            padding={0}
          >
            {selected.length > 1 ? (
              <ThumbsContainer>
                {selected.map((mediaId, index) => {
                  const media = items.find(item => item.id === mediaId);
                  return media ? (
                    <Thumb
                      isActive={selected[selection] === mediaId}
                      onClick={() => this.setState({ selection: index })}
                      key={mediaId}
                    >
                      <Image
                        src={media}
                        width={70}
                        height={70}
                        crop="fit"
                      />
                      <ImageLabel onClick={() => onSelect(mediaId)}>
                        <Icon type="close" />
                      </ImageLabel>
                    </Thumb>
                  ) : null;
                })}
              </ThumbsContainer>
            ) : null}

            {selected.length > 1 ? <Line /> : null}

            <Detail
              item={items.find(item => item.id === selected[selection])}
              key={selection}
            />
          </Sidebar>
        ) : null}
      </Splitview>
    );
  }
};
Mediathek.propTypes = {
  onClose: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.arrayOf(PropTypes.string),
};
Mediathek.defaultProps = {
  onClose: x => x.setState({ isOpen: false }),
  onSelect: selectionId => console.log(selectionId),
  selected: [],
};
export default queryMedias(Mediathek);
