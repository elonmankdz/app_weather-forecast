import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import gStyles from "@/styles/gStyles";
import { WeatherUtils } from "@/utils/weatherUtils";
import WxConditionMapper from "./WxConditionMapper";
import { Hour } from "@/types/hour";
import { useSettingContext } from "@/contexts/setting-context";

const HourSelectionScrollBar = ({ hours, onChooseHour }: { hours: Hour[]; onChooseHour: any }) => {
	const { temperatureUnit } = useSettingContext();

	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false}>
			{hours.map((hour, index) => (
				<TouchableOpacity
					onPress={() => onChooseHour(hour.datetime)}
					key={index}
					style={{
						paddingHorizontal: 15,
						paddingVertical: 10,
						marginTop: 10,
						marginLeft: hour.datetime === "00:00:00" ? 0 : 10,
						borderRadius: 5,
						alignItems: "center",
					}}
				>
					<Text style={gStyles.textColor}>{hour.datetime.slice(0, 5)}</Text>
					<View style={{ marginTop: 10 }}>
						<WxConditionMapper
							condition={WeatherUtils.shortenConditions(hour.conditions)}
							size={40}
						/>
					</View>

					<Text style={[{ marginTop: 10 }, gStyles.textColor]}>
						{WeatherUtils.formatTemperature(hour.temp, temperatureUnit)}°{temperatureUnit}
					</Text>
				</TouchableOpacity>
			))}
		</ScrollView>
	);
};

export default HourSelectionScrollBar;
