import React, {useState} from "react";
import { StyleSheet, View, TouchableOpacity, Image, Animated, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import HeaderMenu from "../Main/HeaderMenu";

const Header = ({setIsScreenDimmed}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [menuIcon, setMenuIcon] = useState('menu-outline');
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
		<View style={styles.header}>
		<TouchableOpacity onPress={toggleMenu}>
			<Ionicons name={menuIcon} size={50} color="white" />
		</TouchableOpacity>
		<View style={styles.titleContainer}>
			<Image
				source={require('../../assets/icon.png')}
				style={styles.titleimage}
				resizeMode="contain"
			/>
			<Text style={styles.title}>TechFusion</Text>
		</View>
		<TouchableOpacity>
			<Ionicons name="search-outline" size={45} color="white" />
		</TouchableOpacity>
		{isMenuOpen && (
			<TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
				<Ionicons name="close-outline" size={50} color="white" />
			</TouchableOpacity>
		)}
					{isMenuOpen && (
		<HeaderMenu menuAnimation={menuAnimation} />
	)}
	</View>
	)
}

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		zIndex: 3,
		paddingTop: 10,
	},
	titleContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	titleimage: {
		width: 40,
		height: 50,
		marginRight: 10,
	},
	title: {
		fontFamily: 'mt-name',
		color: '#fff',
		fontSize: 25,
	},
	closeButton: {
		position: 'absolute',
		top: 10,
		left: 0,
		zIndex: 2,
	},
})

export default Header;