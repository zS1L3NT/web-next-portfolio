module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				bgcolor: "#0a192f",
				primary: {
					50: "#e2fbf2",
					100: "#b8f5df",
					200: "#82efcc",
					300: "#1de9b6",
					400: "#00e2a4",
					500: "#00da93",
					600: "#00c986",
					700: "#00b576",
					800: "#00a368",
					900: "#00814f",
				},
				secondary: {
					50: "#e0f5fb",
					100: "#B1E5F6",
					200: "#7ED4F1",
					300: "#4BC3EB",
					400: "#1DB6E9",
					500: "#00a9e7",
					600: "#009bd9",
					700: "#0089c6",
					800: "#0078b2",
					900: "#005892",
				}
			},
			spacing: {
				18: "4.5rem"
			},
			keyframes: {
				"cursor-blink": {
					"from, to": {
						color: "transparent"
					},
					"50%": {
						color: "white"
					}
				},
				"mouse-scroll": {
					from: {
						transform: "translateY(10px)"
					},
					to: {
						transform: "translateY(20px)"
					}
				}
			},
			animation: {
				"cursor-blink": "cursor-blink 1s infinite",
				"roll": "mouse-scroll 0.8s cubic-bezier(.7,0,.3,1) infinite alternate",
				"roll-shadow": "mouse-scroll 0.8s cubic-bezier(.7,0,.3,1) 80ms infinite alternate"
			},
			flex: {
				"2": "2 1 0%"
			}
		},
		fontFamily: {
			"montserrat-bold": "Montserrat-Bold",
			"montserrat-regular": "Montserrat-Regular",
			"roboto-light": "Roboto-Light",
			"robotomono-regular": "RobotoMono-Regular"
		},
		screens: {
			xs: { max: "575px" },
			sm: { min: "576px" },
			md: { min: "768px" },
			lg: { min: "1024px" },
			xl: { min: "1280px" }
		}
	},
	plugins: []
}
