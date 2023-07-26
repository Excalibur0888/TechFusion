import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { gStyle } from '../../styles/style';
import GridContainers from './GridContainers';
import HeaderMenu from './HeaderMenu';

const Main = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [menuIcon, setMenuIcon] = useState('menu-outline');
	const [isScreenDimmed, setIsScreenDimmed] = useState(false);
	const menuAnimation = useState(new Animated.Value(0))[0];

	const toggleMenu = () => {
		if (isMenuOpen) {
			Animated.timing(menuAnimation, {
				toValue: 0,
				duration: 300,
				useNativeDriver: false,
			}).start(() => {
				setIsMenuOpen(false);
				setMenuIcon('menu-outline');
				setIsScreenDimmed(false);
			});
		} else {
			setIsMenuOpen(true);
			setMenuIcon('close-outline');
			setIsScreenDimmed(true);
			Animated.timing(menuAnimation, {
				toValue: 1,
				duration: 300,
				useNativeDriver: false,
			}).start();
		}
	};

	return (
		<View style={gStyle.main}>
			{isScreenDimmed && <View style={styles.screenDimmer} />}
			<View style={styles.header}>
				<TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
					<Ionicons name={menuIcon} size={50} color="white" />
				</TouchableOpacity>
				<View style={styles.titleContainer}>
				<Image
					source={require('../../assets/iconwhite.png')}
					style={styles.image}
					resizeMode="contain"
				/>
				<Text style={styles.title}>PC Master</Text>
			</View>
				<Ionicons name="search-outline" size={45} color="white" style={{ marginTop: 5 }} />
				{isMenuOpen && (
					<TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
						<Ionicons name="close-outline" size={50} color="white" />
					</TouchableOpacity>
				)}
				<HeaderMenu menuAnimation={menuAnimation} />
			</View>
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<TouchableOpacity style={styles.main_button}>
					<View style={{ marginRight: 10 }}>
						<Ionicons name="desktop-outline" size={25} color="white" />
					</View>
					<Text style={gStyle.text}>Собрать свой ПК</Text>
				</TouchableOpacity>
				<Text style={gStyle.title}>Попробуйте наши сборки</Text>
				<GridContainers />
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		zIndex: 1,
		paddingTop: 10,
	},
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	image: {
		width: 40,
		height: 40,
		marginRight: 10,
	},
	title: {
		fontFamily: 'mt-name',
		color: '#fff',
		fontSize: 25,
	},
	menuButton: {
		zIndex: 1,
	},
	closeButton: {
		position: 'absolute',
		top: 10,
		left: 0,
		zIndex: 2,
	},
	main_button: {
		backgroundColor: '#1c1c1c',
		borderRadius: 10,
		padding: 10,
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 15,
		marginTop: 10,
	},
	contentContainer: {
		paddingHorizontal: 15,
		paddingBottom: 50,
	},
	screenDimmer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
		zIndex: 1,
	},
});

export default Main;
