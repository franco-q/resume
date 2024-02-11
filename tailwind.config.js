module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			mono: ['Poppins', 'Quicksand', 'sans-serif']
		},
		extend: {
			screens: {
				print: { raw: 'print' }
			},
			maxWidth: {
			  '1/2': '50%',
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
