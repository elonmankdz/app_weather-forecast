export class DateUtils {
	private static parseDate(datetime: Date | string) {
		let parsedDate: Date | null = null;
		if (typeof datetime === "string" && !isNaN(Date.parse(datetime))) {
			parsedDate = new Date(datetime);
		} else if (datetime instanceof Date && !isNaN(datetime.getTime())) {
			parsedDate = datetime;
		} else {
			return "Invalid date";
		}
		return parsedDate;
	}

	static toDate(date: Date | string) {
		const options: Intl.DateTimeFormatOptions = {
			weekday: "short",
			month: "short",
			day: "numeric",
		};

		const parsedDate = this.parseDate(date);
		if (typeof parsedDate === "string") {
			return "Invalid date";
		}
		const formattedDate = parsedDate.toLocaleDateString("en-US", options);
		return formattedDate;
	}

	static toTime(date: Date | string) {
		const parsedDate = this.parseDate(date);
		if (typeof parsedDate === "string") {
			return "Invalid date";
		}

		return parsedDate.toTimeString().slice(0, 5);
	}

	static isCurrentHour(datetime: string) {
		const targetHour: number = Number(datetime.slice(0, 2));
		const currentHour: number = new Date().getHours();
		return currentHour === targetHour;
	}

	static isCurrentDate(datetime: string) {
		const currentDate: number = new Date().getDate();
		const targetDate: number = Number(datetime.slice(8));
		return currentDate === targetDate;
	}
}
