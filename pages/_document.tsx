// @ts-nocheck
import Document, { Html, Head, Main, NextScript } from 'next/document'
//import { getCssText, css } from '../styles/stitches.config'
import {getCssText } from '../styles/stitches.config'

import Script from 'next/script'

class MyDocument extends Document {

    render() {

        return (
            <Html lang="en" className="dark">
                <Head>
                    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
                    <meta name="yandex-verification" content="f134be4d515f5c4a" />
                </Head>
                <body className="bg-gray-50 dark:bg-gray-900">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
