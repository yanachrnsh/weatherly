import { View } from 'react-native';
import { GooglePlacesInput } from './components';
import tw from 'twrnc';

export const SearchModalModule = () => {
	return (
		<View style={tw``}>
			<GooglePlacesInput />
		</View>
	);
};
