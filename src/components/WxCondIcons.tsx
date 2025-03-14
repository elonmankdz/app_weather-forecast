import { View } from "react-native";
import React from "react";
import Svg, {
	Path,
	Mask,
	G,
	Circle,
	Rect,
	Defs,
	Stop,
	Symbol,
	Use,
	LinearGradient,
	ClipPath,
} from "react-native-svg";
import { SvgIconProps } from "@/types";

const Snow = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 128 128">
				<G fill="#95c8ec">
					<Path d="M27.6 94.42c.86 1.46.63 3.18-.51 3.85s-2.76.04-3.62-1.41l-8.92-15.13c-.86-1.45-.63-3.18.51-3.85s2.76-.04 3.62 1.42z" />
					<Path d="M29.83 85.6c1.69-.01 3.07 1.04 3.08 2.37c.01 1.32-1.35 2.41-3.03 2.42l-17.56.16c-1.69.01-3.07-1.04-3.08-2.37c-.01-1.32 1.34-2.41 3.04-2.42z" />
					<Path d="M23.31 79.25c.83-1.47 2.44-2.13 3.59-1.48s1.41 2.37.58 3.84L18.84 96.9c-.83 1.47-2.44 2.14-3.59 1.49s-1.41-2.37-.58-3.84zm22.16 43.44c.86 1.46.63 3.18-.51 3.85s-2.76.04-3.62-1.42L32.43 110c-.86-1.45-.63-3.18.51-3.85s2.76-.04 3.62 1.42z" />
					<Path d="M47.71 113.87c1.69-.01 3.07 1.04 3.08 2.37c.01 1.32-1.34 2.41-3.03 2.42l-17.56.17c-1.69.01-3.07-1.05-3.08-2.37s1.34-2.41 3.03-2.42z" />
					<Path d="M41.18 107.52c.83-1.47 2.44-2.13 3.59-1.48s1.41 2.37.58 3.84l-8.64 15.29c-.83 1.47-2.44 2.14-3.59 1.48c-1.15-.65-1.41-2.37-.58-3.84zm29.34-3.63c.86 1.45.63 3.18-.51 3.85s-2.76.04-3.62-1.41L57.48 91.2c-.86-1.45-.63-3.18.51-3.85s2.76-.04 3.62 1.42z" />
					<Path d="M72.76 95.07c1.68-.02 3.06 1.04 3.08 2.37c.01 1.32-1.34 2.41-3.03 2.42l-17.56.16c-1.69.02-3.07-1.04-3.08-2.36s1.34-2.41 3.04-2.42z" />
					<Path d="M66.24 88.72c.83-1.47 2.44-2.13 3.59-1.48s1.41 2.37.58 3.84l-8.64 15.29c-.83 1.47-2.44 2.14-3.59 1.48c-1.15-.65-1.41-2.37-.58-3.84zm47.03 7.7c.86 1.45.63 3.18-.51 3.85s-2.76.04-3.62-1.42l-8.92-15.13c-.86-1.45-.63-3.18.51-3.85s2.76-.04 3.62 1.42z" />
					<Path d="M115.5 87.6c1.69-.02 3.07 1.04 3.08 2.37c.01 1.32-1.34 2.41-3.03 2.42l-17.56.16c-1.69.01-3.07-1.04-3.08-2.37c-.01-1.32 1.35-2.41 3.04-2.43z" />
					<Path d="M108.98 81.25c.83-1.47 2.44-2.13 3.59-1.48c1.16.65 1.41 2.37.58 3.84l-8.64 15.29c-.83 1.47-2.44 2.14-3.59 1.49s-1.41-2.37-.58-3.84zM94.2 122.64c.86 1.45.63 3.18-.51 3.85s-2.76.04-3.62-1.42l-8.92-15.13c-.86-1.45-.63-3.17.51-3.85c1.14-.67 2.76-.04 3.62 1.42z" />
					<Path d="M96.43 113.82c1.69-.01 3.07 1.04 3.08 2.37c.01 1.32-1.34 2.41-3.03 2.42l-17.56.16c-1.69.01-3.07-1.04-3.08-2.37c-.01-1.32 1.35-2.41 3.04-2.43z" />
					<Path d="M89.91 107.47c.83-1.47 2.44-2.13 3.59-1.48s1.41 2.37.58 3.84l-8.64 15.29c-.83 1.47-2.44 2.14-3.59 1.48c-1.15-.65-1.41-2.37-.58-3.84z" />
				</G>
				<Path
					fill="#e3ebee"
					d="M109.96 31.71h-.01c0-.07.01-.14.01-.21c0-9.56-7.75-17.32-17.32-17.32c-1.23 0-2.43.13-3.59.38C85.62 6.22 77.42.33 67.83.33c-7.2 0-13.62 3.32-17.82 8.51C47.3 7.47 44.25 6.67 41 6.67c-10.36 0-18.87 7.89-19.86 17.99C9.86 25.26.82 34.5.67 45.95c-.15 11.94 9.4 21.74 21.34 21.9c.93.01 1.84-.05 2.74-.16c4.61 9.73 14.52 16.46 26 16.46c6.93 0 13.28-2.45 18.24-6.53c3.8 2.81 8.48 4.49 13.56 4.49c10.43 0 19.21-7 21.94-16.55c1.72.57 3.55.89 5.46.89c9.59 0 17.37-7.78 17.37-17.37c.01-9.59-7.77-17.37-17.36-17.37"
				/>
				<Path
					fill="#b9cdd2"
					d="M120.16 35.03c3.93 3.97 1.15 13.09-1.56 16.06c-5.32 5.83-15.1 4.47-19.02 3.63c-1.06-.23-1.23-.15-1.58.06c-.31.19-.45.49-.79 1.2c-1.27 2.72-4.52 8-11.41 10.13c-7.18 2.22-13.94-1.16-17.11-3.18c-1.2-.76-1.25-.78-1.8-.78c-.55.01-1.1.41-1.74.92c-2.86 2.25-9.4 6.22-19.48 5.65c-9.89-.57-15.54-6.66-17.48-9.79c-.37-.6-.77-1.1-1.23-1.15c-.53-.05-1.12.49-1.56.93c-4.21 4.1-17.44 5.32-21.83-1.65c4.46 7.16 11.36 10.7 18.44 10.79c.93.01 1.84-.05 2.74-.16c4.61 9.73 14.52 16.46 26 16.46c6.93 0 13.28-2.45 18.24-6.53c3.8 2.81 8.48 4.49 13.56 4.49c10.43 0 19.21-7 21.94-16.55c1.72.57 3.55.89 5.46.89c9.59 0 17.37-7.78 17.37-17.37c.01-5.11-2.56-10.87-7.16-14.05"
				/>
			</Svg>
		</View>
	);
};

