import { View } from "react-native";
import React from "react";
import Svg, { Path, G, Circle, Defs, Symbol, Use } from "react-native-svg";
import { SvgIconProps } from "@/types";

const FeelsLike = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 32 32">
				<Path
					fill={color}
					d="M26 30h-4a2.006 2.006 0 0 1-2-2v-7a2.006 2.006 0 0 1-2-2v-6a2.947 2.947 0 0 1 3-3h6a2.947 2.947 0 0 1 3 3v6a2.006 2.006 0 0 1-2 2v7a2.006 2.006 0 0 1-2 2m-5-18a.945.945 0 0 0-1 1v6h2v9h4v-9h2v-6a.945.945 0 0 0-1-1zm3-3a4 4 0 1 1 4-4a4.01 4.01 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2M10 20.184V12H8v8.184a3 3 0 1 0 2 0"
					stroke-width="1"
					stroke="currentColor"
				/>
				<Path
					fill={color}
					d="M9 30a6.993 6.993 0 0 1-5-11.89V7a5 5 0 0 1 10 0v11.11A6.993 6.993 0 0 1 9 30M9 4a3.003 3.003 0 0 0-3 3v11.983l-.332.299a5 5 0 1 0 6.664 0L12 18.983V7a3.003 3.003 0 0 0-3-3"
					stroke-width="1"
					stroke="currentColor"
				/>
			</Svg>
		</View>
	);
};

const Humidity = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 32 32">
				<Path
					fill={color}
					d="M23.476 13.993L16.847 3.437a1.04 1.04 0 0 0-1.694 0L8.494 14.044A10 10 0 0 0 7 19a9 9 0 0 0 18 0a10.06 10.06 0 0 0-1.524-5.007M16 26a7.01 7.01 0 0 1-7-7a8 8 0 0 1 1.218-3.943l.935-1.49l10.074 10.074A6.98 6.98 0 0 1 16 26.001"
					stroke-width="1"
					stroke="currentColor"
				/>
			</Svg>
		</View>
	);
};

const Pressure = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<Path
					fill={color}
					d="M20 14h2v2h-2c-1.38 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.63 1-4 1H2v-2h2c1.39 0 2.78-.47 4-1.33c2.44 1.71 5.56 1.71 8 0c1.22.86 2.61 1.33 4 1.33m0 6h2v2h-2c-1.38 0-2.74-.35-4-1c-2.5 1.3-5.5 1.3-8 0c-1.26.65-2.63 1-4 1H2v-2h2c1.39 0 2.78-.47 4-1.33c2.44 1.71 5.56 1.71 8 0c1.22.86 2.61 1.33 4 1.33M7 2L3 6h3v5h2V6h3m6-4l-4 4h3v5h2V6h3"
					stroke-width="0.5"
					stroke="currentColor"
				/>
			</Svg>
		</View>
	);
};

const Snow = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<G fill="none" fill-rule="evenodd">
					<Path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
					<Path
						fill={color}
						d="M12 2a1 1 0 0 1 1 1v.962l.654-.346a1 1 0 0 1 .935 1.768L13 6.224v1.902c.715.184 1.352.56 1.854 1.071l1.648-.951l-.067-1.796a1 1 0 0 1 1.999-.075l.027.74l.833-.481a1 1 0 1 1 1 1.732l-.833.48l.627.394a1 1 0 1 1-1.064 1.694l-1.522-.956l-1.647.95a4 4 0 0 1 0 2.143l1.647.951l1.522-.956a1 1 0 0 1 1.064 1.694l-.626.393l.832.481a1 1 0 1 1-1 1.732l-.832-.48l-.028.739a1 1 0 0 1-1.999-.075l.067-1.796l-1.648-.951c-.502.51-1.14.887-1.854 1.071v1.902l1.589.84a1 1 0 0 1-.935 1.768L13 20.038V21a1 1 0 1 1-2 0v-.962l-.654.346a1 1 0 1 1-.935-1.768l1.589-.84v-1.902a4 4 0 0 1-1.854-1.072l-1.648.952l.067 1.796a1 1 0 0 1-1.999.074l-.027-.739l-.833.48a1 1 0 1 1-1-1.731l.833-.481l-.627-.394a1 1 0 0 1 1.064-1.693l1.522.956l1.647-.951a4 4 0 0 1 0-2.142l-1.647-.95l-1.522.955a1 1 0 0 1-1.064-1.693l.627-.394l-.833-.48a1 1 0 0 1 1-1.733l.833.481l.027-.74a1 1 0 0 1 1.999.075l-.067 1.796l1.648.952A4 4 0 0 1 11 8.126V6.224l-1.589-.84a1 1 0 0 1 .935-1.768l.654.346V3a1 1 0 0 1 1-1m0 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
						stroke-width="0.5"
						stroke="currentColor"
					/>
				</G>
			</Svg>
		</View>
	);
};

const Dew = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 512 512">
				<Path
					fill={color}
					d="M20.44 20.26v64.66C130.8 72.49 291.4 112.6 370.5 191.6c-85.9-43.8-244.7-73.2-350.06-64v84.5C88.45 328.6 217.2 253.7 325.8 222c61-11.5 72.7 19.7 108.2 30.2c-11.5-20.6-22.4-39.3-32.8-56.3c23.3-9.9 39.8-33 39.8-59.9c0-35.8-29.2-65-65-65c-19.3 0-36.7 8.53-48.7 22c-58.6-64.95-101.4-66.71-157.4-72.74zM373.8 88.08c5.7-.07 11.6.94 17.7 3.27c-28.8 4.05-34.2 63.55 27 52.75c10.5-1.9-3.6 29.9-26.5 37.1c-19.5-31-37.3-55.8-53.7-75.6c9.1-10.29 21.4-17.33 35.5-17.52M432 286.5l-7.7 12.9s-12.3 20.4-24.5 46.8C387.6 372.7 375 405 375 432c0 14.7 7.7 28.4 18.2 38.8c10.4 10.5 24.1 18.2 38.8 18.2s28.4-7.7 38.8-18.2c10.5-10.4 18.2-24.1 18.2-38.8c0-27-12.6-59.3-24.8-85.8c-12.2-26.4-24.5-46.8-24.5-46.8zm-20.1 77c-16.6 49.1-12.6 99 58.7 72c-2.7 26.2-43.6 56.9-71.5 15.4c-12.1-18-12.7-50.1 12.8-87.4"
				/>
			</Svg>
		</View>
	);
};

