import { LOCATION } from "@/enum";
import { Day } from "./day";
import { CurrentConditions } from "./currentConditions";

export type WeatherData = {
	resolvedAddress: string;
	location: LOCATION;
	currentConditions: CurrentConditions;
	days: Day[];
};
