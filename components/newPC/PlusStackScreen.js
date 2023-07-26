import React from "react";
import { gStyle } from "../../styles/style";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook

const PlusStackScreen = () => {
  const navigation = useNavigation(); // Get the navigation object

  const handleGoBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <View style={gStyle.main}>
      <TouchableOpacity onPress={handleGoBack}>
				<Ionicons name='chevron-back-outline' size={50} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default PlusStackScreen;