const Thunderstorm = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 512 512">
				<Defs>
					<Symbol id="meteoconsThunderstormsExtremeFill0" viewBox="0 0 200.3 126.1">
						<Path
							fill="url(#meteoconsThunderstormsExtremeFill5)"
							stroke="#848b98"
							strokeMiterlimit={10}
							d="M.5 93.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5A32.4 32.4 0 0 0 .5 93.1Z"
							strokeWidth={1}
						/>
					</Symbol>
					<Symbol id="meteoconsThunderstormsExtremeFill1" viewBox="0 0 350 222">
						<Path
							fill="url(#meteoconsThunderstormsExtremeFill6)"
							stroke="#5b6472"
							strokeMiterlimit={10}
							strokeWidth={6}
							d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
						/>
					</Symbol>
					<Symbol id="meteoconsThunderstormsExtremeFill2" viewBox="0 0 398 222">
						<Use
							width={200.3}
							height={126.1}
							href="#meteoconsThunderstormsExtremeFill0"
							transform="translate(198 27)"
						></Use>
						<Use width={350} height={222} href="#meteoconsThunderstormsExtremeFill1"></Use>
					</Symbol>
					<Symbol id="meteoconsThunderstormsExtremeFill3" viewBox="0 0 102.7 186.8">
						<Path
							fill="url(#meteoconsThunderstormsExtremeFill7)"
							stroke="#f6a823"
							strokeMiterlimit={10}
							strokeWidth={4}
							d="m34.8 2l-32 96h32l-16 80l80-112h-48l32-64h-48z"
						></Path>
					</Symbol>
					<LinearGradient
						id="meteoconsThunderstormsExtremeFill5"
						x1={52.7}
						x2={133.4}
						y1={9.6}
						y2={149.3}
						gradientUnits="userSpaceOnUse"
					>
						<Stop offset={0} stopColor="#9ca3af" />
						<Stop offset={0.5} stopColor="#9ca3af" />
						<Stop offset={1} stopColor="#6b7280" />
					</LinearGradient>
					<LinearGradient
						id="meteoconsThunderstormsExtremeFill6"
						x1={99.5}
						x2={232.6}
						y1={30.7}
						y2={261.4}
						gradientUnits="userSpaceOnUse"
					>
						<Stop offset={0} stopColor="#6b7280" />
						<Stop offset={0.5} stopColor="#6b7280" />
						<Stop offset={1} stopColor="#4b5563" />
					</LinearGradient>
					<LinearGradient
						id="meteoconsThunderstormsExtremeFill7"
						x1={8.7}
						x2={80.9}
						y1={17.1}
						y2={142.1}
						gradientUnits="userSpaceOnUse"
					>
						<Stop offset={0} stopColor="#f7b23b" />
						<Stop offset={0.5} stopColor="#f7b23b" />
						<Stop offset={1} stopColor="#f59e0b" />
					</LinearGradient>
				</Defs>
				<Use
					width={398}
					height={222}
					href="#meteoconsThunderstormsExtremeFill2"
					transform="translate(68.84 145)"
				/>
				<Use
					width={102.7}
					height={186.7}
					href="#meteoconsThunderstormsExtremeFill3"
					transform="translate(205.23 291)"
				/>
			</Svg>
		</View>
	);
};

