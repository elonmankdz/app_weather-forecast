import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	Image,
	Animated,
	Easing,
	ActivityIndicator,
} from "react-native";
import React, { useEffect, useRef } from "react";
import Logo from "@/assets/logo.png";
import Icons from "@/components/Icons";
import Bg from "@/assets/bg_clear.jpg";
import WxCondIcons from "@/components/WxCondIcons";
import { useEvent } from "react-native-reanimated";
import { useLangContext } from "@/contexts/lang-context";
import gStyles from "@/styles/gStyles";

const IntroScreen = () => {
	const rotateAnim = useRef(new Animated.Value(0)).current;
	const { t } = useLangContext();

	useEffect(() => {
		const startRotation = () => {
			Animated.loop(
				Animated.timing(rotateAnim, {
					toValue: 1,
					duration: 2000,
					easing: Easing.linear,
					useNativeDriver: true,
				}),
			).start();
		};

		startRotation();
	}, [rotateAnim]);

	const rotateInterpolation = rotateAnim.interpolate({
		inputRange: [0, 1],
		outputRange: ["0deg", "360deg"],
	});

	return (
		<ImageBackground style={[gStyles.mainContainer, gStyles.centered]} source={Bg}>
			<View
				style={{
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<View
					style={{
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Image source={Logo} style={{ borderRadius: 10 }} />
					<Text
						style={{ fontSize: 25, fontWeight: "bold", textAlign: "center", marginTop: 10 }}
					>
						{t("appName")}
					</Text>
				</View>
				<Animated.View
					style={{
						marginTop: 20,
						position: "relative",
						transform: [{ rotate: rotateInterpolation }],
					}}
				>
					<WxCondIcons.Clear size={70} />
				</Animated.View>
			</View>
			<View
				style={{
					position: "absolute",
					bottom: 0,
					left: 0,
					width: "100%",
					alignItems: "center",
					justifyContent: "center",
					height: "50%",
				}}
			>
				<ActivityIndicator size={50} />
			</View>
		</ImageBackground>
	);
};

export default IntroScreen;
