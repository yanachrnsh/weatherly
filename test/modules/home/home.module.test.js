import { HomeModule } from '@modules/home/home.module';
import { render, screen } from '@testing-library/react-native';

describe('Home Module', () => {
	it('search bar and search history should be rendered  ', () => {
		render(<HomeModule />);

		const searchBar = screen.getByTestId('search-bar');
		const searchHistory = screen.getByTestId('search-history-list');
		expect(searchBar).toBeOnTheScreen();
		expect(searchHistory).toBeOnTheScreen();
	});
});
