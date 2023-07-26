import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import { useWindowDimensions } from 'react-native';

const HeaderMenu = ({ menuAnimation }) => {
  const { height } = useWindowDimensions();

  const menuTranslateX = menuAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0],
  });

  return (
    <Animated.View
      style={[
        styles.menuContainer,
        { transform: [{ translateX: menuTranslateX }] },
        { height: height }
      ]}
    >
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '70%',
    backgroundColor: '#1c1c1c',
    zIndex: 1,
  },
});

export default HeaderMenu;