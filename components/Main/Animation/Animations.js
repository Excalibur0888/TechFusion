import { Animated } from 'react-native';

export const handlePressIn = (scaleValue) => {
	Animated.spring(scaleValue, {
		toValue: 0.95,
		useNativeDriver: false,
	}).start();
};

export const handlePressOut = (scaleValue) => {
	Animated.spring(scaleValue, {
		toValue: 1,
		friction: 3,
		tension: 40,
		useNativeDriver: false,
	}).start();
};