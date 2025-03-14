import { View, Text, ImageBackground, ScrollView, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { useWeatherContext } from "@/contexts/weather-context";
import { WeatherUtils } from "@/utils/weatherUtils";
import { colors } from "@/config/colors";
import Icons from "@/components/Icons";
import { HOUR_FORMAT, LANGUAGE, TEMP_UNIT, WIND_SPEED_UNIT } from "@/enum";
import { Picker } from "@react-native-picker/picker";
import DropDownPicker from "react-native-dropdown-picker";
import { useLangContext } from "@/contexts/lang-context";
import gStyles from "@/styles/gStyles";
import { useSettingContext } from "@/contexts/setting-context";

const SettingScreen = () => {
	type DropdownControllerProps = {
		open: boolean;
		value: any;
		items: any[];
		width: number;
	};

	const { weatherData } = useWeatherContext();
	const backgroundImage = WeatherUtils.backgroundImageMapper(
		WeatherUtils.shortenConditions(weatherData?.days[0].hours[0].conditions ?? ""),
	);
	const settingCtx = useSettingContext();
	const { t, onChangeLanguage } = useLangContext();
	const [langDropdownController, setLangDropdownController] = useState<DropdownControllerProps>({
		open: false,
		value: LANGUAGE.EN,
		items: [
			{ label: t("english"), value: LANGUAGE.EN },
			{ label: t("vietnamese"), value: LANGUAGE.VI },
		],
		width: 150,
	});

	const [tempUnitPickerController, setTempUnitPickerController] =
		useState<DropdownControllerProps>({
			open: false,
			value: TEMP_UNIT.Celsius,
			items: [
				{ label: "°C", value: TEMP_UNIT.Celsius },
				{ label: "°F", value: TEMP_UNIT.Fahrenheit },
			],
			width: 150,
		});

	function handleLangPickerWidth() {
		const longestLabel = langDropdownController.items.reduce(
			(max, item) => (item.label.length > max.length ? item.label : max),
			"",
		);
		const estimatedWidth = longestLabel.length * 8 + 50; // Extra padding
		const screenWidth = Dimensions.get("window").width - 50;
		setLangDropdownController((prevData) => ({
			...prevData,
			width: Math.min(estimatedWidth, screenWidth),
		}));
	}

	function handleTempUnitPickerWidth() {
		const longestLabel = tempUnitPickerController.items.reduce(
			(max, item) => (item.label.length > max.length ? item.label : max),
			"",
		);
		const estimatedWidth = longestLabel.length * 8 + 60; // Extra padding
		const screenWidth = Dimensions.get("window").width - 60;
		setTempUnitPickerController((prevData) => ({
			...prevData,
			width: Math.min(estimatedWidth, screenWidth),
		}));
	}

	useEffect(() => {
		handleLangPickerWidth();
		handleTempUnitPickerWidth();
	}, []);

	return (
		<ImageBackground source={backgroundImage} style={gStyles.mainContainer}>
			<View style={styles.subContainer}>
				<View style={[styles.row, { zIndex: 2 }]}>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Icons.Language size={17} color={colors.gray[400]} />
						<Text style={styles.title}>{t("language")}</Text>
					</View>
					<View>
						<DropDownPicker
							ArrowDownIconComponent={() => <Icons.ArrowDown size={18} color="white" />}
							showArrowIcon={true}
							open={langDropdownController.open}
							value={langDropdownController.value}
							items={langDropdownController.items}
							setOpen={() =>
								setLangDropdownController((prev: DropdownControllerProps) => ({
									...prev,
									open: !langDropdownController.open,
								}))
							}
							setValue={(callback) => {
								setLangDropdownController((prev) => {
									onChangeLanguage(callback(prev.value));
									return {
										...prev,
										value: callback(prev.value),
									};
								});
							}}
							style={{ backgroundColor: "black", width: langDropdownController.width }}
							dropDownContainerStyle={{
								backgroundColor: "black",
								width: langDropdownController.width,
							}}
							textStyle={{ color: "white" }}
						/>
					</View>
				</View>
				<View style={[styles.row, { zIndex: 1 }]}>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Icons.Temp size={17} color={colors.gray[400]} />
						<Text style={styles.title}>{t("temperatureUnit")}</Text>
					</View>
					<View>
						<DropDownPicker
							ArrowDownIconComponent={() => <Icons.ArrowDown size={18} color="white" />}
							showArrowIcon={true}
							open={tempUnitPickerController.open}
							value={tempUnitPickerController.value}
							items={tempUnitPickerController.items}
							setOpen={() =>
								setTempUnitPickerController((prev: DropdownControllerProps) => ({
									...prev,
									open: !tempUnitPickerController.open,
								}))
							}
							setValue={(callback) =>
								setTempUnitPickerController((prev: DropdownControllerProps) => {
									settingCtx.setTemperatureUnit(callback(prev.value));
									return {
										...prev,
										value: callback(prev.value),
									};
								})
							}
							style={{ backgroundColor: "black", width: tempUnitPickerController.width }}
							dropDownContainerStyle={{
								backgroundColor: "black",
								width: tempUnitPickerController.width,
							}}
							textStyle={{ color: "white" }}
						/>
					</View>
				</View>
			</View>
		</ImageBackground>
	);
};

export default SettingScreen;

const styles = StyleSheet.create({
	subContainer: {
		backgroundColor: "rgba(0, 0, 0, 0.7)",
		flexDirection: "column",
		padding: 10,
		borderRadius: 10,
		margin: 15,
		marginBottom: 65,
	},
	contentBox: {
		width: "90%",
		borderRadius: 10,
		backgroundColor: colors.blue.royal,
	},
	row: {
		position: "relative",
		marginTop: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	title: {
		color: "white",
		fontStyle: "italic",
		fontSize: 17,
		marginLeft: 10,
	},
	description: {
		marginLeft: 20,
		color: colors.gray[500],
		flex: 1, // Allows description to take up remaining space
	},
});