const AddCircleFill = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<Path
					fill={color}
					fillRule="evenodd"
					d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10M12 7a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H8a1 1 0 1 1 0-2h3V8a1 1 0 0 1 1-1"
					clipRule="evenodd"
				/>
			</Svg>
		</View>
	);
};

const ArrowBack = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 1024 1024">
				<Path fill={color} d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64" />
				<Path
					fill={color}
					d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"
				/>
			</Svg>
		</View>
	);
};

const Search = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<G fill="none" stroke={color} strokeWidth="1.7">
					<Circle cx="11" cy="11" r="7" />
					<Path strokeLinecap="round" d="m20 20l-3-3" />
				</G>
			</Svg>
		</View>
	);
};

const Delete = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 14 14">
				<Path
					fill={color}
					fillRule="evenodd"
					d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z"
					clipRule="evenodd"
				/>
			</Svg>
		</View>
	);
};

const Precipprob = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
				<Path
					d="M20.0067 31.6667L20 23.3333M26.6734 35L26.6667 26.6667M13.34 28.3333L13.3334 20M33.0417 28.3333C40.5334 23.0667 33.8334 15.45 26.865 15.45C22.16 -2.88667 -5.44164 12.28 6.79003 26.1033"
					stroke={color}
					strokeWidth="2.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<Path
					d="M30.4062 6.8125C29.7417 6.8125 29.1745 6.5776 28.7047 6.10781C28.2349 5.63802 28 5.07083 28 4.40625C28 3.74167 28.2349 3.17448 28.7047 2.70469C29.1745 2.2349 29.7417 2 30.4062 2C31.0708 2 31.638 2.2349 32.1078 2.70469C32.5776 3.17448 32.8125 3.74167 32.8125 4.40625C32.8125 5.07083 32.5776 5.63802 32.1078 6.10781C31.638 6.5776 31.0708 6.8125 30.4062 6.8125ZM30.4062 5.4375C30.6927 5.4375 30.9363 5.33735 31.1371 5.13706C31.3378 4.93677 31.438 4.69317 31.4375 4.40625C31.437 4.11933 31.3369 3.87596 31.1371 3.67613C30.9372 3.47629 30.6936 3.37592 30.4062 3.375C30.1189 3.37408 29.8755 3.47446 29.6761 3.67613C29.4768 3.87779 29.3764 4.12117 29.375 4.40625C29.3736 4.69133 29.474 4.93494 29.6761 5.13706C29.8783 5.33919 30.1216 5.43933 30.4062 5.4375ZM36.5938 13C35.9292 13 35.362 12.7651 34.8922 12.2953C34.4224 11.8255 34.1875 11.2583 34.1875 10.5938C34.1875 9.92917 34.4224 9.36198 34.8922 8.89219C35.362 8.4224 35.9292 8.1875 36.5938 8.1875C37.2583 8.1875 37.8255 8.4224 38.2953 8.89219C38.7651 9.36198 39 9.92917 39 10.5938C39 11.2583 38.7651 11.8255 38.2953 12.2953C37.8255 12.7651 37.2583 13 36.5938 13ZM36.5938 11.625C36.8802 11.625 37.1238 11.5249 37.3246 11.3246C37.5253 11.1243 37.6255 10.8807 37.625 10.5938C37.6245 10.3068 37.5244 10.0635 37.3246 9.86362C37.1247 9.66379 36.8811 9.56342 36.5938 9.5625C36.3064 9.56158 36.063 9.66196 35.8636 9.86362C35.6642 10.0653 35.5639 10.3087 35.5625 10.5938C35.5611 10.8788 35.6615 11.1224 35.8636 11.3246C36.0657 11.5267 36.3091 11.6268 36.5938 11.625ZM28.9625 13L28 12.0375L38.0375 2L39 2.9625L28.9625 13Z"
					fill={color}
				/>
			</Svg>
		</View>
	);
};

const Sunrise = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<G fill="none">
					<Path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
					<Path
						fill={color}
						d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m3-2a1 1 0 0 1 .993.883L16 18v1a1 1 0 0 1-1.993.117L14 19v-1a1 1 0 0 1 1-1m-6 0a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m3-2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m-.5-13a6.5 6.5 0 0 1 6.086 4.212A6.002 6.002 0 0 1 19.6 16.799a1 1 0 1 1-1.202-1.598a4.001 4.001 0 0 0-1.744-7.147a1.01 1.01 0 0 1-.81-.733A4.5 4.5 0 0 0 7.027 9a1.01 1.01 0 0 1-.76 1.09A3.002 3.002 0 0 0 5.5 15.6a1 1 0 1 1-1.002 1.73A5 5 0 0 1 5 8.417A6.5 6.5 0 0 1 11.5 2M9 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6 0a1 1 0 0 1 .993.883L16 14v1a1 1 0 0 1-1.993.117L14 15v-1a1 1 0 0 1 1-1"
						stroke-width="0.5"
						stroke="currentColor"
					/>
				</G>
			</Svg>
		</View>
	);
};

