import { dummyWeatherData } from "@/constants/dummyWeatherData";
import { WeatherData } from "@/types/weatherData";
import React, { createContext, ReactElement, ReactNode, useContext, useState } from "react";
import { BackHandler, Linking, Text } from "react-native";

export type WeatherContextProps = {
	init: (weatherData: WeatherData) => void;
	weatherData: WeatherData;
	isWeatherNowShown: boolean;
	switchWeatherNowDataDisplay: () => void;
};
export const WeatherContext = createContext<WeatherContextProps>(dummyWeatherData);

const WeatherContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [weatherData, setWeatherData] = useState<WeatherData>(dummyWeatherData);
	const [selectedWeatherHour, setSelectedWeatherHour] = useState<null>(null);
	const [selectedWeatherDay, setSelectedWeatherDay] = useState<null>(null);
	const [isWeatherNowShown, setIsWeatherNowShown] = useState(true);

	function switchWeatherNowDataDisplay() {
		setIsWeatherNowShown((prevValue) => !prevValue);
	}

	async function init(weatherData: WeatherData) {
		setWeatherData(weatherData);
	}

	const value = {
		weatherData,
		init,
		isWeatherNowShown,
		switchWeatherNowDataDisplay,
	};

	return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
};

export default WeatherContextProvider;

export const useWeatherContext = () => useContext(WeatherContext);
