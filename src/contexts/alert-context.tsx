import { ALERT_TYPE, HOUR_FORMAT, LANGUAGE, TEMP_UNIT, WIND_SPEED_UNIT } from "@/enum";
import { WeatherData } from "@/types/weatherData";
import React, { createContext, ReactElement, ReactNode, useContext, useState } from "react";

export type AlertContextProps = {
	isShown: boolean;
	push: (title: string, content: string, buttonTitle: string, onPressed: () => void) => void;
	title: string;
	content: string;
	buttonTitle: string | null;
	alertType: ALERT_TYPE;
	onPressed: () => void | null;
	close: () => void;
};

export const AlertContext = createContext<AlertContextProps>({
	isShown: false,
	push: () => {},
	title: "",
	content: "",
	buttonTitle: "",
	onPressed: () => {},
	alertType: ALERT_TYPE.INFORMATION,
	close: () => {},
});

const AlertContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isShown, setIsShown] = useState(false);
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");
	const [buttonTitle, setButtonTitle] = useState<string | null>(null);
	const [onPressed, setOnPressed] = useState<() => void | null>(() => {});
	const [alertType, setAlertType] = useState<ALERT_TYPE>(ALERT_TYPE.INFORMATION);

	function push(
		title: string,
		content: string,
		buttonTitle: string = "Ok",
		onPressed?: () => void,
	) {
		setTitle(title);
		setContent(content);
		setButtonTitle(buttonTitle);
		setOnPressed(() => (onPressed ? () => onPressed() : () => close()));
		setIsShown(true);
	}

	function close() {
		setTitle("");
		setContent("");
		setButtonTitle(null);
		setOnPressed(() => {});
		setIsShown(false);
	}

	return (
		<AlertContext.Provider
			value={{
				isShown,
				push,
				title,
				content,
				buttonTitle,
				onPressed,
				alertType,
				close,
			}}
		>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertContextProvider;

export const useAlertContext = () => useContext(AlertContext);
