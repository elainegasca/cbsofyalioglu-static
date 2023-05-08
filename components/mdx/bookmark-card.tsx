import Link from 'next/link'

export const BookmarkCard = ({ title, description, url, image }) => {
    return (
        <div className="flex items-stretch justify-between border border-gray-500 bg-[rgba(255,255,255,0.1)] h-25 w-full relative box-border group p-1" style={{ flexGrow: 2 }}>
            <div className="flex flex-col justify-start  p-3">
                <Link href={url}>
                    <h4 className='text-lg font-semibold mb-0 hover:underline'>{title}</h4>
                </Link>
                <p className='!text-sm mt-0'>{description}</p>
            </div>
            <div
                className="flex flex-col justify-center items-center h-full box-border"
                style={{ flexGrow: 1, overflow: 'hidden', maxWidth: '30%' }}
            >
                <img src={image} alt={title} style={{ height: '100%', minWidth: '110%', margin:0, marginLeft:"-5%", marginRight:"-5%", borderRadius:0 }} />
            </div>
            <Link href={url} className='absolute bottom-0 left-0 right-0 top-0 group-hover:bg-[rgba(255,255,255,0.2)]'></Link>
        </div>
    )
}
