import React, { useState } from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
	const navigation = useNavigation();

	const [activeMenu, setActiveMenu] = useState('Main');

	const MenuButton = ({ onPress, children, isActive }) => {
		const iconColor = isActive ? 'white' : 'gray';
		const textColor = isActive ? 'white' : 'gray';

		return (
			<TouchableHighlight style={styles.menuButton} onPress={onPress}>
				<View style={styles.menuButtonContent}>
					<Ionicons name={children.iconName} size={36} color={iconColor} />
					<Text style={[styles.menuButtonText, { color: textColor }]}>
						{children.text}
					</Text>
				</View>
			</TouchableHighlight>
		);
	};

	return (
		<View style={styles.menu}>
			<View style={styles.menuBackground} />

			<MenuButton
				onPress={() => {
					navigation.navigate('Main');
					setActiveMenu('Main');
				}}
				isActive={activeMenu === 'Main'}
			>
				{{ iconName: 'home-outline', text: 'Главная' }}
			</MenuButton>
			<MenuButton
				onPress={() => {
					navigation.navigate('Catalog');
					setActiveMenu('Catalog');
				}}
				isActive={activeMenu === 'Catalog'}
			>
				{{ iconName: 'desktop-outline', text: 'Каталог' }}
			</MenuButton>
			<MenuButton
				onPress={() => {
					navigation.navigate('Favourite');
					setActiveMenu('Favourite');
				}}
				isActive={activeMenu === 'Favourite'}
			>
				{{ iconName: 'heart-outline', text: 'Избранное' }}
			</MenuButton>
			<MenuButton
				onPress={() => {
					navigation.navigate('Assembly');
					setActiveMenu('Assembly');
				}}
				isActive={activeMenu === 'Assembly'}
			>
				{{ iconName: 'person-outline', text: 'Мои сборки' }}
			</MenuButton>
		</View>
	);
};

const styles = StyleSheet.create({
	menu: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'row',
		flex: 1,
	},
	menuBackground: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: '#111112',
	},
	menuButton: {
		flex: 1,
		paddingHorizontal: 'auto',
		borderTopWidth: 1,
		borderColor: 'gray',
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
	},
	menuButtonContent: {
		flexDirection: 'column',
		alignItems: 'center',
	},
	menuButtonText: {
		color: 'gray',
		fontSize: 12,
	},
});

export default Menu;
