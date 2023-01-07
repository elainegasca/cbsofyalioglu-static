import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'

type CardProps = {
    title: string
    description?: string
    className?: string
    link: string
    cover?: string
    excerpt?: string
    tags?: string[]
    slug?: string
    index?: number
    thumbnail?: string
    nofollow?: boolean
    keywords?: string[]
    topic?: string
    date?: string
}
export function CardEnlarge(props: CardProps) {
    return (
        <div
            key={props.link}
            className="card-enlarge grid grid-cols-1 mt-4"
            data-scene
            data-speed="0.2"
        >
            <div className="glass-card-card flex flex-col sm:flex-row p-[2px] items-stretch rounded-lg overflow-hidden !min-h-[160px] border border-solid border-[rgba(255,255,255,0.2)]">
                <a
                    rel={props.nofollow ? 'nofollow noopener' : 'noopener'}
                    target="_blank"
                    href={props.link}
                    title={props.title}
                    className="group w-full sm:w-48 md:w-40 xl:w-40 min-h-[140px] sm:h-44 md:h-50 relative block self-start flex-shrink-0  overflow-hidden no-underline"
                >
                    <img
                        src={props.cover}
                        loading="lazy"
                        alt={props.title}
                        className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 ease-out transition duration-500 rounded-lg"
                    />
                </a>

                <div
                    className="flex flex-col pl-4 pt-4 pb-2 xl:pt-4 xl:pb-2 xl:px-4 justify-between relative !h-full"
                    data-tip={props.excerpt}
                >
                    <div className="flex flex-col p-0 m-0">
                        <a
                            target="_blank"
                            title={props.title}
                            href={props.link}
                            className="transition duration-100 no-underline text-xl"
                            rel={props.nofollow ? 'nofollow noopener' : 'noopener'}
                        >
                            <h3 className="text-gray-800 text-xl font-bold mt-2">{props.title}</h3>
                        </a>
                        <p className="text-gray-500 text-md mt-2 mb-2 leading-6 overflow-ellipsis overflow-hidden text-sm">
                            {props.description || props.excerpt}
                        </p>
                    </div>

                    <div className="flex ">
                        {props.tags?.map((tag) => (
                            <span
                                key={tag}
                                className="text-indigo-500 font-semibold text-sm mr-[1px] border-[1px] border-gray-200 rounded-md px-1"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export function CardCover(props: CardProps) {
    return (
        <li
            key={props.link}
            className="flex flex-col md:flex-row frost-blur border rounded-lg overflow-hidden glass-card-card z-10  h-40 p-1"
        >
            <div className="absolute flex md:none md:hidden top-0 left-0 right-0 bottom-0 w-full h-40" style={{background:"rgba(0,0,0,0.55)", backdropFilter:"blur(4px)", zIndex:10}} />
            <a
                href={props.link}
                rel={props.nofollow ? 'nofollow noopener' : 'noopener'}
                className="group bottom-0 top-0 left-0 right-0 md:relative h-auto md:h-[152px] md:w-60 w-full block  overflow-hidden rounded-md"
            >
                <img
                    src={props.cover}
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    className="!min-w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-500 z-0"
                />
            </a>

            <div className="flex flex-col flex-1 h-auto md:h-[152px] !bg-[rgba(0,0,0,0.5)] md:bg-transparent">
                <h3 className="text-gray-800 text-xl font-semibold ml-4 p-2 mt-2 z-10">
                    <a
                        href={props.link}
                        rel={props.nofollow ? 'nofollow noopener' : 'noopener'}
                        className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    >
                        {props.title}
                    </a>
                </h3>

                <p className="text-gray-400 font-medium  text-xs ml-4 p-2 z-10">{props.excerpt || props.description}</p>

                <div className="flex justify-start mt-auto ml-4 p-2 flex-wrap">
                    {props.tags?.map((tag) => (
                        <span
                            key={tag}
                            style={{ color: "#00c1d7", backgroundColor:"#08303b", backdropFilter:"saturate(180%)", borderRadius:16}}
                            className="px-2 mr-2 z-10 overflow-ellipsis relative bottom-2 text-sm whitespace-nowrap mt-1"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </li>
    )
}

export function _ListItemCard(props: CardProps) {
    return (
        <li
            title={props.title}
            className={`group h-40 md:h-64 xl:h-52 flex flex-col  rounded-lg shadow-lg overflow-hidden relative mt-4${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            <Image
                layout="fill"
                sizes="30vw"
                loading="lazy"
                src={props.thumbnail || props.cover || '/img/placeholder.webp'}
                alt={(props.keywords && props.keywords[0]) || props.title}
                className="w-full h-full object-cover object-center absolute inset-0 transform group-hover:scale-110 transition duration-700 z-0"
            />

            <div className="bg-[rgba(0,0,0,0.5)] hover:blur-md absolute inset-0 pointer-events-none"></div>

            <div className="relative p-4 mt-auto">
                {props.date && <span className="block !text-gray-200 text-sm">{props.date}</span>}
                <Link href={`/${props.topic}/${props.slug}`}>
                    <a title={props.title} className="group">
                        <h3 className="!text-white text-lg font-semibold transition duration-100 mb-2 z-10 relative">
                            {props.title}
                        </h3>
                    </a>
                </Link>
                {props.description && (
                    <p className="!text-white text-base font-regular transition duration-100 mb-2 relative">
                        {props.description}
                    </p>
                )}
            </div>
            <Link href={`/${props.topic}/${props.slug}`}>
                <a title={props.title} className="group absolute top-0 left-0 right-0 bottom-0" />
            </Link>
        </li>
    )
}
export function ListItemCard(props: CardProps) {
    return (
        <li
            title={props.title}
            className={`group h-44 md:h-44 xl:h-44 flex flex-col  rounded-lg shadow-lg !overflow-hidden relative mt-1 ${
                props.className ? ` ${props.className}` : ''
            }`}
        >
            <Image
                layout="fill"
                sizes="30vw"
                loading="lazy"
                src={props.thumbnail || props.cover || '/img/placeholder.webp'}
                alt={(props.keywords && props.keywords[0]) || props.title}
                className="w-full h-full object-cover object-center absolute inset-0 transform transition duration-500 z-0  rounded-lg"
            />

            <motion.div className="bg-[rgba(10,10,10,0.4)] group-hover:bg-[rgba(0,0,0,0.8)]  transition-colors ease-linear duration-400 backdrop-blur-0 group-hover:backdrop-blur-lg absolute inset-0 pointer-events-none border-[rgba(255,255,255,0.3)] shadow-md border-solid rounded-lg border"></motion.div>

            <motion.div className="relative p-4 flex flex-col justify-end group  rounded-lg">
                {props.date && <span className="block !text-gray-200 text-sm">{props.date}</span>}
                <Link href={`/${props.topic}/${props.slug}`}>
                    <motion.a title={props.title} className="group">
                        <motion.h3 className="!text-white text-lg font-semibold transition duration-500 mb-2 z-10 relative translate-y-20 group-hover:translate-y-0">
                            {props.title}
                        </motion.h3>
                    </motion.a>
                </Link>
                {props.description && (
                    <motion.p className="!text-white text-sm font-regular transition  relative opacity-0 group-hover:opacity-100 translate-y-20 group-hover:translate-y-0 duration-500 ease-linear">
                        {props.description}
                    </motion.p>
                )}
            </motion.div>
            <Link href={`/${props.topic}/${props.slug}`}>
                <a title={props.title} className="group absolute top-0 left-0 right-0 bottom-0  rounded-lg" />
            </Link>
        </li>
    )
}