import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../../../../styles/style.constants';

export const styles = StyleSheet.create({
	listItemWrapper: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: COLORS.graySecondary,
	},
	listItemLeft: {
		flex: 3,
		paddingVertical: SIZES.xs,
		paddingHorizontal: SIZES.xs,
	},
	listItemRight: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	},
});
