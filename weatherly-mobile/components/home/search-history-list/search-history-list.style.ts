import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../styles/style.constants';

export const styles = StyleSheet.create({
	listContainer: {
		marginTop: SIZES.s,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	listWrapper: {
		flex: 1,
		marginTop: SIZES.s,
	},
	listHeaderWrapper: {
		fontSize: SIZES.m,
		flexDirection: 'row',
		width: '100%',
	},
	listHeaderLeft: {
		fontSize: SIZES.m,
		fontWeight: 'bold',
		flex: 3,
		paddingVertical: SIZES.s,
		paddingHorizontal: SIZES.xs,
	},
	listHeaderRight: {
		fontSize: SIZES.m,
		fontWeight: 'bold',
		flex: 1,
		textAlign: 'center',
		paddingVertical: SIZES.s,
	},
});
