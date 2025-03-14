import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Day } from "@/types/day";
import { Hour } from "@/types/hour";
import { colors } from "@/config/colors";
import Icons from "./Icons";
import { useLangContext } from "@/contexts/lang-context";

type WeatherProp = {
	title: string;
	value: number;
	unit: string;
	icon: React.ReactElement;
};
const WeatherDetails = ({ data }: { data: Day | Hour }) => {
	const iconSetting = {
		size: 25,
		color: colors.gray[400],
	};
	const { t } = useLangContext();

	const propsData: WeatherProp[] = [
		{
			title: t("cloudyCover"),
			value: data?.cloudcover,
			unit: "%",
			icon: <Icons.CloudCover size={iconSetting.size} color={iconSetting.color} />,
		},
		{
			title: t("humidity"),
			value: data?.humidity,
			unit: "%",
			icon: <Icons.Humidity size={iconSetting.size} color={iconSetting.color} />,
		},
		{
			title: t("dewPoint"),
			value: data?.dew,
			unit: "°",
			icon: <Icons.Dew size={iconSetting.size} color={iconSetting.color} />,
		},
		{
			title: t("precipProb"),
			value: data?.precipprob,
			unit: "%",
			icon: <Icons.Precipprob size={iconSetting.size} color={iconSetting.color} />,
		},
		{
			title: t("snowProb"),
			value: data?.snow,
			unit: "%",
			icon: <Icons.Snow size={iconSetting.size} color={iconSetting.color} />,
		},
		{
			title: t("windSpeed"),
			value: data?.windspeed,
			unit: "km/h",
			icon: <Icons.WindSpeed size={iconSetting.size} color={iconSetting.color} />,
		},
		{
			title: t("windDir"),
			value: data?.winddir,
			unit: "°",
			icon: <Icons.WindDirection size={iconSetting.size} color={iconSetting.color} />,
		},
		{
			title: t("pressure"),
			value: data?.pressure,
			unit: "mb",
			icon: <Icons.Pressure size={iconSetting.size} color={iconSetting.color} />,
		},
		{
			title: t("visibility"),
			value: data?.visibility,
			unit: "km/h",
			icon: <Icons.Visibility size={iconSetting.size} color={iconSetting.color} />,
		},
		{
			title: t("uvIndex"),
			value: data?.uvindex,
			unit: "",
			icon: <Icons.UVIndex size={iconSetting.size} color={iconSetting.color} />,
		},
	];
	return (
		<View
			style={{
				borderRadius: 10,
				width: "100%",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			{propsData.map((prop: WeatherProp, index: number) => (
				<View key={index} style={styles.propWrapper}>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						{prop.icon}
						<Text style={styles.propTitle}>{prop.title}</Text>
					</View>
					<View style={{ flex: 1 }}>
						<Text style={styles.propValue}>
							{prop.value}
							{prop.unit}
						</Text>
					</View>
				</View>
			))}
		</View>
	);
};

export default WeatherDetails;

const styles = StyleSheet.create({
	propTitle: {
		marginLeft: 10,
		color: colors.gray[400],
	},
	propValue: {
		color: "white",
		textAlign: "right",
	},
	propWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
		marginTop: 20,
	},
});
