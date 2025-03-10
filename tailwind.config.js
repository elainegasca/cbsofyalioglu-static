const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    darkMode: 'class', // or 'media' or 'class'
    purge: [
        './components/*.{js,jsx,ts,tsx,md,mdx}',
        './components/**/*.{js,jsx,ts,tsx,md,mdx}',

        './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
        './layout/**/*.{js,jsx,ts,tsx,md,mdx}',
    ],
    theme: {
        extend: {
            flexGrow:{
                2: '2',
                3: '3',
                4: '4',
                5: '5',
            }
        },
        colors: {
            textwhite: '#eee',
            primary: '#161617',
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            teal: colors.teal,
            indigo: colors.indigo,
            red: colors.rose,
            pink: colors.pink,
            yellow: colors.amber,
            purple: colors.violet,
            green: colors.teal,
        },
    },
}
