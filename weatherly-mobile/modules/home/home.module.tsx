import { useState } from 'react';
import { SearchHistoryList, SearchBar, BottomSheetSearch } from './components';

export const HomeModule = () => {

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

	return (
		<>
			<SearchBar setIsBottomSheetOpen={setIsBottomSheetOpen}/>
			<SearchHistoryList />
			<BottomSheetSearch isOpen={isBottomSheetOpen} title="Search"></BottomSheetSearch>
		</>
	);
};
