import CustomDrawerContent from "@/components/CustomDrawerContent";
import Icons from "@/components/Icons";
import { colors } from "@/config/colors";
import { useLocationContext } from "@/contexts/location-context";
import { useWeatherContext } from "@/contexts/weather-context";
import DailyWeatherScreen from "@/screens/DailyWeatherScreen";
import HourlyWeatherScreen from "@/screens/HourlyWeatherScreen";
import LocationScreen from "@/screens/LocationSelectionScreen";
import LocationSearchingScreen from "@/screens/LocationSearchingScreen";
import SettingScreen from "@/screens/SettingScreen";
import WeatherDetailsScreen from "@/screens/WeatherDetailsScreen";
import WeatherPropsDescScreen from "@/screens/WeatherPropsDescScreen";
import WeatherTodayScreen from "@/screens/WeatherTodayScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigationState } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text, View } from "react-native";
import { useLangContext } from "@/contexts/lang-context";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
	const currentRoute = useNavigationState((state) => state?.routes[state?.index]?.name);
	const { t } = useLangContext();

	return (
		<Stack.Navigator
			screenOptions={{
				headerTintColor: "black",
				headerStyle: { backgroundColor: "white" },
			}}
		>
			<Stack.Screen
				name="Screens Drawer"
				component={ScreensDrawer}
				options={{
					title: t("dailyWeather"),
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Weather Details"
				component={WeatherDetailsScreen}
				options={{
					title: t("weatherDetails"),
					headerShown: true,
				}}
			/>
			<Stack.Screen
				name="Weather Props Description"
				component={WeatherPropsDescScreen}
				options={{
					title: t("weatherPropsDesc"),
					headerShown: true,
				}}
			/>
			<Stack.Screen
				name="Location Selection"
				component={LocationScreen}
				options={{
					title: t("locationSelection"),
					headerShown: true,
				}}
			/>
			<Stack.Screen
				name="Location Searching"
				component={LocationSearchingScreen}
				options={{
					title: t("locationSearching"),
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
};
const ScreensDrawer = ({ navigation }: { navigation: any }) => {
	const weatherDataCtx = useWeatherContext();
	const locationCtx = useLocationContext();
	const { t } = useLangContext();

	function onNavLocationSelect() {
		navigation.navigate("Location Selection");
	}
	return (
		<Drawer.Navigator
			drawerContent={(props) => <CustomDrawerContent {...props} />}
			screenOptions={{
				headerTintColor: "black",
				drawerInactiveTintColor: "black",
				drawerActiveTintColor: colors.blue.royal,
				drawerItemStyle: { borderRadius: 10, marginTop: 10 },
			}}
		>
			<Drawer.Screen
				name={"Weather Today"}
				component={WeatherTodayScreen}
				options={{
					title: t("weatherToday"),
					drawerIcon: ({ color, size }) => <Icons.Today color={color} size={size} />,
					headerTitle: () => (
						<Pressable
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}
							onPress={onNavLocationSelect}
						>
							<Icons.Location size={24} color={colors.yellow[700]} />
							<Text style={{ fontSize: 18, marginLeft: 8, color: "black" }}>
								{locationCtx.selectedLocation}
							</Text>
						</Pressable>
					),
					headerRight: () => (
						<Pressable
							style={{ marginRight: 15 }}
							onPress={weatherDataCtx?.switchWeatherNowDataDisplay}
						>
							{weatherDataCtx?.isWeatherNowShown ? (
								<Icons.EyeOpen size={40} />
							) : (
								<Icons.EyeClose size={40} />
							)}
						</Pressable>
					),
				}}
			/>
			<Drawer.Screen
				name={"Hourly Weather"}
				component={HourlyWeatherScreen}
				options={{
					title: t("hourlyWeather"),
					drawerIcon: ({ color, size }) => <Icons.Clock24h color={color} size={size} />,
				}}
			/>
			<Drawer.Screen
				name={"Daily Weather"}
				component={DailyWeatherScreen}
				options={{
					title: t("dailyWeather"),
					drawerIcon: ({ color, size }) => <Icons.Calendar color={color} size={size} />,
				}}
			/>
			<Drawer.Screen
				name={"Setting"}
				component={SettingScreen}
				options={{
					title: t("setting"),
					drawerIcon: ({ color, size }) => <Icons.Setting color={color} size={size} />,
				}}
			/>
		</Drawer.Navigator>
	);
};

export default StackNavigation;
