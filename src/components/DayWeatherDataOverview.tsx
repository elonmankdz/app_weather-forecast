import { View, Text } from "react-native";
import React from "react";
import WxConditionMapper from "./WxConditionMapper";
import { WeatherUtils } from "@/utils/weatherUtils";
import { useWeatherContext } from "@/contexts/weather-context";
import { DateUtils } from "@/utils/dateUtils";
import { colors } from "@/config/colors";
import { TextUtils } from "@/utils/textUtils";
import Icons from "./Icons";
import { Day } from "@/types/day";
import { Hour } from "@/types/hour";
import { useSettingContext } from "@/contexts/setting-context";
import gStyles from "@/styles/gStyles";
import { useLangContext } from "@/contexts/lang-context";

const DayWeatherDataOverview = ({ dayData }: { dayData: Day }) => {
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
				{DateUtils.isCurrentDate(dayData.datetime) && (
					<Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
						{DateUtils.toTime(new Date())}
					</Text>
				)}
			</View>
			<View
				style={{
					alignItems: "center",
				}}
			>
				<View style={{ flexDirection: "row", alignItems: "flex-start" }}>
					<Text style={{ fontSize: 80, lineHeight: 80, color: "white" }}>
						{WeatherUtils.formatTemperature(dayData.temp, temperatureUnit)}
					</Text>
					<Text style={{ fontSize: 20, lineHeight: 22, color: "white" }}>
						°{temperatureUnit}
					</Text>
				</View>
				<Text style={gStyles.textColor}>
					{t("feelLike")} {WeatherUtils.formatTemperature(dayData.temp - 1, temperatureUnit)}
					<Text style={gStyles.textColor}>°{temperatureUnit}</Text>
				</Text>
				<View style={gStyles.flexRowCentered}>
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
					{t("windSpeed")}: {dayData.windspeed} km/h
				</Text>
				<Text
					style={{
						paddingTop: 15,
						textAlign: "center",
						color: colors.gray[500],
						fontStyle: "italic",
					}}
				>
					{TextUtils.balanceText(dayData.description)}
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
				<WxConditionMapper condition={WeatherUtils.shortenConditions(dayData.conditions)} />
				<Text style={{ color: "white", paddingRight: 5, paddingTop: 5 }}>{t("Rain")}</Text>
			</View>
		</View>
	);
};

export default DayWeatherDataOverview;
