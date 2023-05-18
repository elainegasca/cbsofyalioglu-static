import Link from 'next/link'
import Image from 'next/image'

const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 20}`;
  };
export const BookmarkCard = ({ title, description, url, image }) => {
    return (
        <div className="bookmark-card flex flex-row items-stretch justify-between border border-gray-700 rounded-sm bg-[rgba(255,255,255,0.1)] h-25 max-h-25 w-full relative box-border group my-4">
            <div className="flex flex-col justify-start  p-1 lg:p-2  flex-grow-[4] md:flex-grow-[5]">
                <Link href={url}>
                    <h4 className='text-sm sm:text-lg lg:text-xl sm:mb-1 lg:mb-2 font-semibold mb-0 hover:underline bookmark-card-title z-10'>{title}</h4>
                </Link>
                <p className='bookmark-card-description text-xs sm:text-sm !mt-0'>{description}</p>
            </div>
            <div
                className="flex flex-col justify-center items-center h-full box-border flex-grow-[] z-20 relative !max-w-40 overflow-hidden"
                style={{  minWidth: "20%", maxWidth:150, minHeight:"100px" }}
            >
                <Image 
                fill 
                loader={imageLoader} 
                src={image}
                priority={false}
                sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 150px"
                alt={title} 
                //style={{ height: '100%', minWidth: '110%', margin:0, marginLeft:"-5%", marginRight:"-5%", borderRadius:0, maxHeight:100 }} 
                className='z-10 !rounded-none opacity-80 group-hover:opacity-100 duration-200 transform ease-linear' 
                loading="lazy" 
                
                />
            </div>
            <Link href={url} className='!absolute bottom-0 left-0 right-0 top-0 min-w-full duration-200 transform ease-linear group-hover:bg-[rgba(255,255,255,0.05)] z-10 !m-0'></Link>
        </div>
    )
}
