import { StyleSheet } from 'react-native';
import { SIZES, COLORS } from "../../../../../styles/style.constants";

export const styles = StyleSheet.create({
	searchWrapper: {
		flex: 3,
		borderRadius: SIZES.s,
		backgroundColor: COLORS.gray,
		height: 52,
	},
	searchInput: {
		flex: 1,
		paddingHorizontal: SIZES.xs,
		fontSize: SIZES.m,
	},
	searchBtnWrapper: {
		flex: 1,
	},
});
