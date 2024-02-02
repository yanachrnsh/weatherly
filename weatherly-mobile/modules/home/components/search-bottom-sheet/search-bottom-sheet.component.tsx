import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { StyleSheet, Text } from 'react-native';
import React, { useRef, useMemo, useEffect, PropsWithChildren, FC } from 'react';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { COLORS } from '../../../../styles/style.constants';

interface ReceiptBottomSheetWrapperProps extends PropsWithChildren {
	isOpen: boolean;
	title: string;
}

export const BottomSheetSearch: FC<ReceiptBottomSheetWrapperProps> = ({ isOpen, children, title }) => {
	const bottomSheetRef = useRef<BottomSheet>(null);

	useEffect(() => {
		if (isOpen) {
			bottomSheetRef.current?.snapToIndex(0);
		} else {
			bottomSheetRef.current?.close();
		}
	}, [isOpen]);

	const snapPoints = useMemo(() => ['100%'], []);

	return (
		<BottomSheet
			ref={bottomSheetRef}
			snapPoints={snapPoints}
			enablePanDownToClose={true}
			enableContentPanningGesture={false}
			style={styles.bottomSheetBorderRadius}
		>
			<BottomSheetView style={{ height: '100%', backgroundColor: COLORS.gray }}>
				<GooglePlacesInput />
			</BottomSheetView>
		</BottomSheet>
	);
};

const styles = StyleSheet.create({
	bottomSheetBorderRadius: {
		borderRadius: 40,
		overflow: 'hidden',
	},
});

const GooglePlacesInput = () => {
	return (
		<GooglePlacesAutocomplete
			placeholder="Search"
			onPress={(data, details = null) => {
				// 'details' is provided when fetchDetails = true
				console.log(data, details);
			}}
			query={{
				key: { GOOGLE_MAPS_API_KEY },
				language: 'en',
			}}
		/>
	);
};
