import { View, Text } from "react-native";
import React from "react";
import { Hour } from "@/types/hour";
import { colors } from "@/config/colors";
import { DateUtils } from "@/utils/dateUtils";
import { WeatherUtils } from "@/utils/weatherUtils";
import Icons from "./Icons";
import WxConditionMapper from "./WxConditionMapper";
import { Day } from "@/types/day";
import { useSettingContext } from "@/contexts/setting-context";
import gStyles from "@/styles/gStyles";
import { useLangContext } from "@/contexts/lang-context";

const HourWeatherDataOverview = ({ dayData, hourData }: { dayData: Day; hourData: Hour }) => {
	const { temperatureUnit } = useSettingContext();
	const { t } = useLangContext();

	return (
		<View
			style={{
				width: "100%",
				backgroundColor: "rgba(0, 0, 0, 0.7)",
				flexDirection: "row",
				justifyContent: "center",
				paddingVertical: 20,
				position: "relative",
				alignItems: "center",
				borderRadius: 10,
			}}
		>
			<View
				style={{
					flex: 0.8,
					alignItems: "center",
					position: "absolute",
					top: 20,
					left: 10,
				}}
			>
				<Text style={{ fontSize: 17, color: "white" }}>
					{DateUtils.toDate(new Date(dayData.datetime))}
				</Text>
				<Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
					{hourData.datetime.slice(0, 5)}
				</Text>
			</View>
			<View
				style={{
					alignItems: "center",
				}}
			>
				<View style={{ flexDirection: "row", alignItems: "flex-start" }}>
					<Text style={{ fontSize: 80, lineHeight: 80, color: "white" }}>
						{WeatherUtils.formatTemperature(hourData?.temp, temperatureUnit)}
					</Text>
					<Text style={{ fontSize: 20, lineHeight: 22, color: "white" }}>
						°{temperatureUnit}
					</Text>
				</View>
				<Text style={gStyles.textColor}>
					{t("feelLike")}{" "}
					{WeatherUtils.formatTemperature((hourData?.temp ?? 0) - 1, temperatureUnit)}
					<Text style={gStyles.textColor}>°{temperatureUnit}</Text>
				</Text>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Icons.TempMin color={colors.blue[300]} size={17} />
					<Text style={{ color: "white", paddingLeft: 5 }}>
						{WeatherUtils.formatTemperature(dayData.tempmin, temperatureUnit)}°
						{temperatureUnit}
					</Text>
					<View style={{ marginHorizontal: 10 }}>
						<Text style={gStyles.textColor}>~</Text>
					</View>
					<Icons.TempMax color="red" size={17} />
					<Text style={{ color: "white", paddingLeft: 5 }}>
						{WeatherUtils.formatTemperature(dayData.tempmax, temperatureUnit)}°
						{temperatureUnit}
					</Text>
				</View>
				<Text style={gStyles.textColor}>
					{t("windSpeed")}: {hourData?.windspeed} km/h
				</Text>
			</View>
			<View
				style={{
					flex: 0.8,
					alignItems: "center",
					position: "absolute",
					top: 20,
					right: 10,
				}}
			>
				<WxConditionMapper
					condition={WeatherUtils.shortenConditions(hourData?.conditions)}
					size={50}
				/>
				<Text style={{ color: "white", paddingRight: 5, paddingTop: 5 }}>
					{t(WeatherUtils.shortenConditions(hourData?.conditions))}
				</Text>
			</View>
		</View>
	);
};

export default HourWeatherDataOverview;