const Rain = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
				<Path
					d="M33.2349 16.4854C33.2349 16.4854 33.7724 6.38538 25.7693 4.38538C16.5161 2.07289 14.6943 10.9229 14.6943 10.9229C14.6943 10.9229 11.0849 10.2385 8.83801 12.6791C6.95363 14.726 7.13176 16.7291 7.13176 16.7291C7.13176 16.7291 4.64426 16.1916 2.69113 17.901C0.73801 19.6104 1.03176 21.2166 1.03176 21.2166L6.83801 23.4604C6.83801 23.4604 36.1599 23.6073 36.3068 23.5104C36.4536 23.4135 38.2599 20.5823 38.2599 20.5823C38.2599 20.5823 37.9661 18.1416 36.2599 17.1666C34.5505 16.1916 33.2349 16.4854 33.2349 16.4854Z"
					fill="#E2EBEE"
				/>
				<Path
					d="M4.05677 24.9729C5.51927 25.0229 15.0849 25.2166 20.888 25.1666C26.6911 25.1166 35.5161 25.2104 36.7411 24.6323C37.7005 24.1791 38.2724 23.4291 38.363 22.3791C38.4505 21.376 38.2568 20.5823 38.2568 20.5823C38.2568 20.5823 36.8911 21.5698 34.3036 21.6073C32.6943 21.6291 29.4255 21.3635 30.0599 20.7791C30.238 20.6135 32.7661 18.6979 32.6443 16.926C32.6161 16.5073 30.3505 18.5854 28.2036 19.4635C26.0568 20.3416 24.0193 21.0198 21.1818 20.8385C18.7911 20.6823 17.7536 19.7104 17.7536 19.7104C17.7536 19.7104 16.6005 21.0635 13.1349 21.3541C9.66927 21.6479 8.9224 20.3448 8.9224 20.3448C8.9224 20.3448 7.24427 21.6135 4.42552 21.576C1.61302 21.5323 1.0599 20.5198 1.0599 20.5198C1.0599 20.5198 0.794271 22.3229 1.38177 23.376C1.98177 24.4479 3.0724 24.9416 4.05677 24.9729Z"
					fill="#B9CED2"
				/>
				<Path
					d="M21.4512 22.7774C20.9169 22.5899 19.0106 24.0993 18.1512 25.5899C17.2887 27.0868 17.8512 28.1806 18.7731 28.6306C19.8106 29.1368 21.3044 28.8243 21.7294 27.3493C22.1481 25.8899 22.0262 22.9806 21.4512 22.7774ZM11.3481 22.0337C10.8637 21.8618 9.29186 23.3212 8.58561 24.1087C7.63874 25.1681 6.90749 27.1431 8.70436 27.9431C10.5137 28.7462 11.6887 27.4306 11.7794 25.6118C11.8669 23.9181 11.7481 22.1774 11.3481 22.0337ZM15.1637 29.0524C14.6481 28.7743 12.4825 30.6962 11.7919 31.8431C11.1044 32.9899 11.1481 34.4618 12.5544 35.0649C13.9606 35.6681 15.2012 34.8962 15.4606 32.8868C15.6419 31.4618 15.6606 29.3212 15.1637 29.0524ZM25.6356 29.2181C25.2637 29.0087 22.6887 30.9962 22.1106 32.4431C20.9637 35.3149 24.8825 36.5962 25.7731 33.8962C26.2919 32.3212 26.095 29.4774 25.6356 29.2181ZM32.0387 23.0274C31.5294 22.7149 29.3887 24.4774 28.6762 25.8024C27.7762 27.4774 28.4762 28.7399 29.4575 29.1399C30.4762 29.5524 31.7856 29.1556 32.2294 27.6462C32.87 25.4712 32.5325 23.3337 32.0387 23.0274Z"
					fill="#4FC4F8"
				/>
				<Path
					d="M29.7044 25.7525C29.3669 25.7931 28.9481 26.2743 28.8825 27.0962C28.8169 27.9181 29.3356 28.3337 29.8606 28.1243C30.3544 27.9275 30.4356 27.2243 30.4356 26.7806C30.4356 26.3368 30.2262 25.6868 29.7044 25.7525ZM19.2669 25.4931C18.9106 25.3931 18.2481 25.9431 18.1325 26.8337C18.0419 27.5212 18.3075 27.9368 18.8419 27.9775C19.5856 28.0337 19.82 27.1181 19.8012 26.5587C19.7887 26.24 19.7325 25.6243 19.2669 25.4931ZM12.845 31.5962C12.5137 31.5712 11.9575 32.1275 11.9575 32.9931C11.9575 33.8587 12.4075 34.2337 12.9387 34.1181C13.47 33.9993 13.5762 32.9837 13.5419 32.5806C13.5075 32.1775 13.3356 31.6337 12.845 31.5962ZM9.23873 24.9243C8.79185 24.7962 8.21998 25.3618 8.15123 25.9993C8.07935 26.6368 8.37623 27.0993 8.8481 27.1712C9.31998 27.2431 9.7231 26.6743 9.76998 26.0118C9.81998 25.3493 9.65435 25.04 9.23873 24.9243ZM23.4544 31.965C23.0419 31.9306 22.4512 32.54 22.4669 33.4618C22.4825 34.3837 22.9606 34.54 23.2762 34.5587C23.7294 34.5868 24.045 34.0525 24.0856 33.215C24.12 32.5118 23.9606 32.0056 23.4544 31.965Z"
					fill="#AEE6FD"
				/>
			</Svg>
		</View>
	);
};