const Sunset = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<Path
					fill={color}
					fill-rule="evenodd"
					d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0M11.25 6.803a5.25 5.25 0 0 0-3.398 8.416h8.296a5.25 5.25 0 0 0-3.398-8.416v4.386l.72-.72a.75.75 0 1 1 1.06 1.061l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72zM6.083 15.25a6.75 6.75 0 1 1 11.835 0H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-16 7a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m3 3a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
					clip-rule="evenodd"
				/>
			</Svg>
		</View>
	);
};

const Moonrise = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<Path
					fill={color}
					fill-rule="evenodd"
					d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0M11.25 6.803a5.25 5.25 0 0 0-3.398 8.416h8.296a5.25 5.25 0 0 0-3.398-8.416v4.386l.72-.72a.75.75 0 1 1 1.06 1.061l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72zM6.083 15.25a6.75 6.75 0 1 1 11.835 0H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-16 7a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m3 3a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
					clip-rule="evenodd"
				/>
			</Svg>
		</View>
	);
};

const Moonset = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<Path
					fill={color}
					fill-rule="evenodd"
					d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06m15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0M11.25 6.803a5.25 5.25 0 0 0-3.398 8.416h8.296a5.25 5.25 0 0 0-3.398-8.416v4.386l.72-.72a.75.75 0 1 1 1.06 1.061l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72zM6.083 15.25a6.75 6.75 0 1 1 11.835 0H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-16 7a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75m3 3a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
					clip-rule="evenodd"
				/>
			</Svg>
		</View>
	);
};

const Temp = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<Path
					fill={color}
					d="M8 5a4 4 0 1 1 8 0v5.255a7 7 0 1 1-8 0zm1.144 6.895a5 5 0 1 0 5.712 0L14 11.298V5a2 2 0 1 0-4 0v6.298zM8 16h8a4 4 0 0 1-8 0"
				/>
			</Svg>
		</View>
	);
};

const TempMax = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 32 32">
				<Path
					fill={color}
					d="M20 10h7v2h-7zm0 6h10v2H20zm0 6h7v2h-7zm-10-1.816V7H8v13.184a3 3 0 1 0 2 0"
				/>
				<Path
					fill={color}
					d="M30 4H12.974A4.983 4.983 0 0 0 4 7v11.11a7 7 0 1 0 10 0V7a5 5 0 0 0-.101-1H30ZM9 28a4.993 4.993 0 0 1-3.332-8.718L6 18.983V7a3 3 0 0 1 6 0v11.983l.332.299A4.993 4.993 0 0 1 9 28"
				/>
			</Svg>
		</View>
	);
};

const TempMin = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 32 32">
				<Path fill={color} d="M20 4h7v2h-7zm0 6h10v2H20zm0 6h7v2h-7zm-8 7a3 3 0 0 1-6 0z" />
				<Path
					fill={color}
					d="M30 22H15.92A7 7 0 0 0 14 18.11V7A5 5 0 0 0 4 7v11.11A6.995 6.995 0 1 0 15.92 24H30ZM9 28a4.993 4.993 0 0 1-3.332-8.718L6 18.983V7a3 3 0 0 1 6 0v11.983l.332.299A4.993 4.993 0 0 1 9 28"
				/>
			</Svg>
		</View>
	);
};

const UVIndex = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<Path
					fill="none"
					stroke={color}
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 12h1m16 0h1M5.6 5.6l.7.7m12.1-.7l-.7.7M8 12a4 4 0 1 1 8 0m-4-8V3m1 13l2 5h1l2-5M6 16v3a2 2 0 1 0 4 0v-3"
				/>
			</Svg>
		</View>
	);
};

const Visibility = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<Path
					fill={color}
					d="M12 16q1.875 0 3.188-1.312T16.5 11.5t-1.312-3.187T12 7T8.813 8.313T7.5 11.5t1.313 3.188T12 16m0-1.8q-1.125 0-1.912-.788T9.3 11.5t.788-1.912T12 8.8t1.913.788t.787 1.912t-.787 1.913T12 14.2m0 4.8q-3.65 0-6.65-2.037T1 11.5q1.35-3.425 4.35-5.462T12 4t6.65 2.038T23 11.5q-1.35 3.425-4.35 5.463T12 19m0-2q2.825 0 5.188-1.487T20.8 11.5q-1.25-2.525-3.613-4.012T12 6T6.813 7.488T3.2 11.5q1.25 2.525 3.613 4.013T12 17"
				/>
			</Svg>
		</View>
	);
};

const WindDirection = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 2048 2048">
				<Path fill={color} d="m1024 0l683 2048l-683-683l-683 683z" />
			</Svg>
		</View>
	);
};

