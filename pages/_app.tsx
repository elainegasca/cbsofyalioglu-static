// @ts-nocheck
import React, { useCallback, useMemo } from 'react'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { MantineProvider, Button } from '@mantine/core'

import '../styles/tailwind.css'
import '../styles/globals.css'

import type { AppProps } from 'next/app'
import Layout from '../layout/layout'
//import { site } from "../settings"
//import { MetaTags } from "../components/next-seo"
import { useHasMounted, useDebounce } from '../lib/hooks'
import { NextUIProvider } from '@nextui-org/react';

// export type Status = 'idle' | 'loading' | 'ready' | 'error'
// export type ScriptElt = HTMLScriptElement | null

//export function reportWebVitals(metric) {
//    //console.log(metric)
//}
import { Commander } from '../components'
import jsondata from '../data/posts-metadata.json'
import { motion, animate, useSpring, useTranform, useMotionValue } from 'framer-motion'
import { Partytown } from '@builder.io/partytown/react';


function MyApp({ Component, pageProps }: AppProps) {
  const hasMounted = useHasMounted()
  //const hasDebounced = useDebounce(hasMounted, 5000)
  //console.log("loading scripts", hasDebounced)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const x = useSpring(mouseX, { stiffness: 1000, damping: 10 })
  const y = useSpring(mouseY, { stiffness: 1000, damping: 10 })


  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // animate mouse x and y
      animate(mouseX, e.clientX);
      animate(mouseY, e.clientY);
    };
    //const setY = (e) => _y.set(e.clientY)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-M492EQF9QH"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-M492EQF9QH');
            `,
          }}
        />
        {/* <script id="ga-analytics" type="text/partytown">
            {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                        `}
          </script> */}

      </Head>
      <NextUIProvider>
        <Layout x={mouseX} y={mouseY}>
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

          <Component {...pageProps} />
          {/* <ContentComponent Element={Component} props={pageProps} /> */}
        </Layout>
      </NextUIProvider>
      {/* MESH GRADIENTS */}
    </React.Fragment>
  )
}
const ContentComponent = React.memo(({ Element, props }) => <Element {...props} />)
export default MyApp
