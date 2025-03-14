export class TextUtils {
	public static balanceText(text: string | undefined | null) {
		if (!text) {
			return "";
		}
		const words = text.split(" ");
		const midIndex = Math.ceil(words.length / 2);

		const line1 = words.slice(0, midIndex).join(" ");
		const line2 = words.slice(midIndex).join(" ");

		return `${line1}\n${line2}`; // Returns text with a line break
	}
}
