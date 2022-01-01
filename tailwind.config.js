module.exports = {
	content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				bgcolor: "#0a192f",
				primary: "#ccd6f6",
				"primary-dark": "#8892b0",
				"primary-light": "#d2daf6",
				secondary: "#1de9b6",
				"secondary-dark": "#00b686",
				white: "#eee"
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
				}
			},
			animation: {
				"cursor-blink": "cursor-blink 1s infinite"
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
