import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	ImageBackground,
	TouchableOpacity,
	ImageSourcePropType,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useWeatherContext } from "@/contexts/weather-context";
import Icons from "@/components/Icons";
import { DateUtils } from "@/utils/dateUtils";
import { colors } from "@/config/colors";
import { Hour } from "@/types/hour";
import { WeatherUtils } from "@/utils/weatherUtils";
import WxConditionMapper from "@/components/WxConditionMapper";
import { useSettingContext } from "@/contexts/setting-context";
import WeatherDetails from "@/components/WeatherDetails";
import { dummyWeatherData } from "@/constants/dummyWeatherData";
import HourWeatherDataOverview from "@/components/HourWeatherDataOverview";
import gStyles from "@/styles/gStyles";

const HourlyWeatherScreen = () => {
	const { weatherData } = useWeatherContext();
	const [selectedHour, setSelectedHour] = useState<string>("00:00:00");
	const [hourlyWeatherData, setHourlyWeatherData] = useState<Hour>(weatherData.days[0].hours[0]);
	const settingCtx = useSettingContext();
	const weatherDataCtx = useWeatherContext();
	const [backgroundImage, setBackgroundImage] = useState<ImageSourcePropType>(
		WeatherUtils.backgroundImageMapper(
			WeatherUtils.shortenConditions(weatherData?.days[0].hours[0].conditions ?? ""),
		),
	);
	const today = new Date();
	const iconSetting = {
		size: 25,
		color: colors.gray[400],
	};
	useEffect(() => {
		const tempHourlyWeatherData: Hour =
			weatherData.days[0].hours.find((hour: Hour) => hour.datetime === selectedHour) ??
			dummyWeatherData.days[0].hours[0];

		setHourlyWeatherData(tempHourlyWeatherData);
		setBackgroundImage(
			WeatherUtils.backgroundImageMapper(
				WeatherUtils.shortenConditions(tempHourlyWeatherData?.conditions ?? ""),
			),
		);
	}, [selectedHour]);

	return (
		<ImageBackground source={backgroundImage} style={gStyles.mainContainer}>
			<ScrollView>
				<View style={{ padding: 15 }}>
					<View
						style={{
							backgroundColor: "rgba(0, 0, 0, 0.7)",
							paddingVertical: 5,
							borderRadius: 10,
						}}
					>
						<HorizontalScrollBar
							hours={weatherData.days[0].hours}
							setSelectedHour={setSelectedHour}
							selectedHour={selectedHour}
						/>
					</View>
					<View style={{ marginTop: 10 }}>
						<HourWeatherDataOverview
							dayData={weatherData.days[0]}
							hourData={hourlyWeatherData}
						/>
					</View>
					<View
						style={{
							backgroundColor: "rgba(0, 0, 0, 0.7)",
							marginTop: 10,
							borderRadius: 10,
						}}
					>
						<WeatherDetails data={hourlyWeatherData ?? dummyWeatherData.days[0].hours} />
					</View>
				</View>
			</ScrollView>
		</ImageBackground>
	);
};

export default HourlyWeatherScreen;

const HorizontalScrollBar = ({
	hours,
	setSelectedHour,
	selectedHour,
}: {
	hours: Hour[];
	setSelectedHour: any;
	selectedHour: string;
}) => (
	<ScrollView horizontal showsHorizontalScrollIndicator={false}>
		{hours?.map((hour, index) => (
			<TouchableOpacity
				onPress={() => setSelectedHour(hour.datetime)}
				key={index}
				style={[
					styles.scrollViewItemButton,
					{
						backgroundColor:
							selectedHour === hour.datetime ? "rgba(128, 128, 128, 0.3)" : "transparent",
					},
				]}
			>
				<Text
					style={[
						{ color: "white" },
						DateUtils.isCurrentHour(hour.datetime) && {
							color: colors.yellow[400],
							fontWeight: "bold",
						},
					]}
				>
					{hour.datetime.slice(0, 5)}
				</Text>
				<WxConditionMapper
					condition={WeatherUtils.shortenConditions(hour.conditions)}
					size={40}
				/>
			</TouchableOpacity>
		))}
	</ScrollView>
);

const styles = StyleSheet.create({
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
	scrollViewItemButton: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderRadius: 10,
		marginLeft: 10,
		marginVertical: 5,
	},
});
