import {
	View,
	Text,
	ImageBackground,
	ScrollView,
	TouchableOpacity,
	StyleSheet,
	Pressable,
	ImageSourcePropType,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icons from "@/components/Icons";
import WxCondIcons from "@/components/WxCondIcons";
import { colors } from "@/config/colors";
import { DateUtils } from "@/utils/dateUtils";
import { TextUtils } from "@/utils/textUtils";
import { useWeatherContext } from "@/contexts/weather-context";
import { Day } from "@/types/day";
import { Hour } from "@/types/hour";
import { WeatherUtils } from "@/utils/weatherUtils";
import WxConditionMapper from "@/components/WxConditionMapper";
import { useLangContext } from "@/contexts/lang-context";
import { useSettingContext } from "@/contexts/setting-context";
import WeatherDetails from "@/components/WeatherDetails";
import WeatherDataOverview from "@/components/DayWeatherDataOverview";
import gStyles from "@/styles/gStyles";
import HourSelectionScrollBar from "@/components/HourSelectionScrollBar";

const DailyWeatherScreen = ({ navigation }: { navigation: any }) => {
	const weatherDataCtx = useWeatherContext();
	const [selectedDate, setSelectedDate] = useState<string>(
		weatherDataCtx.weatherData?.days[0].datetime ?? null,
	);
	const { t } = useLangContext();
	const [dayWeatherData, setDateWeatherData] = useState<Day>(weatherDataCtx.weatherData?.days[0]);
	const settingCtx = useSettingContext();
	const [backgroundImage, setBackgroundImage] = useState<ImageSourcePropType>(
		WeatherUtils.backgroundImageMapper(
			WeatherUtils.shortenConditions(weatherDataCtx.weatherData?.days[0].conditions),
		),
	);

	function onChooseHour(datetime: string) {
		let tempHourWeatherData: Hour | null = null;
		tempHourWeatherData =
			dayWeatherData?.hours?.find((hour: Hour) => hour.datetime === datetime) ?? null;
		navigation.navigate("Weather Details", {
			dateTime: new Date(selectedDate + "T" + datetime),
			dayWeatherData: dayWeatherData,
			hourWeatherData: tempHourWeatherData,
		});
	}

	useEffect(() => {
		let tempDateWeatherData: Day | null = null;
		tempDateWeatherData =
			weatherDataCtx.weatherData?.days.find((day: Day) => day.datetime === selectedDate) ??
			weatherDataCtx.weatherData?.days[0] ??
			null;
		setDateWeatherData(tempDateWeatherData);
		setBackgroundImage(
			WeatherUtils.backgroundImageMapper(
				WeatherUtils.shortenConditions(tempDateWeatherData?.conditions ?? "Rain"),
			),
		);
	}, [selectedDate]);

	function onNavToWeatherPropsDesc() {
		navigation.navigate("Weather Props Description");
	}

	return (
		<>
			<ImageBackground source={backgroundImage} style={gStyles.mainContainer}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View
						style={[
							styles.subContainer,
							{ opacity: weatherDataCtx?.isWeatherNowShown ? 1 : 0 },
						]}
					>
						<View>
							<DateSelectionBar
								days={weatherDataCtx.weatherData.days}
								setSelectedDate={setSelectedDate}
								selectedDate={selectedDate}
							/>

							<View style={{ marginTop: 10 }}>
								<WeatherDataOverview dayData={dayWeatherData} />
							</View>
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
											hours={dayWeatherData.hours}
											onChooseHour={onChooseHour}
										/>
									</View>
								</View>
								<View style={styles.section}>
									<View style={{ flexDirection: "row", alignItems: "center" }}>
										<Text style={[gStyles.textColor]}>{t("weatherDetails")}</Text>
										<Pressable
											onPress={onNavToWeatherPropsDesc}
											style={{ marginLeft: 10 }}
										>
											<Icons.Information size={20} color={colors.yellow[300]} />
										</Pressable>
									</View>
									<WeatherDetails data={dayWeatherData} />
								</View>
							</View>
						</View>
					</View>
				</ScrollView>
			</ImageBackground>
		</>
	);
};

export default DailyWeatherScreen;

const DateSelectionBar = ({
	days,
	setSelectedDate,
	selectedDate,
}: {
	days: Day[];
	setSelectedDate: any;
	selectedDate: string;
}) => {
	return (
		<View
			style={{
				width: "100%",
				backgroundColor: "rgba(0, 0, 0, 0.7)",
				paddingVertical: 5,
				borderRadius: 10,
			}}
		>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{days
					?.filter((day) => {
						const dayDate = new Date(day.datetime);
						const sevenDaysLater = new Date();
						sevenDaysLater.setDate(sevenDaysLater.getDate() + 6);

						return dayDate < sevenDaysLater;
					})
					.map((day, index) => (
						<TouchableOpacity
							onPress={() => setSelectedDate(day.datetime)}
							key={index}
							style={{
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								paddingHorizontal: 10,
								paddingVertical: 10,
								borderRadius: 10,
								marginLeft: 10,
								marginVertical: 5,
								backgroundColor:
									selectedDate === day.datetime
										? "rgba(128, 128, 128, 0.3)"
										: "transparent",
							}}
						>
							<Text
								style={[
									{ color: "white" },
									DateUtils.isCurrentDate(day.datetime) && {
										color: colors.yellow[400],
										fontWeight: "bold",
									},
								]}
							>
								{day.datetime.slice(5)}
							</Text>
							<WxConditionMapper
								condition={WeatherUtils.shortenConditions(day.conditions)}
								size={40}
							/>
						</TouchableOpacity>
					))}
			</ScrollView>
		</View>
	);
};
const styles = StyleSheet.create({
	subContainer: {
		width: "100%",
		// height: "100%",
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
