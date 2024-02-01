import { Stack } from 'expo-router';

const RootLayout = () => {
	return (
		<Stack>
			<Stack.Screen name="home/index" options={{ headerTitle: '' }} />
			<Stack.Screen name="city-weather/index" options={{ headerTitle: '' }} />
			<Stack.Screen name="index" options={{ headerTitle: '' }} />
		</Stack>
	);
};

export default RootLayout;
