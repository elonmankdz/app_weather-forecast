import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, StyleSheet, Image, Text } from "react-native";
import Logo from "@/assets/logo.png";
import { useLangContext } from "@/contexts/lang-context";

const CustomDrawerContent = (props: any) => {
	const { t } = useLangContext();

	return (
		<DrawerContentScrollView {...props}>
			<View style={styles.header}>
				<Image source={Logo} style={styles.picture} />
				<Text style={{ fontSize: 20, fontWeight: "bold" }}>{t("appName")}</Text>
			</View>
			<View style={{ marginTop: 20 }}>
				<DrawerItemList {...props} />
			</View>
		</DrawerContentScrollView>
	);
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
	header: {
		alignItems: "center",
		overflow: "hidden",
	},
	icon: {
		height: 30,
		width: 30,
	},
	iconGroup: {
		backgroundColor: "black",
		marginVertical: 10,
		paddingHorizontal: 15,
		paddingVertical: 10,
		width: "100%",
	},
	iconWrapper: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
	},
	name: {
		color: "black",
		fontSize: 20,
		fontWeight: "bold",
	},
	picture: {
		borderRadius: 10,
		height: 60,
		marginBottom: 10,
		width: 60,
	},
});
