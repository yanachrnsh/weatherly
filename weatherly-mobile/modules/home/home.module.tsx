import { useState } from 'react';
import { SearchHistoryList, SearchBar } from './components';

export const HomeModule = () => {
	return (
		<>
			<SearchBar />
			<SearchHistoryList />
		</>
	);
};