const Drizzle = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 128 128">
				<Path
					fill="#70b2e2"
					d="M29.8 78.53c-.23-.09-.47-.13-.72-.11c-1.43.1-8.9 6.76-10.86 11.57c-1.33 3.27.25 7.03 3.53 8.36a6.437 6.437 0 0 0 8.37-3.53c1.46-3.63 1.87-15.39-.32-16.29m12.26 23.53c-.23-.1-.48-.14-.73-.12c-1.43.1-8.9 6.76-10.86 11.58c-1.33 3.27.25 7.03 3.53 8.36a6.437 6.437 0 0 0 8.37-3.53c1.48-3.64 1.88-15.4-.31-16.29m24.65-19.39c-.23-.09-.47-.13-.72-.11c-1.43.1-8.9 6.76-10.86 11.57c-1.33 3.28.25 7.03 3.53 8.36s7.03-.25 8.36-3.53c1.48-3.63 1.88-15.39-.31-16.29m13.59 21.41c-.23-.09-.47-.13-.72-.11c-1.43.1-8.91 6.76-10.87 11.57c-1.33 3.27.25 7.03 3.53 8.36s7.04-.25 8.37-3.53c1.48-3.63 1.88-15.39-.31-16.29m21.24-20.41c-.23-.09-.48-.13-.73-.11c-1.43.1-8.91 6.76-10.87 11.57c-1.33 3.28.25 7.03 3.53 8.36s7.03-.25 8.36-3.53c1.49-3.64 1.89-15.4-.29-16.29"
				/>
				<Path
					fill="#e3ebee"
					d="M107.92 29.99s-.01 0 0 0c-.01-.07 0-.13 0-.2c0-9.09-7.37-16.47-16.47-16.47c-1.17 0-2.31.13-3.41.36C84.78 5.74 76.98.14 67.86.14c-6.85 0-12.95 3.16-16.95 8.09a18.85 18.85 0 0 0-8.57-2.06c-9.85 0-17.95 7.51-18.89 17.11C12.73 23.85 4.14 32.63 4 43.53c-.15 11.35 8.94 20.67 20.29 20.82c.88.01 1.75-.05 2.6-.15c4.39 9.25 13.8 15.65 24.72 15.65c6.59 0 12.63-2.33 17.35-6.21c3.61 2.67 8.06 4.27 12.9 4.27c9.92 0 18.27-6.66 20.87-15.74c1.64.54 3.38.85 5.2.85c9.12 0 16.52-7.39 16.52-16.52c-.01-9.12-7.41-16.51-16.53-16.51"
				/>
				<Path
					fill="#b9cdd2"
					d="M117.62 33.14c3.74 3.78 1.1 12.45-1.48 15.27c-5.06 5.55-14.36 4.25-18.09 3.45c-1.01-.22-1.17-.14-1.5.06c-.29.18-.43.47-.75 1.15c-1.2 2.59-4.3 7.61-10.85 9.63c-6.82 2.11-13.26-1.1-16.27-3.02c-1.14-.73-1.19-.74-1.71-.74s-1.04.39-1.66.88c-2.72 2.14-8.94 5.92-18.53 5.37c-9.4-.54-14.78-6.34-16.62-9.31c-.35-.57-.74-1.05-1.17-1.1c-.5-.05-1.06.47-1.49.88c-4 3.9-16.58 5.06-20.76-1.57c4.24 6.81 10.8 10.18 17.53 10.26c.88.01 1.75-.05 2.6-.15c4.39 9.25 13.8 15.65 24.72 15.65c6.59 0 12.63-2.33 17.35-6.21c3.61 2.67 8.06 4.27 12.9 4.27c9.92 0 18.27-6.66 20.87-15.74c1.64.54 3.38.85 5.2.85c9.12 0 16.52-7.39 16.52-16.52c.01-4.86-2.44-10.34-6.81-13.36"
				/>
			</Svg>
		</View>
	);
};

