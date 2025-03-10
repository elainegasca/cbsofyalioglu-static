import React from 'react'
import { useEffect, useRef } from 'react'

type VideoProps = {
    src: string;
    cover: string;
    title: string;
    preload?: string;
    height?: string | number;
    width?: string | number;
    download?: boolean
    autoplay?: boolean
}


export function Video(props: VideoProps) {
    const vtype = props.src.split(".")[props.src.split(".").length - 1]

    return (
        <div className="mt-20">
            {props.title && <h3 className="text-md my-8">{props.title}</h3>}
            <video
                id={props.src}
                className="video-js"
                preload={props.preload || "none"}
                width={props.width || "100%"}
                height={props.height || "auto"}
                poster={props.cover}
                autoPlay={props.autoplay || false}
            >
                <source src={props.src} type={`video/${vtype}`} />
            </video>
            {(props.download !== false) && <a download={props.src} href={props.src} className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md mt-8">
                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span className="relative px-6 py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                    <span className="relative text-white">Download</span>
                </span>
            </a>}
        </div>
    )
}
