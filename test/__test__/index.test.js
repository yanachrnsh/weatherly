import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import App from '../../app/index';

describe(' render home page', () => {
	beforeEach(async () => {
		
	});

	it('has 1 child', () => {
		const tree = renderer.create(<App />).toJSON();
		expect(tree.children.length).toBe(1);
	});
});
