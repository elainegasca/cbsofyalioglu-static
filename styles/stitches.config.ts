import { createStitches } from '@stitches/react'

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
    createStitches({
        theme: {
            colors: {
                gray400: 'gainsboro',
                gray500: 'lightgray',
            },
        },
        media: {
            bp1: '(min-width: 480px)',
        },
        utils: {
            marginX: (value) => ({ marginLeft: value, marginRight: value }),
        },
    })

globalCss({
    "@font-face": {
        fontFamily: "Satoshi-Variable",
        fontWeight: 400,
        fontDisplay: "swap",
        src: "url('Satoshi-Variable.woff1')",
        src: "local(../public/fonts/Satoshi-Variable.woff2) format('woff2')"
    },
    body: {
        margin: 0
    }
});
export { violet, indigo, purple, blackA, mauve } from '@radix-ui/colors'
