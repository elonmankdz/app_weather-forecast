import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	Pressable,
	TextInput,
	ScrollView,
} from "react-native";
import React, { useState } from "react";
import { WeatherUtils } from "@/utils/weatherUtils";
import { useWeatherContext } from "@/contexts/weather-context";
import { colors } from "@/config/colors";
import Icons from "@/components/Icons";
import { SearchedLocationResult, useLocationContext } from "@/contexts/location-context";
import { LOCATION } from "@/enum";
import { WeatherAPI } from "@/api/weatherApi";
import EnumUtils from "@/utils/enumUtils";
import { useLangContext } from "@/contexts/lang-context";
import gStyles from "@/styles/gStyles";

const LocationSearchingScreen = ({ navigation }: { navigation: any }) => {
	const weatherDataCtx = useWeatherContext();
	const dayWeatherData = weatherDataCtx.weatherData?.days[0];
	const backgroundImage = WeatherUtils.backgroundImageMapper(
		WeatherUtils.shortenConditions(dayWeatherData?.conditions),
	);
	const { t } = useLangContext();
	const today = new Date();
	const [isButtonPressed, setIsButtonPressed] = useState(false);
	const locationCtx = useLocationContext();
	const [text, setText] = useState("");
	const defaultResults = Object.values(LOCATION);
	const [searchedResults, setSearchedResults] = useState<string[]>(defaultResults);
	const [pressedResult, setPressedResult] = useState<string | null>(null);

	function onDeteleTextInput() {
		setText("");
	}

	function normalizeText(text: string) {
		return text
			.normalize("NFD") // Normalize to decomposed form
			.replace(/[\u0300-\u036f]/g, "") // Remove diacritics
			.toLowerCase(); // Convert to lowercase
	}

	function updateInputText(text: string) {
		setText(text);
		setSearchedResults(
			defaultResults.filter((result) => normalizeText(result).includes(normalizeText(text))),
		);
	}

	function onNavBack() {
		navigation.goBack();
	}

	function onChooseLocation(location: LOCATION) {
		locationCtx.selectLocation(location);
	}

	return (
		<ImageBackground source={backgroundImage} style={gStyles.mainContainer}>
			<View
				style={{
					width: "100%",
					flex: 1,
					backgroundColor: "rgba(0, 0, 0, 0.7)",
					position: "relative",
				}}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						padding: 10,
					}}
				>
					<Pressable onPress={onNavBack}>
						<Icons.ArrowBack size={30} color="white" />
					</Pressable>
					<View
						style={{
							marginLeft: 10,
							backgroundColor: "gray",
							padding: 5,
							borderRadius: 20,
							flexDirection: "row",
							alignItems: "center",
							flex: 1,
						}}
					>
						<Icons.Search size={25} color="white" />
						<TextInput
							style={{
								marginLeft: 10,
								paddingHorizontal: 10,
								borderRadius: 5,
								fontSize: 18,
								flex: 1,
								color: "white", // Set text color
							}}
							placeholder={t("textInputPlaceHolder")}
							placeholderTextColor={colors.gray[300]}
							value={text}
							onChangeText={updateInputText}
						/>
						<Pressable style={{ marginRight: 10 }} onPress={onDeteleTextInput}>
							<Icons.Delete size={15} color="white" />
						</Pressable>
					</View>
				</View>
				<ScrollView
					style={{
						marginTop: 30,
						borderColor: "white",
						borderTopWidth: 1,
						borderStyle: "solid",
					}}
				>
					{!searchedResults ? (
						<Text
							style={{
								textAlign: "center",
								fontStyle: "italic",
								color: colors.gray[500],
								fontSize: 15,
							}}
						>
							{t("noResult")}
						</Text>
					) : (
						<>
							{searchedResults.map((result: string, index: number) => (
								<Pressable
									key={index}
									onPressIn={() => setPressedResult(result)}
									onPressOut={() => setPressedResult(null)}
									onPress={() => onChooseLocation(EnumUtils.toLocationEnum(result))}
									style={{
										backgroundColor:
											pressedResult === result
												? "rgba(128,128,128, 0.3)"
												: "transparent",
										padding: 10,
									}}
								>
									<Text
										style={{
											color: pressedResult === result ? colors.yellow[500] : "white",
											fontSize: 17,
											marginBottom: 10,
										}}
									>
										{result}
									</Text>
								</Pressable>
							))}
						</>
					)}
				</ScrollView>
			</View>
		</ImageBackground>
	);
};

export default LocationSearchingScreen;

const styles = StyleSheet.create({
	subContainer: {
		width: "100%",
		alignItems: "center",
		paddingHorizontal: 15,
		paddingVertical: 15,
	},
	propWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
		marginTop: 20,
	},
	propTitle: {
		marginLeft: 10,
		color: colors.gray[400],
	},
	propValue: {
		color: "white",
		textAlign: "right",
	},
});
