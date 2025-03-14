import { HOUR_FORMAT, LANGUAGE, TEMP_UNIT, WIND_SPEED_UNIT } from "@/enum";
import { WeatherData } from "@/types/weatherData";
import React, { createContext, ReactElement, ReactNode, useContext, useState } from "react";

export type SettingContextProps = {
	language: LANGUAGE;
	temperatureUnit: TEMP_UNIT;
	setLanguage: React.Dispatch<React.SetStateAction<LANGUAGE>>;
	setTemperatureUnit: React.Dispatch<React.SetStateAction<TEMP_UNIT>>;
};

export const SettingContext = createContext<SettingContextProps>({
	language: LANGUAGE.EN,
	temperatureUnit: TEMP_UNIT.Celsius,
	setLanguage: () => {},
	setTemperatureUnit: () => {},
});

const SettingContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [language, setLanguage] = useState<LANGUAGE>(LANGUAGE.EN);
	const [temperatureUnit, setTemperatureUnit] = useState<TEMP_UNIT>(TEMP_UNIT.Celsius);

	return (
		<SettingContext.Provider
			value={{
				language,
				setLanguage,
				temperatureUnit,
				setTemperatureUnit,
			}}
		>
			{children}
		</SettingContext.Provider>
	);
};

export default SettingContextProvider;

export const useSettingContext = () => useContext(SettingContext);