const Today = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 56 56">
				<Path
					fill={color}
					d="M11.992 49.97h32.016c4.899 0 7.36-2.438 7.36-7.266V14.086c0-4.828-2.461-7.265-7.36-7.265H11.992c-4.875 0-7.36 2.414-7.36 7.265v28.618c0 4.851 2.485 7.265 7.36 7.265m-.328-3.774c-2.086 0-3.258-1.102-3.258-3.281V20.813c0-2.156 1.172-3.281 3.258-3.281h32.649c2.085 0 3.28 1.125 3.28 3.281v22.102c0 2.18-1.195 3.28-3.28 3.28zm11.742-20.25h1.383c.82 0 1.102-.235 1.102-1.055v-1.383c0-.82-.281-1.078-1.102-1.078h-1.383c-.82 0-1.078.258-1.078 1.078v1.383c0 .82.258 1.055 1.078 1.055m7.805 0h1.36c.843 0 1.101-.235 1.101-1.055v-1.383c0-.82-.258-1.078-1.102-1.078h-1.359c-.82 0-1.101.258-1.101 1.078v1.383c0 .82.28 1.055 1.101 1.055m7.781 0h1.383c.82 0 1.102-.235 1.102-1.055v-1.383c0-.82-.282-1.078-1.102-1.078h-1.383c-.82 0-1.101.258-1.101 1.078v1.383c0 .82.281 1.055 1.101 1.055M15.625 33.61h1.383c.82 0 1.102-.234 1.102-1.055v-1.383c0-.82-.282-1.054-1.102-1.054h-1.383c-.82 0-1.101.234-1.101 1.054v1.383c0 .82.28 1.055 1.101 1.055m7.781 0h1.383c.82 0 1.102-.234 1.102-1.055v-1.383c0-.82-.281-1.054-1.102-1.054h-1.383c-.82 0-1.078.234-1.078 1.054v1.383c0 .82.258 1.055 1.078 1.055m8.485 1.896a3.642 3.642 0 1 0 0-7.284a3.642 3.642 0 0 0 0 7.284m7.101-1.896h1.383c.82 0 1.102-.234 1.102-1.055v-1.383c0-.82-.282-1.054-1.102-1.054h-1.383c-.82 0-1.101.234-1.101 1.054v1.383c0 .82.281 1.055 1.101 1.055m-23.367 7.687h1.383c.82 0 1.102-.257 1.102-1.078v-1.383c0-.82-.282-1.054-1.102-1.054h-1.383c-.82 0-1.101.234-1.101 1.054v1.383c0 .82.28 1.078 1.101 1.078m7.781 0h1.383c.82 0 1.102-.257 1.102-1.078v-1.383c0-.82-.281-1.054-1.102-1.054h-1.383c-.82 0-1.078.234-1.078 1.054v1.383c0 .82.258 1.078 1.078 1.078m7.805 0h1.36c.843 0 1.101-.257 1.101-1.078v-1.383c0-.82-.258-1.054-1.102-1.054h-1.359c-.82 0-1.101.234-1.101 1.054v1.383c0 .82.28 1.078 1.101 1.078"
				/>
			</Svg>
		</View>
	);
};

const WindSpeed = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 14 14">
				<Path
					fill="none"
					stroke={color}
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M7.5.5a1.75 1.75 0 0 1 0 3.5h-7m11.25 6.5a1.75 1.75 0 0 0 0-3.5H2m5.25 6.5a1.75 1.75 0 0 0 0-3.5H1.5"
					strokeWidth="1"
				/>
			</Svg>
		</View>
	);
};

const SolarEnergy = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<G
					fill="none"
					stroke={color}
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
				>
					<Path d="m3.32 12.774l7.906 7.905c.427.428 1.12.428 1.548 0l7.905-7.905a1.095 1.095 0 0 0 0-1.548l-7.905-7.905a1.095 1.095 0 0 0-1.548 0l-7.905 7.905a1.095 1.095 0 0 0 0 1.548zM8 12h7.5" />
					<Path d="m12 8.5l3.5 3.5l-3.5 3.5" />
				</G>
			</Svg>
		</View>
	);
};

const Sun = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 64 64">
				<Path
					fill="#fbb041"
					d="M62.713 30.827L50.77 27.352a21.2 21.2 0 0 0-2.311-5.603q2.981-5.462 5.967-10.922c.544-.996-.541-2.086-1.539-1.538l-10.878 5.974a20.9 20.9 0 0 0-5.673-2.362c-1.183-4.03-2.365-8.06-3.548-12.1c-.313-1.071-1.853-1.075-2.168 0c-1.173 4.04-2.349 8.07-3.524 12.11a21.1 21.1 0 0 0-5.576 2.316c-3.666-2-7.333-4.01-10.999-6.01c-.994-.543-2.085.543-1.537 1.541l6.03 10.978a21 21 0 0 0-2.324 5.634L.805 30.854c-1.07.314-1.076 1.856 0 2.168l11.889 3.459a21.3 21.3 0 0 0 2.389 5.729q-2.967 5.426-5.932 10.854c-.546.996.539 2.087 1.537 1.54q5.42-2.978 10.841-5.953a21 21 0 0 0 5.636 2.332q1.74 5.945 3.483 11.883c.315 1.074 1.856 1.076 2.168 0q1.729-5.933 3.454-11.867a21.1 21.1 0 0 0 5.697-2.353l10.774 5.888a.95.95 0 0 0 .739.211c.272-.016.514-.141.702-.325c.208-.192.35-.451.367-.745a.96.96 0 0 0-.218-.743c-1.966-3.583-3.937-7.169-5.904-10.754a21.3 21.3 0 0 0 2.338-5.679c3.98-1.168 7.966-2.336 11.947-3.502c1.073-.314 1.077-1.857.002-2.17"
				/>
				<Circle cx="31.553" cy="31.836" r="17.901" fill="#f9ec21" />
			</Svg>
		</View>
	);
};

const SnowDepth = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<G fill="none">
					<Path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
					<Path
						fill={color}
						d="M8 16a1 1 0 0 1 1 1v.268l.232-.134a1 1 0 1 1 1 1.732L10 19l.232.134a1 1 0 0 1-1 1.732L9 20.732V21a1 1 0 1 1-2 0v-.268l-.232.134a1 1 0 1 1-1-1.732L6 19l-.232-.134a1 1 0 1 1 1-1.732l.232.134V17a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v.268l.232-.134a1 1 0 1 1 1 1.732L18 19l.232.134a1 1 0 0 1-1 1.732L17 20.732V21a1 1 0 1 1-2 0v-.268l-.232.134a1 1 0 1 1-1-1.732L14 19l-.232-.134a1 1 0 1 1 1-1.732l.232.134V17a1 1 0 0 1 1-1M11.5 2a6.5 6.5 0 0 1 6.086 4.212a6.002 6.002 0 0 1 2.61 10.077a3 3 0 0 0-1.916-1.239a3 3 0 0 0-1.549-.96a3 3 0 0 0-.17-1.09a3 3 0 0 0-.23-2.5a3 3 0 0 0-2.05-1.45A3 3 0 0 0 12 8c-.913 0-1.73.407-2.28 1.05a3 3 0 0 0-2.05 1.45a3 3 0 0 0-.23 2.5a3 3 0 0 0-.171 1.09a3 3 0 0 0-1.55.96a3 3 0 0 0-2.05 1.45l-.082.154A5 5 0 0 1 5 8.416A6.5 6.5 0 0 1 11.5 2m.5 8a1 1 0 0 1 1 1v.268l.232-.134a1 1 0 1 1 1 1.732L14 13l.232.134a1 1 0 0 1-1 1.732L13 14.732V15a1 1 0 1 1-2 0v-.268l-.232.134a1 1 0 1 1-1-1.732L10 13l-.232-.134a1 1 0 1 1 1-1.732l.232.134V11a1 1 0 0 1 1-1"
					/>
				</G>
			</Svg>
		</View>
	);
};

