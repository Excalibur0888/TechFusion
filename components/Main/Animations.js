export const handlePressIn = () => {
	Animated.spring(scaleValue, {
		toValue: 0.93,
		useNativeDriver: false,
	}).start();
};

export const handlePressOut = () => {
	Animated.spring(scaleValue, {
		toValue: 1,
		friction: 3,
		tension: 40,
		useNativeDriver: false,
	}).start();
};