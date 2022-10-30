// @ts-nocheck
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../styles/stitches.config'
import Script from 'next/script'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en" className="dark">
                <Head>
                    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

                    <script
                        async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                    ></script>
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
