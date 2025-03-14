import { appConfig } from "@/config/appConfig";
import { LANGUAGE } from "@/enum";
import axios from "axios";

const ggApiKey = appConfig.GG_API_KEY;

export default class TranslationApi {
	static async translateText(
		q: string | null | undefined,
		lang: LANGUAGE | undefined,
	): Promise<string> {
		const url = "https://translation.googleapis.com/language/translate/v2";
		const queryParams = new URLSearchParams({
			q: q ?? "",
			target: lang ?? LANGUAGE.EN,
			key: ggApiKey,
		}).toString();

		if (lang === LANGUAGE.EN) {
			return q ?? "";
		}

		try {
			const response: any = await axios.post<Response>(`${url}?${queryParams}`);
			return response.data.data.translations[0].translatedText;
		} catch {
			return q ?? "";
		}
	}
}
