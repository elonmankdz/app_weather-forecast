import MistBg from "@/assets/bg_mist.jpg";
import ClearBg from "@/assets/bg_clear.jpg";
import DrizzleBg from "@/assets/bg_drizzle.jpg";
import FogBg from "@/assets/bg_fog.jpg";
import OvercastBg from "@/assets/bg_overcast.jpg";
import PartiallyCloudyBg from "@/assets/bg_partially_cloudy.jpg";
import RainBg from "@/assets/bg_rain.jpg";
import SnowBg from "@/assets/bg_snow.jpg";
import ThunderstormBg from "@/assets/bg_thunderstorm.jpg";
import { ImageSourcePropType } from "react-native";
import { TEMP_UNIT } from "@/enum";

export class WeatherUtils {
	public static formatTemperature(temperature: number, tempUnit: TEMP_UNIT) {
		if (tempUnit === TEMP_UNIT.Fahrenheit) {
			return Math.trunc(this.toFahrenheit(temperature));
		}
		return Math.trunc(temperature);
	}

	public static toFahrenheit(celsius: number) {
		return ((celsius ?? 0) * 9) / 5 + 32;
	}

	public static shortenConditions(conditions: string | null | undefined) {
		if (!conditions) {
			return "";
		}
		if (conditions.includes(",")) {
			return conditions.slice(0, conditions.indexOf(",")).trim();
		} else {
			return conditions.trim();
		}
	}

	public static backgroundImageMapper(condition: string): ImageSourcePropType {
		const imageMapper: any = {
			Mist: MistBg,
			Fog: FogBg,
			Clear: ClearBg,
			"Partially cloudy": PartiallyCloudyBg,
			Overcast: OvercastBg,
			// [CONDITION.HAIL]:,
			Thunderstorm: ThunderstormBg,
			// [CONDITION.SQUALLS]:,
			Snow: SnowBg,
			Rain: RainBg,
			Drizzle: DrizzleBg,
		};

		return imageMapper[condition] ?? RainBg;
	}
}
