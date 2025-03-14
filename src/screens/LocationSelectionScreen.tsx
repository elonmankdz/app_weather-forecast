import { View, Text, ImageBackground, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { WeatherUtils } from "@/utils/weatherUtils";
import { useWeatherContext } from "@/contexts/weather-context";
import { colors } from "@/config/colors";
import { DateUtils } from "@/utils/dateUtils";
import WxCondIcons from "@/components/WxCondIcons";
import Icons from "@/components/Icons";
import { SearchedLocationResult, useLocationContext } from "@/contexts/location-context";
import WxConditionMapper from "@/components/WxConditionMapper";
import { LOCATION } from "@/enum";
import { useLangContext } from "@/contexts/lang-context";
import { useSettingContext } from "@/contexts/setting-context";
import gStyles from "@/styles/gStyles";

const LocationSelection = ({ navigation }: { navigation: any }) => {
	const weatherDataCtx = useWeatherContext();
	const dayWeatherData = weatherDataCtx.weatherData?.days[0];
	const backgroundImage = WeatherUtils.backgroundImageMapper(
		WeatherUtils.shortenConditions(dayWeatherData?.conditions),
	);
	const settingCtx = useSettingContext();
	const { t } = useLangContext();
	const today = new Date();
	const [isButtonPressed, setIsButtonPressed] = useState(false);
	const locationCtx = useLocationContext();

	function onPressAddBtn() {
		navigation.navigate("Location Searching");
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
					padding: 10,
				}}
			>
				{locationCtx.searchedLocationResults.map(
					(result: SearchedLocationResult, index: number) => (
						<Pressable key={index} onPress={() => onChooseLocation(result.location)}>
							<ImageBackground
								imageStyle={{
									objectFit: "cover",
								}}
								source={WeatherUtils.backgroundImageMapper(result.condition)}
								style={{
									overflow: "hidden",
									borderRadius: 10,
									borderStyle: "solid",
									borderWidth: 2,
									borderColor: "white",
									padding: 10,
									marginBottom: 10,
								}}
							>
								<View
									style={{
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "space-between",
									}}
								>
									<View style={{ flexDirection: "column", alignItems: "flex-start" }}>
										<View style={{ flexDirection: "row", alignItems: "center" }}>
											{locationCtx.selectedLocation === result.location && (
												<View style={{ marginRight: 5 }}>
													<Icons.Location color="red" size={20} />
												</View>
											)}
											<Text
												style={{
													color:
														locationCtx.selectedLocation === result.location
															? colors.yellow[500]
															: "white",
													fontSize: 18,
												}}
											>
												{result.location}
											</Text>
										</View>
										<Text style={{ color: colors.gray[300] }}>
											{DateUtils.toDate(today)} {DateUtils.toTime(result.updatedAt)}
										</Text>
									</View>
									<View style={{ flexDirection: "column", alignItems: "flex-end" }}>
										<View style={{ flexDirection: "row", alignItems: "center" }}>
											<WxConditionMapper condition={result.condition} size={40} />
											<Text
												style={{
													marginLeft: 5,
													fontSize: 20,
													color: "white",
													fontWeight: "bold",
												}}
											>
												{WeatherUtils.formatTemperature(
													result.currTemp,
													settingCtx.temperatureUnit,
												)}
												°{settingCtx.temperatureUnit}
											</Text>
										</View>
										<Text style={gStyles.textColor}>
											{WeatherUtils.formatTemperature(
												result.minTemp,
												settingCtx.temperatureUnit,
											)}
											° ~{" "}
											{WeatherUtils.formatTemperature(
												result.maxTemp,
												settingCtx.temperatureUnit,
											)}
											°
										</Text>
									</View>
								</View>
							</ImageBackground>
						</Pressable>
					),
				)}

				<Pressable
					style={{ marginBottom: 10, marginTop: 20 }}
					onPress={locationCtx.deleteSeachedResults}
				>
					<Text
						style={{
							textAlign: "center",
							color: colors.yellow[500],
							fontSize: 17,
							textDecorationLine: "underline",
						}}
					>
						{t("deleteSearchResults")}
					</Text>
				</Pressable>
			</View>
			<Pressable
				onPressIn={() => setIsButtonPressed(true)}
				onPressOut={() => setIsButtonPressed(false)}
				onPress={onPressAddBtn}
				style={{
					position: "absolute",
					bottom: 65,
					right: 10,
				}}
			>
				<Icons.AddCircleFill
					color={isButtonPressed ? colors.yellow[300] : colors.yellow[500]}
					size={60}
				/>
			</Pressable>
		</ImageBackground>
	);
};

export default LocationSelection;

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
