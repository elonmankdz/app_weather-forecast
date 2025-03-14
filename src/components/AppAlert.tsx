import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import gStyles from "@/styles/gStyles";
import { ALERT_TYPE } from "@/enum";
import { colors } from "@/config/colors";
import { useAlertContext } from "@/contexts/alert-context";

const AppAlert = () => {
	const [titleColor, setTitleColor] = useState<string>(colors.yellow[400]);
	const [titleBgColor, setTitleBgColor] = useState<
		"rgba(255, 0, 0, 0.1)" | "rgba(255, 255, 0, 0.1)" | "rgba(0, 0, 255, 0.1)"
	>("rgba(0, 0, 255, 0.1)");
	const alertCtx = useAlertContext();

	useEffect(() => {
		if (alertCtx.alertType === ALERT_TYPE.ERROR) {
			setTitleBgColor("rgba(255, 0, 0, 0.1)");
			setTitleColor("red");
		} else if (alertCtx.alertType === ALERT_TYPE.WARNINING) {
			setTitleBgColor("rgba(255, 255, 0, 0.1)");
			setTitleColor(colors.yellow[400]);
		} else {
			setTitleBgColor("rgba(0, 0, 255, 0.1)");
			setTitleColor(colors.blue.royal);
		}
	}, [alertCtx.alertType]);
	return (
		<View
			style={[
				gStyles.centered,
				gStyles.mainContainer,
				{
					backgroundColor: "rgba(0, 0, 0, 0.7)",
					position: "absolute",
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
				},
			]}
		>
			<View
				style={{
					width: "80%",
					alignItems: "center",
					borderRadius: 10,
					borderColor: titleColor,
					borderStyle: "solid",
					borderWidth: 2,
					backgroundColor: "white",
				}}
			>
				<View
					style={[
						styles.titleContainer,
						{ backgroundColor: titleBgColor, borderColor: titleColor },
					]}
				>
					<Text style={[styles.title, { color: titleColor }]}>{alertCtx.title}</Text>
				</View>
				<View style={styles.contentContainer}>
					<Text style={[{ textAlign: "center" }, styles.content]}>{alertCtx.content}</Text>
					<Pressable
						onPress={alertCtx.onPressed}
						style={{
							marginTop: 20,
							padding: 5,
							paddingHorizontal: 15,
							backgroundColor: titleBgColor,
							borderRadius: 5,
							borderWidth: 1,
							borderColor: titleColor,
							borderStyle: "solid",
						}}
					>
						<Text style={{ fontSize: 17, fontWeight: "bold" }}>{alertCtx.buttonTitle}</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
};

export default AppAlert;

const styles = StyleSheet.create({
	titleContainer: {
		paddingVertical: 20,
		paddingHorizontal: 10,
		width: "100%",
		alignItems: "center",
		borderBottomWidth: 2,
		borderStyle: "solid",
	},
	title: {
		fontWeight: "bold",
		fontSize: 20,
	},
	content: {
		fontSize: 17,
	},
	contentContainer: {
		width: "100%",
		alignItems: "center",
		paddingVertical: 20,
		paddingHorizontal: 10,
	},
});
