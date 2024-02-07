import { HomeModule } from '@modules/home/home.module';
import { render, screen } from '@testing-library/react-native';

describe('Home Module', () => {
	it('search bar and searched history should be rendered  ', () => {
		render(<HomeModule />);

		const searchedBar = screen.getByTestId('search-bar');
		const searchedHistory = screen.getByTestId('search-history-list');
		expect(searchedBar).toBeOnTheScreen();
		expect(searchedHistory).toBeOnTheScreen();
	});
});