const CloudCover = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<Path
					fill={color}
					d="M6.5 20q-2.275 0-3.887-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.312 3.188T18.5 20zm0-2h12q1.05 0 1.775-.725T21 15.5t-.725-1.775T18.5 13H17v-2q0-2.075-1.463-3.538T12 6T8.463 7.463T7 11h-.5q-1.45 0-2.475 1.025T3 14.5t1.025 2.475T6.5 18m5.5-6"
				/>
			</Svg>
		</View>
	);
};

const SunRain = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 128 128">
				<Path
					fill="#70b2e2"
					d="M22.95 92.28c-.21-.08-.44-.12-.66-.1c-1.31.09-8.15 6.19-9.94 10.59c-1.22 3 .23 6.43 3.23 7.65s6.44-.23 7.66-3.23c1.35-3.33 1.72-14.09-.29-14.91m21.73 16.2c-.21-.09-.44-.12-.66-.1c-1.31.09-8.15 6.19-9.94 10.59c-1.22 3 .23 6.43 3.23 7.65s6.44-.23 7.66-3.23c1.35-3.32 1.72-14.09-.29-14.91m26.99-11.59c-.21-.09-.44-.12-.66-.11c-1.31.09-8.15 6.19-9.94 10.59c-1.22 3 .23 6.43 3.23 7.65s6.44-.23 7.66-3.23c1.35-3.32 1.72-14.08-.29-14.9m24.56 7.09c-.21-.08-.44-.12-.66-.1c-1.31.09-8.15 6.19-9.94 10.59c-1.22 2.99.23 6.43 3.23 7.65s6.44-.23 7.66-3.23c1.35-3.33 1.72-14.1-.29-14.91"
				/>
				<Path
					fill="#ffb74d"
					d="M79.04 20c-11.86 0-21.48 9.61-21.48 21.47s9.62 21.48 21.48 21.48s21.47-9.62 21.47-21.48C100.52 29.61 90.91 20 79.04 20m-4.62-3.92h9.24c.43 0 .83-.21 1.07-.57c.24-.34.3-.79.15-1.19L80.27 1.8c-.19-.51-.68-.86-1.22-.86c-.55 0-1.04.34-1.22.86L73.2 14.33c-.14.4-.09.85.15 1.19c.24.36.65.56 1.07.56m25.85 10.71a1.3 1.3 0 0 0 1.15.36c.42-.08.77-.35.95-.74l5.59-12.13c.23-.49.12-1.08-.26-1.47a1.3 1.3 0 0 0-1.47-.26L94.1 18.14c-.38.18-.66.53-.73.95c-.08.42.06.85.36 1.16zm18.45 13.46l-12.53-4.62c-.4-.15-.85-.09-1.2.16s-.56.64-.56 1.07v9.25a1.296 1.296 0 0 0 1.31 1.3c.15 0 .3-.03.45-.08l12.53-4.62c.51-.19.85-.68.85-1.23c0-.56-.34-1.05-.85-1.23m-16.35 16.29c-.18-.39-.54-.67-.95-.74c-.42-.08-.85.06-1.15.36l-6.54 6.55c-.3.29-.44.73-.36 1.15c.07.42.35.78.73.96l12.13 5.59a1.33 1.33 0 0 0 1.47-.25c.39-.39.49-.97.26-1.47zM83.66 66.86h-9.25c-.42 0-.83.21-1.07.56s-.3.8-.16 1.2l4.63 12.53c.19.51.67.85 1.22.85s1.03-.34 1.22-.85l4.63-12.53c.15-.4.09-.85-.16-1.2a1.24 1.24 0 0 0-1.06-.56M57.82 56.15c-.31-.3-.73-.43-1.15-.36s-.77.35-.96.74l-5.59 12.13a1.3 1.3 0 0 0 1.73 1.73l12.13-5.59c.39-.18.66-.54.74-.96c.07-.42-.06-.85-.36-1.15zm-5.46-8.75c.26 0 .52-.08.74-.23c.35-.24.56-.65.56-1.07l-.01-9.25c0-.43-.21-.83-.56-1.07s-.8-.3-1.2-.15l-12.53 4.62c-.51.19-.85.68-.85 1.23c0 .54.34 1.03.85 1.23l12.53 4.62c.16.04.31.07.47.07m3.36-20.99c.18.39.54.66.95.74c.08.01.16.02.23.02c.35 0 .68-.13.92-.38l6.54-6.54c.3-.3.43-.73.36-1.16c-.07-.42-.35-.78-.74-.95l-12.13-5.59a1.3 1.3 0 0 0-1.73 1.73z"
				/>
				<Path
					fill="#e3ebee"
					d="M95.72 52.87c-.01-.06 0-.11 0-.17c0-7.64-6.19-13.83-13.83-13.83c-.98 0-1.94.11-2.87.3c-2.74-6.67-9.29-11.37-16.95-11.37c-5.75 0-10.88 2.65-14.24 6.8c-2.16-1.1-4.6-1.73-7.2-1.73c-8.28 0-15.07 6.31-15.86 14.37c-9.01.47-16.23 7.85-16.35 17c-.12 9.54 7.51 17.37 17.05 17.49c.74.01 1.47-.04 2.18-.12c3.68 7.77 11.6 13.14 20.77 13.14c5.53 0 10.61-1.96 14.57-5.21c3.03 2.24 6.77 3.59 10.83 3.59c8.33 0 15.35-5.59 17.53-13.22c1.37.46 2.84.71 4.36.71c7.66 0 13.87-6.21 13.87-13.87c.02-7.66-6.2-13.88-13.86-13.88"
				/>
				<Path
					fill="#b9cdd2"
					d="M103.88 55.52c3.14 3.17.92 10.45-1.24 12.83c-4.25 4.66-12.06 3.57-15.2 2.9c-.85-.18-.98-.12-1.26.05c-.25.15-.36.39-.63.96c-1.01 2.17-3.61 6.39-9.11 8.09c-5.73 1.77-11.14-.92-13.67-2.54c-.96-.61-1-.62-1.43-.62c-.44 0-.88.33-1.39.74c-2.28 1.8-7.51 4.97-15.56 4.51c-7.9-.45-12.41-5.32-13.96-7.82c-.3-.48-.62-.88-.98-.92c-.42-.04-.89.39-1.25.74c-3.36 3.27-13.93 4.25-17.44-1.32c3.56 5.72 9.07 8.55 14.73 8.62c.74.01 1.47-.04 2.18-.12c3.68 7.77 11.6 13.14 20.77 13.14c5.53 0 10.61-1.96 14.57-5.21c3.03 2.24 6.77 3.59 10.83 3.59c8.33 0 15.35-5.59 17.53-13.22c1.37.46 2.84.71 4.36.71c7.66 0 13.87-6.21 13.87-13.87c0-4.09-2.05-8.7-5.72-11.24"
				/>
			</Svg>
		</View>
	);
};

