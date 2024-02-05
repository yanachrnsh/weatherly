import AsyncStorage from '@react-native-async-storage/async-storage';
import { SearchedCity } from '../model/searched-city.model';
import { Alert } from 'react-native';

export const setStoreData = async (id: string, value: SearchedCity) => {
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem(id, jsonValue);
	} catch (e) {
		Alert.alert('Error while saving history, please try again later');
	}
};
