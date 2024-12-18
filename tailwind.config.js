/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#FFD700',
					dark: '#B8860B',
				},
			},
			fontFamily: {
				metal: ['Metal Mania', 'cursive'],
				josefin: ['Josefin Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
};