import { View, Text, Image, StatusBar } from "react-native";
import Logo from "@/assets/logo.png";
import WeatherContextProvider from "./contexts/weather-context";
import LocationContextProvider from "./contexts/location-context";
import LangContextProvider from "./contexts/lang-context";
import "./i18n"; // Import the i18n configuration
import SettingContextProvider from "./contexts/setting-context";
import AlertContextProvider from "./contexts/alert-context";
import MainScreenController from "./navigations/MainScreenController";

export default function App() {
	return (
		<>
			<StatusBar />
			<AlertContextProvider>
				<SettingContextProvider>
					<LangContextProvider>
						<WeatherContextProvider>
							<LocationContextProvider>
								<View style={{ width: "100%", flex: 1, position: "relative" }}>
									<MainScreenController />
								</View>
							</LocationContextProvider>
						</WeatherContextProvider>
					</LangContextProvider>
				</SettingContextProvider>
			</AlertContextProvider>
		</>
	);
}
