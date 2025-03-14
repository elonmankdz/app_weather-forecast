import { View, Text } from "react-native";
import React from "react";
import { CONDITION } from "@/enum";
import Icons from "./Icons";
import WxCondIcons from "./WxCondIcons";

const WxConditionMapper = ({ condition, size = 50 }: { condition: string; size?: number }) => {
	const wxIconMapper: any = {
		[CONDITION.MIST]: <WxCondIcons.Fog size={size} />,
		[CONDITION.FOG]: <WxCondIcons.Fog size={size} />,
		[CONDITION.CLEAR]: <WxCondIcons.Clear size={size} />,
		[CONDITION.PARTIALLY_CLOUDY]: <WxCondIcons.PartiallyCloud size={size} />,
		[CONDITION.OVERCAST]: <WxCondIcons.Overcast size={size} />,
		[CONDITION.THUNDERSTORM]: <WxCondIcons.Thunderstorm size={size} />,
		[CONDITION.SNOW]: <WxCondIcons.Snow size={size} />,
		[CONDITION.RAIN]: <WxCondIcons.Rain size={size} />,
		[CONDITION.DRIZZLE]: <WxCondIcons.Rain size={size} />,
	};

	return wxIconMapper[condition] || <WxCondIcons.PartiallyCloud size={size} />;
};

export default WxConditionMapper;
