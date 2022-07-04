/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./routes/**/*.{html,tsx,jsx,js}'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
}