const Fog = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 512 512">
				<Defs>
					<Symbol id="meteoconsOvercastDayFogFill0" viewBox="0 0 196 196">
						<Circle
							cx={98}
							cy={98}
							r={40}
							fill="url(#meteoconsOvercastDayFogFilla)"
							stroke="#f8af18"
							strokeMiterlimit={10}
							strokeWidth={4}
						/>
						<Path
							fill="none"
							stroke="#fbbf24"
							strokeLinecap="round"
							strokeMiterlimit={10}
							strokeWidth={12}
							d="M98 31.4V6m0 184v-25.4M145.1 51l18-17.9M33 163l18-17.9M51 51L33 33m130.1 130.1l-18-18M6 98h25.4M190 98h-25.4"
						></Path>
					</Symbol>
					<Symbol id="meteoconsOvercastDayFogFill1" viewBox="0 0 200.3 126.1">
						<Path
							fill="url(#meteoconsOvercastDayFogFill7)"
							stroke="#848b98"
							strokeMiterlimit={10}
							d="M.5 93.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5A32.4 32.4 0 0 0 .5 93.1Z"
							strokeWidth={1}
						/>
					</Symbol>
					<Symbol id="meteoconsOvercastDayFogFill2" viewBox="0 0 350 222">
						<Path
							fill="url(#meteoconsOvercastDayFogFill6)"
							stroke="#e6effc"
							strokeMiterlimit={10}
							strokeWidth={6}
							d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
						/>
					</Symbol>
					<Symbol id="meteoconsOvercastDayFogFill3" viewBox="0 0 398 222">
						<Use
							width={200.3}
							height={126.1}
							href="#meteoconsOvercastDayFogFill1"
							transform="translate(198 27)"
						></Use>
						<Use width={350} height={222} href="#meteoconsOvercastDayFogFill2"></Use>
					</Symbol>
					<Symbol id="meteoconsOvercastDayFogFill4" viewBox="0 0 410.8 258">
						<Use width={196} height={196} href="#meteoconsOvercastDayFogFill0" />
						<Use
							width={398}
							height={222}
							href="#meteoconsOvercastDayFogFill3"
							transform="translate(12.84 36)"
						/>
					</Symbol>
					<Symbol id="meteoconsOvercastDayFogFill5" viewBox="0 0 264 72">
						<Path
							fill="none"
							stroke="url(#meteoconsOvercastDayFogFill8)"
							strokeLinecap="round"
							strokeMiterlimit={10}
							strokeWidth={24}
							d="M12 60h240"
						></Path>
						<Path
							fill="none"
							stroke="url(#meteoconsOvercastDayFogFill9)"
							strokeLinecap="round"
							strokeMiterlimit={10}
							strokeWidth={24}
							d="M12 12h240"
						></Path>
					</Symbol>
				</Defs>
				<Use
					width={410.8}
					height={258}
					href="#meteoconsOvercastDayFogFill4"
					transform="translate(56 109)"
				/>
				<Use
					width={264}
					height={72}
					href="#meteoconsOvercastDayFogFill5"
					transform="translate(124 402)"
				/>
			</Svg>
		</View>
	);
};

