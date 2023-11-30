import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Part = ({ part }) => {
	return (
		<TouchableOpacity style={styles.button}>
			<Ionicons name="add-outline" size={30} color="#fff"/>
			<Text style={styles.caption}>{part}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: "100%",
		height: 80,
		backgroundColor: "#2c2c2c",
		marginBottom: 15,
	},
	caption: {
		fontSize: 20,
		fontFamily: 'mt-caption',
		color: "#fff"
	}
})

export default Part;