import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, TextInput } from "react-native-gesture-handler";
import { DateUtils } from "@/utils/dateUtils";
import { useWeatherContext } from "@/contexts/weather-context";
import { WeatherUtils } from "@/utils/weatherUtils";
import Icons from "@/components/Icons";
import { colors } from "@/config/colors";
import { TextUtils } from "@/utils/textUtils";
import WxConditionMapper from "@/components/WxConditionMapper";
import { Hour } from "@/types/hour";
import WeatherDetails from "@/components/WeatherDetails";
import { dummyWeatherData } from "@/constants/dummyWeatherData";
import WeatherDataOverview from "@/components/DayWeatherDataOverview";
import gStyles from "@/styles/gStyles";
import { useLangContext } from "@/contexts/lang-context";
import HourSelectionScrollBar from "@/components/HourSelectionScrollBar";
import { Day } from "@/types/day";
import { useSettingContext } from "@/contexts/setting-context";

const WeatherTodayScreen = ({ navigation }: { navigation: any }) => {
	const today = new Date();
	const weatherDataCtx = useWeatherContext();
	const dayWeatherData = weatherDataCtx.weatherData?.days[0];
	const backgroundImage = WeatherUtils.backgroundImageMapper(
		WeatherUtils.shortenConditions(dayWeatherData?.conditions),
	);
	const { t } = useLangContext();
	const iconSetting = {
		size: 25,
		color: colors.gray[400],
	};

	function onChooseHour(datetime: string) {
		let tempHourWeatherData: Hour | null = null;
		tempHourWeatherData =
			dayWeatherData?.hours?.find((hour: Hour) => hour.datetime === datetime) ?? null;
		navigation.navigate("Weather Details", {
			dateTime: new Date(
				today.toISOString().slice(0, today.toISOString().indexOf("T")) + "T" + datetime,
			),
			dayWeatherData: dayWeatherData,
			hourWeatherData: tempHourWeatherData,
		});
	}

	function onNavToWeatherPropsDesc() {
		navigation.navigate("Weather Props Description");
	}

	return (
		<ImageBackground source={backgroundImage} style={gStyles.mainContainer}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View
					style={[styles.subContainer, { opacity: weatherDataCtx?.isWeatherNowShown ? 1 : 0 }]}
				>
					<WeatherDataOverview dayData={dayWeatherData} />
					<View
						style={{
							backgroundColor: "rgba(0, 0, 0, 0.7)",
							width: "100%",
							borderRadius: 10,
							marginTop: 10,
							paddingVertical: 10,
						}}
					>
						<View style={styles.section}>
							<View>
								<Text style={gStyles.textColor}>{t("hourlyForecast")}</Text>
							</View>
							<View style={{ marginHorizontal: 10 }}>
								<HourSelectionScrollBar
									hours={weatherDataCtx.weatherData.days[0].hours}
									onChooseHour={onChooseHour}
								/>
							</View>
						</View>
						<View style={styles.section}>
							<View>
								<Text style={gStyles.textColor}>{t("dailyForecast")}</Text>
							</View>
							<View
								style={{
									marginHorizontal: 10,
								}}
							>
								<DailyForecastItems
									days={weatherDataCtx.weatherData.days}
									navigation={navigation}
								/>
							</View>
						</View>
						<View style={styles.section}>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<Text style={{ color: "white", marginRight: 10 }}>
									{t("weatherDetails")}
								</Text>
								<Pressable onPress={onNavToWeatherPropsDesc}>
									<Icons.Information size={20} color={colors.yellow[300]} />
								</Pressable>
							</View>
							<WeatherDetails data={dayWeatherData} />
						</View>
					</View>
				</View>
			</ScrollView>
		</ImageBackground>
	);
};

export default WeatherTodayScreen;

const DailyForecastItems = ({ days, navigation }: { days: Day[]; navigation: any }) => {
	const { t } = useLangContext();
	const { temperatureUnit } = useSettingContext();

	return (
		<TouchableOpacity onPress={() => navigation.navigate("Daily Weather")}>
			{days
				.filter((day) => {
					const dayDate = new Date(day.datetime);
					const sevenDaysLater = new Date();
					sevenDaysLater.setDate(sevenDaysLater.getDate() + 6);

					return dayDate < sevenDaysLater;
				})
				.map((day, index) => (
					<View
						key={index}
						style={{
							paddingHorizontal: 10,
							paddingVertical: 5,
							marginTop: 10,
							borderRadius: 5,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<View
							style={{
								width: 60,
							}}
						>
							<Text
								style={{
									color:
										new Date(day.datetime).getDate() === new Date().getDate()
											? colors.yellow[400]
											: "white",
								}}
							>
								{new Date(day.datetime).getDate() === new Date().getDate()
									? t("Today")
									: t(new Date(day.datetime).toDateString().slice(0, 3))}
							</Text>
							<Text style={gStyles.textColor}>
								{day.datetime.replace(new Date().getFullYear() + "-", "")}
							</Text>
						</View>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								flex: 1,
								paddingLeft: 15,
							}}
						>
							<WxConditionMapper
								condition={WeatherUtils.shortenConditions(day.conditions)}
								size={30}
							/>
							<View style={{ marginLeft: 10, alignItems: "flex-start" }}>
								<Text style={gStyles.textColor}>
									{t(WeatherUtils.shortenConditions(day.conditions))}
								</Text>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Icons.WindSpeed size={13} color="white" />
									<Text style={{ marginLeft: 5, color: "white" }}>
										{day.windspeed} km/h
									</Text>
								</View>
							</View>
						</View>
						<View>
							<Text style={gStyles.textColor}>
								{WeatherUtils.formatTemperature(day.tempmin, temperatureUnit)}° ~{" "}
								{WeatherUtils.formatTemperature(day.tempmax, temperatureUnit)}°
							</Text>
						</View>
					</View>
				))}
		</TouchableOpacity>
	);
};
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
	section: {
		padding: 10,
		paddingTop: 0,
		marginBottom: 20,
	},
});