const Overcast = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
				<G clipPath="url(#clip0_18_65)">
					<G clipPath="url(#clip1_18_65)">
						<Path
							d="M19.9522 20.3703C19.9522 21.1831 20.2782 21.9627 20.8583 22.5375C21.4384 23.1122 22.2253 23.4351 23.0457 23.4351H35.4387V23.4257L35.6583 23.4351C36.4783 23.4251 37.2656 23.1149 37.8686 22.5643C38.4717 22.0137 38.848 21.2616 38.925 20.4527C39.002 19.6438 38.7744 18.8352 38.2859 18.1826C37.7974 17.53 37.0825 17.0794 36.2789 16.9176C36.3717 16.3427 36.2974 15.7536 36.0647 15.2191C35.8319 14.6845 35.4503 14.2268 34.9645 13.8993C34.4787 13.5718 33.9088 13.3882 33.3215 13.3699C32.7342 13.3516 32.1538 13.4994 31.6482 13.7959C31.0691 12.8606 30.1714 12.1614 29.1173 11.8246C28.0632 11.4877 26.9223 11.5356 25.9007 11.9594C24.8791 12.3832 24.0443 13.1551 23.5469 14.1355C23.0496 15.116 22.9226 16.2403 23.1889 17.3054H23.0457C22.2269 17.3054 21.4415 17.627 20.8617 18.1997C20.2818 18.7725 19.9548 19.5496 19.9522 20.3608V20.3703Z"
							fill="url(#paint0_linear_18_65)"
							stroke="#848B98"
							strokeWidth={0.078125}
							strokeMiterlimit={10}
						/>
					</G>
					<G clipPath="url(#clip2_18_65)">
						<Path
							d="M28.7839 19.1216L28.5452 19.1311C29.0033 17.2935 28.7835 15.3543 27.9253 13.6632C27.0672 11.9721 25.6273 10.6405 23.8655 9.90875C22.1036 9.17695 20.1358 9.0931 18.317 9.67233C16.4982 10.2516 14.9482 11.4557 13.9467 13.0676C13.136 12.5904 12.2123 12.3342 11.2694 12.3249C10.3264 12.3156 9.39774 12.5535 8.57757 13.0145C7.75739 13.4756 7.07487 14.1434 6.59925 14.9501C6.12362 15.7568 5.87181 16.6738 5.86935 17.6081C5.87187 17.8935 5.89742 18.1781 5.94574 18.4595C4.53831 18.7172 3.27924 19.4875 2.41637 20.6189C1.5535 21.7503 1.14934 23.1606 1.28346 24.5724C1.41757 25.9842 2.08024 27.2951 3.14102 28.2471C4.2018 29.1991 5.58384 29.7232 7.01508 29.7162L7.39699 29.6973V29.7162H28.7839C30.202 29.7162 31.5619 29.1581 32.5646 28.1647C33.5673 27.1712 34.1307 25.8238 34.1307 24.4189C34.1307 23.014 33.5673 21.6666 32.5646 20.6732C31.5619 19.6797 30.202 19.1216 28.7839 19.1216Z"
							fill="url(#paint1_linear_18_65)"
							stroke="#E6EFFC"
							strokeWidth={0.46875}
							strokeMiterlimit={10}
						/>
					</G>
				</G>
				<Defs>
					<LinearGradient
						id="paint0_linear_18_65"
						x1={24.9362}
						y1={12.4622}
						x2={32.5344}
						y2={25.7382}
						gradientUnits="userSpaceOnUse"
					>
						<Stop stopColor="#9CA3AF" />
						<Stop offset={0.5} stopColor="#9CA3AF" />
						<Stop offset={1} stopColor="#6B7280" />
					</LinearGradient>
					<LinearGradient
						id="paint1_linear_18_65"
						x1={10.5}
						y1={11.9041}
						x2={23.0317}
						y2={33.8278}
						gradientUnits="userSpaceOnUse"
					>
						<Stop stopColor="#F3F7FE" />
						<Stop offset={0.5} stopColor="#F3F7FE" />
						<Stop offset={1} stopColor="#DEEAFB" />
					</LinearGradient>
					<ClipPath id="clip0_18_65">
						<Rect width={38} height={21} fill="white" transform="translate(1 9)" />
					</ClipPath>
					<ClipPath id="clip1_18_65">
						<Rect
							width={19.1241}
							height={11.9284}
							fill="white"
							transform="translate(19.9045 11.5541)"
						/>
					</ClipPath>
					<ClipPath id="clip2_18_65">
						<Rect width={33.4171} height={21} fill="white" transform="translate(1 9)" />
					</ClipPath>
				</Defs>
			</Svg>
		</View>
	);
};