// const Today = ({ size = 30, color = "black" }: SvgIconProps) => {
// 	return (
// 		<View>
// 			<Svg width={size} height={size} viewBox="0 0 24 24">
// 				<Path
// 					fill={color}
// 					d="M9 16.5q-1.05 0-1.775-.725T6.5 14t.725-1.775T9 11.5t1.775.725T11.5 14t-.725 1.775T9 16.5M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v14q0 .825-.587 1.413T19 22zm0-2h14V10H5z"
// 				/>
// 			</Svg>
// 		</View>
// 	);
// };

const Setting = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<Path
					fill={color}
					d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
				/>
			</Svg>
		</View>
	);
};

const Menu = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<Path fill={color} d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
			</Svg>
		</View>
	);
};

const Information = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<G fill="none" stroke={color} strokeLinejoin="round" strokeWidth="1">
					<Circle cx="12" cy="12" r="9" strokeLinecap="round" strokeWidth="1.7" />
					<Path strokeWidth="3" d="M12 8h.01v.01H12z" />
					<Path strokeLinecap="round" strokeWidth="1.7" d="M12 12v4" />
				</G>
			</Svg>
		</View>
	);
};

const Close = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<Path
					fill={color}
					d="M3 16.74L7.76 12L3 7.26L7.26 3L12 7.76L16.74 3L21 7.26L16.24 12L21 16.74L16.74 21L12 16.24L7.26 21zm9-3.33l4.74 4.75l1.42-1.42L13.41 12l4.75-4.74l-1.42-1.42L12 10.59L7.26 5.84L5.84 7.26L10.59 12l-4.75 4.74l1.42 1.42z"
				/>
			</Svg>
		</View>
	);
};

const Clock24h = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<G fill="none">
					<Path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
					<Path
						fill={color}
						d="M18.243 14.03a1 1 0 0 1 .727 1.213L18.28 18H19v-1a1 1 0 1 1 2 0v1a1 1 0 1 1 0 2v1a1 1 0 1 1-2 0v-1h-2a1 1 0 0 1-.97-1.242l1-4a1 1 0 0 1 1.212-.728ZM13.5 14a2.5 2.5 0 0 1 2.495 2.336L16 16.5v.325c0 .6-.19 1.181-.541 1.663l-.14.175L14.175 20H15a1 1 0 0 1 .117 1.993L15 22h-3a1 1 0 0 1-.837-1.548l.078-.103l2.56-2.987a.83.83 0 0 0 .19-.42l.009-.117V16.5a.5.5 0 0 0-1 0a1 1 0 1 1-2 0a2.5 2.5 0 0 1 2.5-2.5M12 3c4.195 0 7.717 2.87 8.716 6.75a1 1 0 1 1-1.937.5A7 7 0 1 0 8.5 18.064a1 1 0 0 1-1 1.73A9 9 0 0 1 12 3m0 4a1 1 0 0 1 .993.883L13 8v4a1 1 0 0 1-.883.993L12 13h-2a1 1 0 0 1-.117-1.993L10 11h1V8a1 1 0 0 1 1-1"
					/>
				</G>
			</Svg>
		</View>
	);
};

const Calendar = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<Path
					fill={color}
					d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"
				/>
				<Path
					fill={color}
					d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2M19 8l.001 12H5V8z"
				/>
			</Svg>
		</View>
	);
};

