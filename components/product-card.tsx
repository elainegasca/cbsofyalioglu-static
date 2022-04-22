export const ProductCard = ({ cover, title, description, tags, url, linkLabel, children }) => (
    <div className="border bg-cyan-900 bg-opacity-25 rounded-lg p-6 text-gray-100 relative z-10 product-card" >
        <div className="flex flex-wrap items-center">
            <div className="flex w-full h-48 md:h-64 lg:h-72 relative">
                <div className="w-full pr-4 relative">
                    <img
                        src={cover}
                        className="w-full h-full object-cover object-top rounded-md bg-white"
                    />
                </div>
            </div>

            <div className="w-full pt-8 flex flex-col justify-between">
                <div>
                    <h2 className="font-bold text-xl">{title}</h2>

                    <div className="flex flex-wrap text-center pt-4 mb-2">
                        {tags.map((tag) => (
                            <div className="mr-2 mb-2 rounded-full px-3 py-1 text-xs bg-transparent product-tag">
                                {tag}
                            </div>
                        ))}
                    </div>

                    <p className="text-xs leading-relaxed text-gray-50">{description}</p>

                    {children}
                </div>

                <div className="w-full sm:flex-1 grid gap-4 grid-cols-2 pt-6">
                    <a
                        rel="nofollow noopener"
                        target="_blank"
                        href={url}
                        className="no-underline flex items-center justify-center text-center relative text-white font-bold text-sm bg-gray-200 text-gray-800 px-8 py-3 rounded-lg shadow-lg hover:shadow-none hover:opacity-75"
                    >
                        {linkLabel || 'Siteye git'}
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default ProductCard
