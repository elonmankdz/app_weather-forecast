import { appConfig } from "@/config/appConfig";
import { LOCATION } from "@/enum";
import axios from "axios";

const WEATHER_API_URL = appConfig.WEATHER_API_URL;
const WEATHER_API_KEY = appConfig.WEATHER_API_KEY;

export class WeatherAPI {
	static async fetchWeather(location: LOCATION) {
		const params = new URLSearchParams();
		params.append("unitGroup", "metric");
		params.append("include", "hours%2Cdays%2Ccurrent");
		params.append("key", WEATHER_API_KEY);
		params.append("contentType", "json");

		const endpoint = `${WEATHER_API_URL}/${encodeURIComponent(location)}?unitGroup=metric&include=hours%2Cdays%2Ccurrent&key=${WEATHER_API_KEY}&contentType=json`;

		try {
			const response = await axios.get(endpoint);
			return response;
		} catch (error: any) {
			throw new Error();
		}
	}
}
