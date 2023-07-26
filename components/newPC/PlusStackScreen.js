import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { gStyle } from "../../styles/style";
import { View } from "react-native";
const Stack = createStackNavigator();

const PlusStackScreen = () => {
	const navigation = useNavigation();
  return (
    <View style={gStyle.main}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
      >
        <Text>Закрыть</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlusStackScreen;
