import React from "react";
import Main from "../components/Main/Main";
import Profile from "../components/Profile/Profile";
import Catalog from "../components/Catalog/Catalog";
import Favourite from "../components/Favourite/Favourite";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Menu from "../components/Menu";

const Tab = createBottomTabNavigator();

export default function Navigate() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				tabBar={() => <Menu />}
				screenOptions={{
					headerShown: false,
				}}
			>
				<Tab.Screen name="Main" component={Main} />
				<Tab.Screen name="Profile" component={Profile} />
				<Tab.Screen name="Catalog" component={Catalog} />
				<Tab.Screen name="Favourite" component={Favourite} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
