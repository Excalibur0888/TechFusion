import React from "react";
import { gStyle } from "../../styles/style";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, SafeAreaView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Part from "./Part";

const PlusStackScreen = () => {
	const navigation = useNavigation();

	const handleGoBack = () => {
		navigation.goBack();
	};

	const partNames = ["CPU", "CPU COOLER", "MOTHERBOARD", 
	"GPU", "RAM", "STORAGE", "POWER SUPPLY", "CASE", "OTHER PARTS", "CUSTOM PARTS"];

	return (
		<View style={gStyle.main}>
			<View style={styles.header}>
				<TouchableOpacity onPress={handleGoBack}>
					<Ionicons name='chevron-back-outline' size={50} color="white" />
				</TouchableOpacity>
				<Text style={styles.title}>Новый ПК</Text>
			</View>
			<View style={styles.contentContainer}>
			<Text style={gStyle.title}>Совместимость: отлично</Text>
			<View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
				<Text style={gStyle.title}>Цена: 100$</Text>
				<Text style={gStyle.title}><Ionicons name="flash-outline" size={25} color="#fff"/> 65W</Text>
			</View>
			</View>
			<ScrollView contentContainerStyle={styles.contentContainer}>
				{partNames.map((partName) => (
					<Part key={partName} part={partName} />
				))}
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
	},
	title: {
		flex: 1,
		fontFamily: 'mt-bold',
		fontSize: 20,
		color: '#fff',
		left: 20,
	},
	contentContainer: {
		paddingHorizontal: 5,
		paddingBottom: 5,
	},
});

export default PlusStackScreen;