const EyeClose = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<Path
					fill={color}
					d="M16.125 6.143A8 8 0 0 0 12 5a8 8 0 0 0-4.124 1.143a1 1 0 1 0 1.033 1.714A6 6 0 0 1 11.999 7a6 6 0 0 1 3.094.857a1 1 0 0 0 1.032-1.714M5.356 10.565a1 1 0 0 0-.803.04l-1 .5a1 1 0 1 0 .894 1.79l.11-.056c.13.226.288.48.475.751l-.17.143a1 1 0 0 0 1.282 1.534l.173-.144c.367.358.785.71 1.257 1.028l-.2.362a1 1 0 0 0 1.752.965l.234-.424a7.7 7.7 0 0 0 1.64.386V18a1 1 0 1 0 2 0v-.56a7.7 7.7 0 0 0 1.64-.386l.234.424a1 1 0 0 0 1.752-.965l-.2-.362c.473-.318.89-.67 1.258-1.028l.173.144a1 1 0 1 0 1.282-1.534l-.17-.143c.186-.271.344-.525.473-.75l.111.054a1 1 0 1 0 .894-1.788l-1-.5a1 1 0 0 0-.802-.04a1 1 0 0 0-.514.454a3 3 0 0 0-.133.262l-.023.05q-.043.098-.087.183c-.135.26-.343.625-.629 1.03c-.577.816-1.442 1.749-2.626 2.342A5.8 5.8 0 0 1 12 15.5a5.8 5.8 0 0 1-2.633-.613c-1.184-.593-2.048-1.526-2.626-2.343c-.318-.449-.61-.923-.813-1.418a1 1 0 0 0-.572-.56"
				/>
			</Svg>
		</View>
	);
};

const EyeOpen = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<Path
					fill={color}
					d="M13 6a1 1 0 1 0-2 0v.56a7.7 7.7 0 0 0-1.64.386l-.234-.424a1 1 0 0 0-1.752.965l.2.362c-.472.318-.89.67-1.257 1.028l-.173-.144a1 1 0 0 0-1.283 1.534l.171.143l-.585.696a1 1 0 1 0-.894 1.788l1 .5a1 1 0 0 0 1.376-.523c.74-1.556 1.872-2.973 3.438-3.758A5.8 5.8 0 0 1 12 8.5a5.8 5.8 0 0 1 2.633.613c1.419.71 2.531 1.974 3.255 3.372l.093.189c.152.317.299.622.664.76a1 1 0 0 0 .802-.04l1-.5a1 1 0 1 0-.894-1.788l-.11.055c-.13-.226-.288-.48-.475-.751l.171-.143a1 1 0 0 0-1.282-1.534l-.174.144a9 9 0 0 0-1.256-1.028l.2-.362a1 1 0 1 0-1.753-.965l-.233.424A7.7 7.7 0 0 0 13 6.561z"
				/>
				<Path fill={color} d="M12 18.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7" />
			</Svg>
		</View>
	);
};

const ArrowDown = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 32 32">
				<Path
					fill={color}
					d="M8.037 11.166L14.5 22.36c.825 1.43 2.175 1.43 3 0l6.463-11.195c.826-1.43.15-2.598-1.5-2.598H9.537c-1.65 0-2.326 1.17-1.5 2.6z"
				/>
			</Svg>
		</View>
	);
};

const Location = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 16 16">
				<Path
					fill={color}
					d="m12.596 11.596l-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193a6.5 6.5 0 0 1 0 9.193m-1.06-8.132a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072M8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9"
				/>
			</Svg>
		</View>
	);
};

const Language = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 24 24">
				<Path
					fill={color}
					d="M12 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T2 12q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 2q2.075 0 3.888.788t3.174 2.15t2.15 3.175T22 12q0 2.05-.788 3.875t-2.15 3.188t-3.175 2.15T12 22m0-2.05q.65-.9 1.125-1.875T13.9 16h-3.8q.3 1.1.775 2.075T12 19.95m-2.6-.4q-.45-.825-.787-1.713T8.05 16H5.1q.725 1.25 1.813 2.175T9.4 19.55m5.2 0q1.4-.45 2.488-1.375T18.9 16h-2.95q-.225.95-.562 1.838T14.6 19.55M4.25 14h3.4q-.075-.5-.112-.987T7.5 12t.038-1.012T7.65 10h-3.4q-.125.5-.187.988T4 12t.063 1.013t.187.987m5.4 0h4.7q.075-.5.113-.987T14.5 12t-.038-1.012T14.35 10h-4.7q-.075.5-.112.988T9.5 12t.038 1.013t.112.987m6.7 0h3.4q.125-.5.188-.987T20 12t-.062-1.012T19.75 10h-3.4q.075.5.113.988T16.5 12t-.038 1.013t-.112.987m-.4-6h2.95q-.725-1.25-1.812-2.175T14.6 4.45q.45.825.788 1.713T15.95 8M10.1 8h3.8q-.3-1.1-.775-2.075T12 4.05q-.65.9-1.125 1.875T10.1 8m-5 0h2.95q.225-.95.563-1.838T9.4 4.45Q8 4.9 6.912 5.825T5.1 8"
				/>
			</Svg>
		</View>
	);
};

