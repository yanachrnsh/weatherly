import { StyleSheet } from 'react-native';
import { SIZES, COLORS } from '../../../styles/style.constants';

export const styles = StyleSheet.create({
	searchContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: SIZES.xs,
		gap: SIZES.xs,
	},

	searchBtnWrapper: {
		flex: 1,
	},
	searchBtn: {
		backgroundColor: COLORS.primary,
		borderRadius: SIZES.s,
		padding: SIZES.xs,
		justifyContent: 'center',
		alignItems: 'center',
	},
	searchIcon: {
		fontSize: SIZES.xxl,
		height: SIZES.xxl,
	},
});
