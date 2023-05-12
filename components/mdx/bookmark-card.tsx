import Link from 'next/link'

export const BookmarkCard = ({ title, description, url, image }) => {
    return (
        <div className="bookmark-card flex items-stretch justify-between border border-gray-700 rounded-sm bg-[rgba(255,255,255,0.1)] h-25 max-h-25 w-full relative box-border group p-1 grow-[3] md:grow-[2]">
            <div className="flex flex-col justify-start  p-1 lg:p-2">
                <Link href={url}>
                    <h4 className='text-sm sm:text-lg lg:text-xl sm:mb-1 lg:mb-2 font-semibold mb-0 hover:underline bookmark-card-title z-10'>{title}</h4>
                </Link>
                <p className='bookmark-card-description text-xs sm:text-sm !mt-0'>{description}</p>
            </div>
            <div
                className="flex flex-col justify-center items-center h-full box-border grow-[1] z-10 relative"
                style={{  overflow: 'hidden', maxWidth: '30%' }}
            >
                <img src={image} alt={title} style={{ height: '100%', minWidth: '110%', margin:0, marginLeft:"-5%", marginRight:"-5%", borderRadius:0, maxHeight:100 }} className='z-10' />
            </div>
            <Link href={url} className='!absolute bottom-0 left-0 right-0 top-0 min-w-full duration-200 transform ease-linear group-hover:bg-[rgba(255,255,255,0.05)] z-10 !m-0'></Link>
        </div>
    )
}
