/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './routes/**/*.{html,ts,tsx,jsx,js}',
        './components/**/*.{html,ts,tsx,jsx,js}',
    ],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
}