const Overcast = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 512 512">
				<Defs>
					<Symbol id="g" viewBox="0 0 200.3 126.1">
						<Path
							fill="url(#b)"
							stroke="#848b98"
							strokeMiterlimit={10}
							d="M.5 93.2a32.4 32.4 0 0032.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 006.5-68.9 32.4 32.4 0 00-48.5-33 48.6 48.6 0 00-88.6 37.1h-1.5A32.4 32.4 0 00.5 93.1Z"
						/>
					</Symbol>
					<Symbol id="h" viewBox="0 0 350 222">
						<Path
							fill="url(#a)"
							stroke="#e6effc"
							strokeMiterlimit={10}
							strokeWidth={6}
							d="m291 107-2.5.1A83.9 83.9 0 00135.6 43 56 56 0 0051 91a56.6 56.6 0 00.8 9A60 60 0 0063 219l4-.2v.2h224a56 56 0 000-112Z"
						/>
					</Symbol>
					<Symbol id="f" viewBox="0 0 398 222">
						<Use xlinkHref="#g" width={200.3} height={126.1} transform="translate(198 27)" />
						<Use xlinkHref="#h" width={350} height={222} />
					</Symbol>
					<Symbol id="i" viewBox="0 0 168 212">
						<Circle
							cx={86}
							cy={186}
							r={24}
							fill="url(#c)"
							strokeMiterlimit={10}
							strokeWidth={4}
						/>
						<Circle
							cx={38}
							cy={122}
							r={36}
							fill="url(#c)"
							strokeMiterlimit={10}
							strokeWidth={4}
						/>
						<Circle
							cx={118}
							cy={50}
							r={48}
							fill="url(#c)"
							strokeMiterlimit={10}
							strokeWidth={4}
						/>
					</Symbol>
				</Defs>
				<Use xlinkHref="#f" width={398} height={222} transform="translate(68.84 145)" />
				<Use xlinkHref="#i" width={168} height={212} transform="translate(172 232)" />
			</Svg>
		</View>
	);
};

const Rain = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 128 128">
				<Path
					fill="#e2ebee"
					d="M107.62 46.29s1.72-32.32-23.89-38.72C54.12.17 48.29 28.49 48.29 28.49s-11.55-2.19-18.74 5.62c-6.03 6.55-5.46 12.96-5.46 12.96s-7.96-1.72-14.21 3.75s-5.31 10.61-5.31 10.61l18.58 7.18s93.83.47 94.3.16s6.25-9.37 6.25-9.37s-.94-7.81-6.4-10.93c-5.47-3.12-9.68-2.18-9.68-2.18"
				/>
				<Path
					fill="#b9ced2"
					d="M14.25 73.45c4.68.16 35.29.78 53.86.62s46.81.14 50.73-1.71c3.07-1.45 4.9-3.85 5.19-7.21c.28-3.21-.34-5.75-.34-5.75s-4.37 3.16-12.65 3.28c-5.15.07-15.61-.78-13.58-2.65c.57-.53 8.66-6.66 8.27-12.33c-.09-1.34-7.34 5.31-14.21 8.12s-13.39 4.98-22.47 4.4c-7.65-.5-10.97-3.61-10.97-3.61s-3.69 4.33-14.78 5.26c-11.09.94-13.48-3.23-13.48-3.23s-5.37 4.06-14.39 3.94c-9-.14-10.77-3.38-10.77-3.38s-.85 5.77 1.03 9.14c1.92 3.43 5.41 5.01 8.56 5.11"
				/>
				<Path
					fill="#4fc4f8"
					d="M69.99 81.57c-1.71-.6-7.81 4.23-10.56 9c-2.76 4.79-.96 8.29 1.99 9.73c3.32 1.62 8.1.62 9.46-4.1c1.34-4.67.95-13.98-.89-14.63m-32.33-2.38c-1.55-.55-6.58 4.12-8.84 6.64c-3.03 3.39-5.37 9.71.38 12.27c5.79 2.57 9.55-1.64 9.84-7.46c.28-5.42-.1-10.99-1.38-11.45m12.21 22.46c-1.65-.89-8.58 5.26-10.79 8.93c-2.2 3.67-2.06 8.38 2.44 10.31s8.47-.54 9.3-6.97c.58-4.56.64-11.41-.95-12.27m33.51.53c-1.19-.67-9.43 5.69-11.28 10.32c-3.67 9.19 8.87 13.29 11.72 4.65c1.66-5.04 1.03-14.14-.44-14.97m20.49-19.81c-1.63-1-8.48 4.64-10.76 8.88c-2.88 5.36-.64 9.4 2.5 10.68c3.26 1.32 7.45.05 8.87-4.78c2.05-6.96.97-13.8-.61-14.78"
				/>
				<Path
					fill="#aee6fd"
					d="M96.4 91.09c-1.08.13-2.42 1.67-2.63 4.3s1.45 3.96 3.13 3.29c1.58-.63 1.84-2.88 1.84-4.3s-.67-3.5-2.34-3.29M63 90.26c-1.14-.32-3.26 1.44-3.63 4.29c-.29 2.2.56 3.53 2.27 3.66c2.38.18 3.13-2.75 3.07-4.54c-.04-1.02-.22-2.99-1.71-3.41m-20.55 19.53c-1.06-.08-2.84 1.7-2.84 4.47s1.44 3.97 3.14 3.6c1.7-.38 2.04-3.63 1.93-4.92s-.66-3.03-2.23-3.15M30.91 88.44c-1.43-.41-3.26 1.4-3.48 3.44c-.23 2.04.72 3.52 2.23 3.75s2.8-1.59 2.95-3.71c.16-2.12-.37-3.11-1.7-3.48m45.49 22.53c-1.32-.11-3.21 1.84-3.16 4.79s1.58 3.45 2.59 3.51c1.45.09 2.46-1.62 2.59-4.3c.11-2.25-.4-3.87-2.02-4"
				/>
			</Svg>
		</View>
	);
};

const Icons = {
	FeelsLike,
	Humidity,
	Pressure,
	Snow,
	Precipprob,
	Sunrise,
	Sunset,
	Moonrise,
	Moonset,
	Temp,
	TempMax,
	TempMin,
	UVIndex,
	Visibility,
	WindDirection,
	WindSpeed,
	SolarEnergy,
	Sun,
	CloudCover,
	SunRain,
	Today,
	Setting,
	Clock24h,
	Calendar,
	Location,
	Rain,
	Overcast,
	Information,
	EyeOpen,
	EyeClose,
	Dew,
	SnowDepth,
	Menu,
	Close,
	Language,
	ArrowDown,
	AddCircleFill,
	ArrowBack,
	Search,
	Delete,
};

export default Icons;