const PartiallyCloud = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
				<G clipPath="url(#clip0_4_422)">
					<Path
						d="M13 24.602C15.9305 24.602 18.3061 22.3178 18.3061 19.5C18.3061 16.6822 15.9305 14.398 13 14.398C10.0695 14.398 7.69388 16.6822 7.69388 19.5C7.69388 22.3178 10.0695 24.602 13 24.602Z"
						fill="url(#paint0_linear_4_422)"
						stroke="#F8AF18"
						strokeWidth={0.3125}
						strokeMiterlimit={10}
					/>
					<Path
						d="M13 11.0051V7.7653M13 31.2347V27.9949M19.248 13.5051L21.6357 11.2219M4.37755 27.7908L6.7653 25.5077M6.7653 13.5051L4.37755 11.2092M21.6357 27.8036L19.248 25.5077M0.795914 19.5H4.1653M25.2041 19.5H21.8347"
						stroke="#FBBF24"
						strokeWidth={0.9375}
						strokeMiterlimit={10}
						strokeLinecap="round"
					/>
				</G>
				<G clipPath="url(#clip1_4_422)">
					<Path
						d="M33.7743 22.6757L33.5529 22.6838C33.9778 21.1087 33.7739 19.4465 32.9778 17.997C32.1818 16.5475 30.846 15.4062 29.2116 14.7789C27.5771 14.1517 25.7516 14.0798 24.0644 14.5763C22.3772 15.0728 20.9393 16.1049 20.0103 17.4865C19.2582 17.0775 18.4013 16.8579 17.5266 16.8499C16.6518 16.8419 15.7903 17.0459 15.0295 17.441C14.2686 17.8362 13.6355 18.4086 13.1942 19.1001C12.753 19.7916 12.5194 20.5776 12.5171 21.3784C12.5195 21.623 12.5432 21.867 12.588 22.1081C11.2824 22.329 10.1144 22.9893 9.31391 23.9591C8.51345 24.9288 8.13853 26.1377 8.26294 27.3478C8.38736 28.5579 9.00209 29.6815 9.98614 30.4975C10.9702 31.3135 12.2523 31.7627 13.58 31.7568L13.9343 31.7405V31.7568H33.7743C35.0898 31.7568 36.3514 31.2784 37.2815 30.4269C38.2117 29.5753 38.7343 28.4204 38.7343 27.2162C38.7343 26.012 38.2117 24.8571 37.2815 24.0056C36.3514 23.1541 35.0898 22.6757 33.7743 22.6757Z"
						fill="url(#paint1_linear_4_422)"
						stroke="#E6EFFC"
						strokeWidth={0.46875}
						strokeMiterlimit={10}
					/>
				</G>
				<Defs>
					<LinearGradient
						id="paint0_linear_4_422"
						x1={10.3469}
						y1={15.0867}
						x2={15.347}
						y2={24.0959}
						gradientUnits="userSpaceOnUse"
					>
						<Stop stopColor="#FBBF24" />
						<Stop offset={0.5} stopColor="#FBBF24" />
						<Stop offset={1} stopColor="#F59E0B" />
					</LinearGradient>
					<LinearGradient
						id="paint1_linear_4_422"
						x1={16.8129}
						y1={16.4892}
						x2={27.1086}
						y2={35.9832}
						gradientUnits="userSpaceOnUse"
					>
						<Stop stopColor="#F3F7FE" />
						<Stop offset={0.5} stopColor="#F3F7FE" />
						<Stop offset={1} stopColor="#DEEAFB" />
					</LinearGradient>
					<ClipPath id="clip0_4_422">
						<Rect width={26} height={25} fill="white" transform="translate(0 7)" />
					</ClipPath>
					<ClipPath id="clip1_4_422">
						<Rect width={31} height={18} fill="white" transform="translate(8 14)" />
					</ClipPath>
				</Defs>
			</Svg>
		</View>
	);
};

