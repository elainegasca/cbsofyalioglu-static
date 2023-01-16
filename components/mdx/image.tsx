// @ts-nocheck
import React, { useCallback, useState } from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Image from "next/image";

export const ResponsiveImage = props => (
    <Image
        alt={props.alt}
        {...props}
        loading="lazy"
        sizes="100vw"
        style={{
            width: "100%",
            height: "auto"
        }} />
)

export default function ImageZoom(props){
    const [isZoomed, setIsZoomed] = useState(false)

    const handleImgLoad = useCallback(() => {
        setIsZoomed(true)
    }, [])

    const handleZoomChange = useCallback(shouldZoom => {
        setIsZoomed(shouldZoom)
    }, [])

    const haveSizes = (props.width && props.height)
    const layout = haveSizes ? "intrinsic" : "fill"
    const myClass = (props.className ? props.className : "") + " my-4 rounded-lg"
    //console.log("layout:", layout, haveSizes)
    return (
        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange} id="ccc"
        overlayBgColorEnd="rgba(0,0,0,0.6)"
        overlayBgColorStart="rgba(0,0,0,0.6)"
        >
            <Image
                layout={layout}
                width={props.width}
                height={props.height}
                alt={props.alt}
                onClick={handleImgLoad}
                src={props.src}
                //width="100%"
                //style={{minHei:1400}}
                className={myClass}
                loading="lazy"
                style={{
                    maxWidth: "100%",
                    height: "auto"
                }} />
        </ControlledZoom>
    );
}
