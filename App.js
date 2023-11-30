import React, { useCallback, useEffect, useState } from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './redux/reducers';
import { SafeAreaView, StatusBar } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import NavigateTab from './Navigation/NavigateTab';

SplashScreen.preventAutoHideAsync();
const store = configureStore({
	reducer: {
		favorites: favoritesReducer,
	},
});
function App() {
	const fonts = () =>
		Font.loadAsync({
			'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
			'mt-text': require('./assets/fonts/Raleway-Medium.ttf'),
			'mt-name': require('./assets/fonts/CarterOne-Regular.ttf'),
			'mt-caption': require('./assets/fonts/REM-Light.ttf')
		});
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				await fonts();
			}
			finally {
				setAppIsReady(true);
			}
		}
		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

	return (
		<Provider store={store}>
		<SafeAreaView style={{flex:1}} edges={['top', 'left']} onLayout={onLayoutRootView}>
			<NavigateTab />
			<StatusBar backgroundColor="#111112" barStyle="light-content" />
		</SafeAreaView>
		</Provider>
	);
}

registerRootComponent(App);
export default App;
