import { CONDITION, HOUR_FORMAT, LANGUAGE, LOCATION, TEMP_UNIT, WIND_SPEED_UNIT } from "@/enum";
import { WeatherData } from "@/types/weatherData";
import React, { createContext, ReactElement, ReactNode, useContext, useState } from "react";

export type LocationContextProps = {
	selectedLocation: LOCATION;
	searchedLocationResults: SearchedLocationResult[];
	selectLocation: (location: LOCATION) => void;
	addSearchedLocationResult: (searchedLocationResult: SearchedLocationResult) => void;
	deleteSeachedResults: () => void;
};

export type SearchedLocationResult = {
	location: LOCATION;
	updatedAt: Date;
	currTemp: number;
	maxTemp: number;
	minTemp: number;
	condition: CONDITION;
};

export const LocationContext = createContext<LocationContextProps>({
	selectedLocation: LOCATION.HA_NOI,
	searchedLocationResults: [],
	selectLocation: (location: LOCATION) => {},
	addSearchedLocationResult: (searchedLocationResult: SearchedLocationResult) => {},
	deleteSeachedResults: () => {},
});

const LocationContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [selectedLocation, setSelectedLocation] = useState<LOCATION>(LOCATION.HA_NOI);
	const [searchedLocationResults, setSearchedLocationResults] = useState<SearchedLocationResult[]>(
		[
			{
				location: LOCATION.HA_NOI,
				updatedAt: new Date(),
				currTemp: 23,
				maxTemp: 18,
				minTemp: 10,
				condition: CONDITION.RAIN,
			},
			{
				location: LOCATION.BAC_GIANG,
				updatedAt: new Date(),
				currTemp: 23,
				maxTemp: 18,
				minTemp: 10,
				condition: CONDITION.DRIZZLE,
			},
		],
	);

	function selectLocation(location: LOCATION) {
		setSelectedLocation(location);

		const isIncluded: SearchedLocationResult | undefined = searchedLocationResults.find(
			(result: SearchedLocationResult) => result.location === location,
		);
		if (isIncluded) {
			let tempSearchedLocationResults: SearchedLocationResult[] = searchedLocationResults;
			const removedSearchedLocationResult: SearchedLocationResult | undefined =
				tempSearchedLocationResults.find(
					(result: SearchedLocationResult) => result.location === location,
				);
			tempSearchedLocationResults = searchedLocationResults.filter(
				(result: SearchedLocationResult) => result.location !== location,
			);
			if (removedSearchedLocationResult === undefined) {
				return;
			}

			setSearchedLocationResults([
				removedSearchedLocationResult,
				...tempSearchedLocationResults,
			]);
		}
	}

	function addSearchedLocationResult(searchedLocationResult: SearchedLocationResult) {
		const isIncluded: SearchedLocationResult | undefined = searchedLocationResults.find(
			(result: SearchedLocationResult) => result.location === searchedLocationResult.location,
		);
		if (isIncluded === undefined) {
			setSearchedLocationResults((prevData) => [searchedLocationResult, ...prevData]);
		}
	}

	function deleteSeachedResults() {
		setSearchedLocationResults((prevData) => {
			const tempResults: SearchedLocationResult[] = [];
			const currentLocationResult: SearchedLocationResult | undefined = prevData.find(
				(result) => result.location === selectedLocation,
			);
			if (currentLocationResult) {
				tempResults.push(currentLocationResult);
				return tempResults;
			} else {
				return [];
			}
		});
	}
	return (
		<LocationContext.Provider
			value={{
				selectedLocation,
				searchedLocationResults,
				selectLocation,
				addSearchedLocationResult,
				deleteSeachedResults,
			}}
		>
			{children}
		</LocationContext.Provider>
	);
};

export default LocationContextProvider;

export const useLocationContext = () => useContext(LocationContext);