const Clear = ({ size = 30, color = "black" }: SvgIconProps) => {
	return (
		<View>
			<Svg width={size} height={size} viewBox="0 0 512 512">
				<Defs>
					<LinearGradient
						id="meteoconsClearDayFill0"
						x1={150}
						x2={234}
						y1={119.2}
						y2={264.8}
						gradientUnits="userSpaceOnUse"
					>
						<Stop offset={0} stopColor="#fbbf24" />
						<Stop offset={0.5} stopColor="#fbbf24" />
						<Stop offset={1} stopColor="#f59e0b" />
					</LinearGradient>
					<Symbol id="meteoconsClearDayFill1" viewBox="0 0 384 384">
						<Circle
							cx={192}
							cy={192}
							r={84}
							fill="url(#meteoconsClearDayFill0)"
							stroke="#f8af18"
							strokeMiterlimit={10}
							strokeWidth={6}
						/>
						<Path
							fill="none"
							stroke="#fbbf24"
							strokeLinecap="round"
							strokeMiterlimit={10}
							strokeWidth={24}
							d="M192 61.7V12m0 360v-49.7m92.2-222.5l35-35M64.8 319.2l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M61.7 192H12m360 0h-49.7"
						></Path>
					</Symbol>
				</Defs>
				<Use
					width={384}
					height={384}
					href="#meteoconsClearDayFill1"
					transform="translate(64 64)"
				/>
			</Svg>
		</View>
	);
};

const WxCondIcons = {
	Rain,
	Snow,
	Fog,
	Clear,
	PartiallyCloud,
	Overcast,
	Thunderstorm,
	Drizzle,
};

export default WxCondIcons;
