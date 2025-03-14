export enum LANGUAGE {
	EN = "en", // English
	VI = "vi", // Vietnamese
}

export enum WEEK_DAY {
	TODAY = "Today",
	MON = "MON",
	TUE = "TUE",
	WED = "WED",
	THU = "THU",
	FRI = "FRI",
	SAT = "SAT",
	SUN = "SUN",
}

export enum HOUR_FORMAT {
	"24h" = "24-hour",
	"12h" = "12-hour"
}

export enum WIND_SPEED_UNIT {
	"KM/H" = "km/h",
	"M/H" = "m/h"
}

export enum LOCATION {
	AN_GIANG = "An Giang",
	VUNG_TAU = "Vũng Tàu",
	BAC_LIEU = "Bạc Liêu",
	BAC_GIANG = "Bắc Giang",
	BAC_KAN = "Bắc Kạn",
	BAC_NINH = "Bắc Ninh",
	BEN_TRE = "Bến Tre",
	BINH_DUONG = "Bình Dương",
	BINH_DINH = "Bình Định",
	BINH_PHUOC = "Bình Phước",
	BINH_THUAN = "Bình Thuận",
	CA_MAU = "Cà Mau",
	CAO_BANG = "Cao Bằng",
	CAN_THO = "Cần Thơ",
	DA_NANG = "Đà Nẵng",
	DAK_LAK = "Đắk Lắk",
	DAK_NONG = "Đắk Nông",
	DIEN_BIEN = "Điện Biên",
	DONG_NAI = "Đồng Nai",
	DONG_THAP = "Đồng Tháp",
	GIA_LAI = "Gia Lai",
	HA_GIANG = "Hà Giang",
	HA_NAM = "Hà Nam",
	HA_NOI = "Hà Nội",
	HA_TINH = "Hà Tĩnh",
	HAI_DUONG = "Hải Dương",
	HAI_PHONG = "Hải Phòng",
	HAU_GIANG = "Hậu Giang",
	HOA_BINH = "Hòa Bình",
	HUNG_YEN = "Hưng Yên",
	KHANH_HOA = "Khánh Hòa",
	KIEN_GIANG = "Kiên Giang",
	KOM_TUM = "Kon Tum",
	LAI_CHAU = "Lai Châu",
	LANG_SON = "Lạng Sơn",
	LAO_CAI = "Lào Cai",
	LAM_DONG = "Lâm Đồng",
	LONG_AN = "Long An",
	NAM_DINH = "Nam Định",
	NGHE_AN = "Nghệ An",
	NINH_BINH = "Ninh Bình",
	NINH_THUAN = "Ninh Thuận",
	PHU_THO = "Phú Thọ",
	PHU_YEN = "Phú Yên",
	QUANG_BINH = "Quảng Bình",
	QUANG_NAM = "Quảng Nam",
	QUANG_NGAI = "Quảng Ngãi",
	QUANG_NINH = "Quảng Ninh",
	QUANG_TRI = "Quảng Trị",
	SOC_TRANG = "Sóc Trăng",
	SON_LA = "Sơn La",
	TAY_NINH = "Tây Ninh",
	THAI_BINH = "Thái Bình",
	THAI_NGUYEN = "Thái Nguyên",
	THANH_HOA = "Thanh Hóa",
	THANH_PHO_HUE = "Thành phố Huế",
	TIEN_GIANG = "Tiền Giang",
	HO_CHI_MINH = "TP Hồ Chí Minh",
	TRA_VINH = "Trà Vinh",
	TUYEN_QUANG = "Tuyên Quang",
	VINH_LONG = "Vĩnh Long",
	VINH_PHUC = "Vĩnh Phúc",
	YEN_BAI = "Yên Bái",
}

export enum TEMP_UNIT {
	Celsius = "C",
	Fahrenheit = "F",
}

export enum CONDITION {
	MIST = "Mist",
	FOG = "Fog",
	CLEAR = "Clear",
	PARTIALLY_CLOUDY = "Partially cloudy",
	OVERCAST = "Overcast",
	HAIL = "Hail",
	THUNDERSTORM = "Thunderstorm",
	SQUALLS = "Squalls",
	SNOW = "Snow",
	RAIN = "Rain",
	DRIZZLE = "Drizzle",
	ICE = "Ice",
}

export enum WEATHER_PROPS {
	// MIN_TEMP = "Min temperature",
	// MAX_TEMP = "Max temperature",
	// CLOUD_COVER = "Cloudy cover",
	// FEEL_LIKE = "Feel like",
	// HUMIDITY = "Humidity",
	// SNOW = "Snow",
	// PRECIP_PROB = "Precip probability",
	// UV_INDEX = "UV index",
	// VISIBILITY = "Visibility",
	// WIND_DIRECTION = "Wind direction",
	// WIND_SPEED = "Wind speed",
	// SOLAR_ENERGY = "Solar energy"

	MIN_TEMP = "minTemp",
	MAX_TEMP = "maxTemp",
	CLOUD_COVER = "cloudyCover",
	DEW_POINT = "devPoint",
	PRESSURE = "pressure",
	FEEL_LIKE = "feelLike",
	HUMIDITY = "humidity",
	SNOW = "snow",
	PRECIP_PROB = "precipProb",
	SNOW_PROB = "snowProb",
	UV_INDEX = "uvIndex",
	VISIBILITY = "visibility",
	WIND_DIRECTION = "windDir",
	WIND_SPEED = "windSpeed",
	SOLAR_ENERGY = "solarEnergy"
}

export enum ALERT_TYPE {
	ERROR = "error",
	WARNINING = "warning",
	INFORMATION = "information"
}