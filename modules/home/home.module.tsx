import { SearchHistoryList, SearchBar } from '@modules/home/components';
import { View } from 'react-native';
import tw from 'twrnc';

export const HomeModule = () => {
	return (
		<View style={tw`flex-1`}>
			<SearchBar />
			<SearchHistoryList />
		</View>
	);
};
