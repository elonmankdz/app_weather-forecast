import {
	View,
	Text,
	ImageBackground,
	ScrollView,
	TouchableOpacity,
	StyleSheet,
	ImageSourcePropType,
} from "react-native";
import React, { useState } from "react";
import { Hour } from "@/types/hour";
import Icons from "@/components/Icons";
import WxCondIcons from "@/components/WxCondIcons";
import { colors } from "@/config/colors";
import { DateUtils } from "@/utils/dateUtils";

import { Day } from "@/types/day";
import { WeatherUtils } from "@/utils/weatherUtils";
import WxConditionMapper from "@/components/WxConditionMapper";
import { useLangContext } from "@/contexts/lang-context";
import WeatherDetails from "@/components/WeatherDetails";
import gStyles from "@/styles/gStyles";
import { useSettingContext } from "@/contexts/setting-context";
import HourWeatherDataOverview from "@/components/HourWeatherDataOverview";

const WeatherDetailsScreen = ({ navigation, route }: { navigation: any; route: any }) => {
	const {
		dateTime,
		dayWeatherData,
		hourWeatherData,
	}: {
		dateTime: string;
		dayWeatherData: Day;
		hourWeatherData: Hour;
	} = route.params;
	const { t } = useLangContext();
	const { temperatureUnit } = useSettingContext();
	const [backgroundImage, setBackgroundImage] = useState<ImageSourcePropType>(
		WeatherUtils.backgroundImageMapper(
			WeatherUtils.shortenConditions(hourWeatherData.conditions ?? ""),
		),
	);

	return (
		<ImageBackground source={backgroundImage} style={gStyles.mainContainer}>
			<ScrollView>
				<View style={{ paddingHorizontal: 15, paddingVertical: 15 }}>
					<View style={{ marginTop: 10 }}>
						<HourWeatherDataOverview dayData={dayWeatherData} hourData={hourWeatherData} />
					</View>
					<View
						style={{
							backgroundColor: "rgba(0, 0, 0, 0.7)",
							borderRadius: 10,
							marginTop: 10,
							paddingBottom: 10,
						}}
					>
						<WeatherDetails data={hourWeatherData} />
					</View>
				</View>
			</ScrollView>
		</ImageBackground>
	);
};

export default WeatherDetailsScreen;
