// @ts-nocheck
import React, { useCallback, useMemo } from 'react'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { MantineProvider, Button } from '@mantine/core'

import '../styles/tailwind.css'
import '../styles/globals.css'
import '../node_modules/rolly.js/css/style.css'

import type { AppProps } from 'next/app'
import Layout from '../layout/layout'
//import { site } from "../settings"
//import { MetaTags } from "../components/next-seo"
import { useHasMounted, useDebounce } from '../lib/hooks'
//import { CssBaseline } from '@nextui-org/react';

// export type Status = 'idle' | 'loading' | 'ready' | 'error'
// export type ScriptElt = HTMLScriptElement | null

//export function reportWebVitals(metric) {
//    //console.log(metric)
//}
import { Commander } from '../components'
import jsondata from '../data/posts-metadata.json'

function MyApp({ Component, pageProps }: AppProps) {
    const hasMounted = useHasMounted()
    //const hasDebounced = useDebounce(hasMounted, 5000)
    //console.log("loading scripts", hasDebounced)
    const [open, setOpen] = useState(false)
    const closeCommander = useCallback(() => setOpen(false), [])
    const openCommander = useCallback(() => setOpen(true), [])
    const memoizedData = useMemo(() => jsondata, [])

    return (
        <React.Fragment>
            <Layout openCommander={openCommander} closeCommander={closeCommander}>
                {/*<Head>
                {hasMounted && <Commander />}

                    <link
                        rel="preload"
                        href="/fonts/Satoshi-Regular.woff2"
                        as="font"
                        crossOrigin=""
                        type="font/woff2"
                    />
                    {
                        hasDebounced && <>
                            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-141617385-4"></script>
                            <script id="gtag-inline">
                                {
                                    `window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'UA-141617385-4');`
                                }
                            </script>
                        </>
                    }

                </Head>*/}
                <Script
                    strategy="lazyOnload"
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                />
                <Script id="ga-analytics">
                    {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                        `}
                </Script>

                <Commander data={memoizedData} open={open} closeHandler={closeCommander} />
                <ContentComponent Element={Component} props={pageProps} />
            </Layout>

            {/* MESH GRADIENTS */}
        </React.Fragment>
    )
}
const ContentComponent = React.memo(({ Element, props }) => <Element {...props} />)
export default MyApp
