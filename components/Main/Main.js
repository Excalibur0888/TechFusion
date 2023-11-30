import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Animated, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { gStyle } from '../../styles/style';
import { useNavigation } from "@react-navigation/native";
import GridContainers from './GridContainers'
import Categories from './Categories';
import Header from '../Header/Header';
import { handlePressIn, handlePressOut } from './Animation/Animations';

const Main = () => {
	const [isScreenDimmed, setIsScreenDimmed] = useState(false);
	const navigation = useNavigation();
	const handlePlusButtonPress = () => {
		navigation.navigate("PlusStackScreen");
	};
	const scaleValue = useRef(new Animated.Value(1)).current;
	return (
		<View style={gStyle.main}>
			{isScreenDimmed && <View style={styles.screenDimmer} />}
			<Header setIsScreenDimmed={setIsScreenDimmed}/>
			<ScrollView contentContainerStyle={styles.contentContainer}>
			<TouchableWithoutFeedback onPressIn={() => handlePressIn(scaleValue)} onPressOut={() => handlePressOut(scaleValue)} onPress={handlePlusButtonPress}>
				<Animated.View style={[
					styles.main_button,
					{
						transform: [{ scale: scaleValue }],
					},
					]}>
					<View style={{ marginRight: 10 }}>
						<Ionicons name="desktop-outline" size={25} color="white" />
					</View>
					<Text style={gStyle.text}>Собрать свой ПК</Text>
				</Animated.View>
			</TouchableWithoutFeedback>
				<Text style={gStyle.title}>Комплектующие для ПК</Text>
				<Categories />
				<Text style={gStyle.title}>Попробуйте наши сборки</Text>
				<GridContainers />
			</ScrollView>
			<TouchableOpacity onPress={handlePlusButtonPress} style={styles.plusButton}>
				<Ionicons name="add-outline" size={45} color="white" />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	plusButton: {
		position: 'absolute',
		backgroundColor: '#05f',
		borderRadius: 100,
		borderWidth: 1,
		bottom: 70,
		right: 10,
		padding: 10,
		zIndex: 1,
	},
	main_button: {
		backgroundColor: '#1c1c1c',
		borderRadius: 10,
		padding: 10,
		justifyContent: 'center',
		fontFamily: 'mt-text',
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
		zIndex: 2,
	},
});

export default Main;
