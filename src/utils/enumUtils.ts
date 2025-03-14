import { CONDITION, LOCATION } from "@/enum";

export default class EnumUtils {
	public static toLocationEnum(rawStr: string): LOCATION {
		return rawStr as LOCATION;
	}

	public static toConditionEnum(rawStr: string): CONDITION {
		return rawStr as CONDITION;
	}
}
