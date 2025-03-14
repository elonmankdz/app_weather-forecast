/* eslint-disable react/prop-types */
import { View, Text, ScrollView, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import Icons from "@/components/Icons";
import { colors } from "@/config/colors";
import { WEATHER_PROPS } from "@/enum";
import WxCondIcons from "@/components/WxCondIcons";
import { useWeatherContext } from "@/contexts/weather-context";
import { WeatherUtils } from "@/utils/weatherUtils";
import { useLangContext } from "@/contexts/lang-context";
import gStyles from "@/styles/gStyles";

const WeatherPropsDescScreen = () => {
	const { weatherData } = useWeatherContext();
	const backgroundImage = WeatherUtils.backgroundImageMapper(
		WeatherUtils.shortenConditions(weatherData?.days[0].hours[0].conditions ?? ""),
	);
	const { t } = useLangContext();
	type Prop = {
		title: WEATHER_PROPS;
		description: string;
	};
	const props: Prop[] = [
		{
			title: t(WEATHER_PROPS.MIN_TEMP),
			description: t("descMinTemp"),
		},
		{
			title: t(WEATHER_PROPS.MAX_TEMP),
			description: t("descMaxTemp"),
		},
		{
			title: t(WEATHER_PROPS.CLOUD_COVER),
			description: t("descCloudCover"),
		},
		{
			title: t(WEATHER_PROPS.FEEL_LIKE),
			description: t("descFeelLike"),
		},
		{
			title: t(WEATHER_PROPS.HUMIDITY),
			description: t("descHumidity"),
		},
		{
			title: t(WEATHER_PROPS.SNOW),
			description: t("descSnow"),
		},
		{
			title: t(WEATHER_PROPS.PRECIP_PROB),
			description: t("descPrecipProb"),
		},
		{
			title: t(WEATHER_PROPS.UV_INDEX),
			description: t("descUVIndex"),
		},
		{
			title: t(WEATHER_PROPS.VISIBILITY),
			description: t("descVisibility"),
		},
		{
			title: t(WEATHER_PROPS.WIND_DIRECTION),
			description: t("descWindDir"),
		},
		{
			title: t(WEATHER_PROPS.WIND_SPEED),
			description: t("descWindSpeed"),
		},
		{
			title: t(WEATHER_PROPS.SOLAR_ENERGY),
			description: t("descSolarEnergy"),
		},
	];

	const iconSetting: { color: string; size: number } = {
		color: "white",
		size: 17,
	};
	const IconComponent = ({ title }: { title: WEATHER_PROPS }) => {
		const iconMapper = {
			[t(WEATHER_PROPS.MIN_TEMP)]: (
				<Icons.TempMin color={colors.blue[300]} size={iconSetting.size} />
			),
			[t(WEATHER_PROPS.MAX_TEMP)]: <Icons.TempMax color={"red"} size={iconSetting.size} />,
			[t(WEATHER_PROPS.CLOUD_COVER)]: (
				<Icons.CloudCover color={iconSetting.color} size={iconSetting.size} />
			),
			[t(WEATHER_PROPS.FEEL_LIKE)]: (
				<Icons.FeelsLike color={iconSetting.color} size={iconSetting.size} />
			),
			[t(WEATHER_PROPS.HUMIDITY)]: (
				<Icons.Humidity color={iconSetting.color} size={iconSetting.size} />
			),
			[t(WEATHER_PROPS.SNOW)]: <Icons.Snow color={iconSetting.color} size={iconSetting.size} />,
			[t(WEATHER_PROPS.PRECIP_PROB)]: (
				<Icons.Precipprob color={iconSetting.color} size={iconSetting.size} />
			),
			[t(WEATHER_PROPS.UV_INDEX)]: (
				<Icons.UVIndex color={iconSetting.color} size={iconSetting.size} />
			),
			[t(WEATHER_PROPS.VISIBILITY)]: (
				<Icons.Visibility color={iconSetting.color} size={iconSetting.size} />
			),
			[t(WEATHER_PROPS.WIND_DIRECTION)]: (
				<Icons.WindDirection color={iconSetting.color} size={iconSetting.size} />
			),
			[t(WEATHER_PROPS.WIND_SPEED)]: (
				<Icons.WindSpeed color={iconSetting.color} size={iconSetting.size} />
			),
			[t(WEATHER_PROPS.SOLAR_ENERGY)]: (
				<Icons.SolarEnergy color={iconSetting.color} size={iconSetting.size} />
			),
			[t(WEATHER_PROPS.DEW_POINT)]: (
				<Icons.Dew color={iconSetting.color} size={iconSetting.size} />
			),
			[t(WEATHER_PROPS.PRESSURE)]: (
				<Icons.Dew color={iconSetting.color} size={iconSetting.size} />
			),
			[t(WEATHER_PROPS.SNOW_PROB)]: (
				<Icons.Dew color={iconSetting.color} size={iconSetting.size} />
			),
		};

		return iconMapper[t(title)];
	};

	return (
		<ImageBackground source={backgroundImage} style={gStyles.mainContainer}>
			<ScrollView>
				<View style={styles.subContainer}>
					{props?.map((prop: Prop, index: number) => (
						<View style={styles.row} key={index}>
							<View style={{ flexDirection: "row", alignItems: "center" }}>
								<IconComponent title={prop.title} />
								<Text style={styles.title}>{prop.title}</Text>
							</View>
							<Text style={styles.description}>{prop.description}</Text>
						</View>
					))}
				</View>
			</ScrollView>
		</ImageBackground>
	);
};

export default WeatherPropsDescScreen;

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
		// padding: 15,
		backgroundColor: colors.blue.royal,
	},
	row: {
		marginTop: 20,
	},
	title: {
		color: "white",
		fontStyle: "italic",
		fontSize: 18,
		fontWeight: "bold",
		marginRight: 15,
		marginLeft: 10,
	},
	description: {
		marginLeft: 20,
		color: colors.gray[500],
		flex: 1, // Allows description to take up remaining space
	},
});
