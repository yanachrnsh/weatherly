import { SearchBarInput } from '@modules/home/components/search-bar/components/search-bar-input.component';
import { fireEvent, render, screen } from '@testing-library/react-native';

jest.mock('expo-router', () => ({
	useRouter: jest.fn(),
}));

describe('Search Bar Input', () => {
	it('if prepopulatedSearchedValue is null, the input value should be empty', () => {
		const prepopulatedSearchedValue = null;
		render(<SearchBarInput prepopulatedSearchedValue={prepopulatedSearchedValue} />);

		const input = screen.getByTestId('search-bar-input');
		expect(input.props.value).toBe('');
	});

	it('if prepopulatedSearchedValue is exist, the input value should be the prepopulatedSearchedValue', () => {
		const prepopulatedSearchedValue = 'Text value';
		render(<SearchBarInput prepopulatedSearchedValue={prepopulatedSearchedValue} />);
		const input = screen.getByTestId('search-bar-input');
		expect(input.props.value).toBe(prepopulatedSearchedValue);
	});
});
