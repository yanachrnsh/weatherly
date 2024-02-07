import React from 'react';
import renderer from 'react-test-renderer';

import App from '@app/index';

describe(' render home page', () => {

	it('App has 1 child', () => {
		const tree = renderer.create(<App />).toJSON();
		expect(tree.children.length).toBe(1);
	});
});
