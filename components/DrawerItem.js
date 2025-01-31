import React from 'react';
import { StyleSheet } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import Icon from './Icon';
import nowTheme from '../constants/Theme';

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case 'Home':
        return <Icon name="app2x" family="NowExtra" size={14} color={focused ? nowTheme.COLORS.PRIMARY : 'white'} />;
      case 'Elements':
        return <Icon name="atom2x" family="NowExtra" size={14} color={focused ? nowTheme.COLORS.PRIMARY : 'white'} />;
      case 'Articles':
        return <Icon name="paper" family="NowExtra" size={14} color={focused ? nowTheme.COLORS.PRIMARY : 'white'} />;
      case 'Profile':
        return <Icon name="profile-circle" family="NowExtra" size={14} color={focused ? nowTheme.COLORS.PRIMARY : 'white'} />;
      case 'Account':
        return <Icon name="badge2x" family="NowExtra" size={14} color={focused ? nowTheme.COLORS.PRIMARY : 'white'} />;
      case 'Examples':
        return (
          <Icon
            name="album"
            family="NowExtra"
            size={14}
            color={focused ? nowTheme.COLORS.PRIMARY : 'white'}
          />
        );
      case 'Getting Started':
        return (
          <Icon
            name="spaceship2x"
            family="NowExtra"
            size={14}
            style={{ borderColor: 'rgba(0,0,0,0.5)' }}
            color={focused ? nowTheme.COLORS.PRIMARY : 'white'}
          />
        );
      case 'LOGOUT':
        return (
          <Icon
            name="share"
            family="NowExtra"
            size={14}
            style={{ borderColor: 'rgba(0,0,0,0.5)' }}
            color={focused ? nowTheme.COLORS.PRIMARY : 'white'}
          />
        );
      default:
        return null;
    }
  };

  render() {
    const { focused, title } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
      <Block flex row style={containerStyles}>
        <Block middle flex={0.1} style={{ marginRight: 5 }}>
          {this.renderIcon()}
        </Block>
        <Block row center flex={0.9}>
          <Text
            style={{ fontFamily: 'montserrat-regular' }}
            size={15}
            bold={focused ? true : false}
            color={focused ? nowTheme.COLORS.PRIMARY : 'white'}
          >
            {title}
          </Text>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 15,
    paddingHorizontal: 14,
    color: 'white'
  },
  activeStyle: {
    backgroundColor: nowTheme.COLORS.WHITE,
    borderRadius: 30,
    color: 'white'
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;
