import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const getStoreData = async (id: string) => {
	try {
		const value = await AsyncStorage.getItem(id);
		if (value !== null) {
			return JSON.parse(value);
		}
	} catch (e) {
		Alert.alert('Error while loading the history, please try again later');
	}
};
