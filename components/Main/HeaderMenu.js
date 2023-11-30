import React from 'react';
import { StyleSheet, Animated, Linking, View, TouchableOpacity, Text, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { gStyle } from '../../styles/style';

const HeaderMenu = ({ menuAnimation }) => {
	const { height } = useWindowDimensions();

	const menuTranslateX = menuAnimation.interpolate({
		inputRange: [0, 1],
		outputRange: [-320, 0],
	});

	const handleVisitWebsite = () => {
		const websiteUrl = 'https://tech-fusion-site.vercel.app/';
		Linking.openURL(websiteUrl)
			.catch((error) => console.error('An error occurred:', error));
	};

	return (
		<Animated.View
			style={[
				styles.menuContainer,
				{ transform: [{ translateX: menuTranslateX }] },
				{ height: height * 1.9 }
			]}
		>
			<View style={styles.headContainer}>
				<TouchableOpacity style={styles.faq}>
					<Ionicons name='help-circle-outline' size={44} color="white" />
				</TouchableOpacity>
			</View>
			<View style={styles.mainContainer}>
				<TouchableOpacity style={styles.container} onPress={handleVisitWebsite}>
					<Ionicons name='globe-outline' size={40} color="white" style={{marginHorizontal: 7}}/>
					<Text style={gStyle.text}>Посетите наш сайт</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.container}>
					<Ionicons name='notifications-outline' size={40} color="white" style={{marginHorizontal: 7}}/>
					<Text style={gStyle.text}>Уведомления</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.container}>
					<Ionicons name='contrast-outline' size={40} color="white" style={{marginHorizontal: 7}}/>
					<Text style={gStyle.text}>Сменить тему</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.container}>
					<Ionicons name='star-outline' size={40} color="white" style={{marginHorizontal: 7}}/>
					<Text style={gStyle.text}>Оценить</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.container}>
					<Ionicons name='language-outline' size={40} color="white" style={{marginHorizontal: 7}}/>
					<Text style={gStyle.text}>Язык</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.container}>
					<Ionicons name='chatbubbles-outline' size={40} color="white" style={{marginHorizontal: 7}}/>
					<Text style={gStyle.text}>Обратиться в поддержку</Text>
				</TouchableOpacity>
			</View>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	menuContainer: {
		display: 'flex',
		flexDirection: 'column',
		position: 'absolute',
		width: '80%',
		top: 0,
		backgroundColor: '#1c1c1c',
	},
	faq: {
		display: 'flex',
		flexDirection: 'row',
		padding: 3,
		justifyContent: 'flex-end',
	},
	headContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		padding: 10,
	},
	mainContainer: {
		width: '100%',
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 20,
		paddingVertical: 10,
	},
	buttonText: {
		color: '#fff',
		fontSize: 15,
		textAlign: 'center',
	},
});

export default HeaderMenu;
