import { StyleSheet } from 'react-native';
import { SIZES, COLORS } from "../../../../../styles/style.constants";

export const styles = StyleSheet.create({
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
