import React, { useEffect, useState } from "react";
import IntroScreen from "@/screens/IntroScreen";
import { WeatherAPI } from "@/api/weatherApi";
import { NavigationContainer } from "@react-navigation/native";
import { useWeatherContext } from "@/contexts/weather-context";
import StackNavigation from "./StackNavigation";
import { SearchedLocationResult, useLocationContext } from "@/contexts/location-context";
import { WeatherData } from "@/types/weatherData";
import { WeatherUtils } from "@/utils/weatherUtils";
import EnumUtils from "@/utils/enumUtils";
import { Alert, BackHandler, View } from "react-native";
import AppAlert from "@/components/AppAlert";
import { useAlertContext } from "@/contexts/alert-context";

const MainScreenController = () => {
	const locationCtx = useLocationContext();
	const weatherDataCtx = useWeatherContext();
	const [isWeatcherDataLoading, setIsWeatherDataLoading] = useState(false);
	const alertCtx = useAlertContext();

	useEffect(() => {
		setIsWeatherDataLoading(true);
		WeatherAPI.fetchWeather(locationCtx.selectedLocation)
			.then((res) => {
				const weatherData: WeatherData = res.data;
				weatherDataCtx?.init(weatherData);
				setTimeout(() => {
					setIsWeatherDataLoading(false);
					const seachedLocationResult: SearchedLocationResult = {
						location: locationCtx.selectedLocation,
						updatedAt: new Date(),
						currTemp: weatherData.days[0].feelslike,
						maxTemp: weatherData.days[0].feelslikemax,
						minTemp: weatherData.days[0].feelslikemin,
						condition: EnumUtils.toConditionEnum(
							WeatherUtils.shortenConditions(weatherData.days[0].conditions),
						),
					};

					locationCtx.addSearchedLocationResult(seachedLocationResult);
				}, 2000);
			})
			.catch(() => {
				alertCtx.push(
					"Internet connection error",
					"Load weather data failed\nPlease check internet connection",
					"Exit",
					() => BackHandler.exitApp(),
				);
			});
	}, [locationCtx.selectedLocation]);

	return (
		<NavigationContainer>
			{isWeatcherDataLoading ? <IntroScreen /> : <StackNavigation />}
			{alertCtx.isShown && <AppAlert />}
		</NavigationContainer>
	);
};

export default MainScreenController;
