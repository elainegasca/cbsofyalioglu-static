import React from 'react'
export const CookieBanner = () => {
    function handleOnClick(e) {
        document.getElementsByClassName('show-banner')[0].classList.toggle('hidden')
        document.getElementsByClassName('banner-cookie')[0].classList.toggle('hidden')
    }
    React.useEffect(() => {
        const closes = document.querySelectorAll('.button-cookie')
        closes.forEach((close, index) => {
            close.addEventListener('click', handleOnClick)
        })
        return () => {
            closes.forEach((close, index) => {
                close.removeEventListener('click', handleOnClick)
            })
        }
    })
    return (
        <div className="banner-cont">
            <div className="button-cookie white show-banner">
                <i className="bx bx-cookie"></i>
                Manage cookies
            </div>
            <div className="banner-cookie hidden">
                <p>
                    We use our own and third-party cookies to personalize content and to analyze web
                    traffic. You agree to our cookies if you continue to use.
                </p>
                <div className="button-cont">
                    <div className="button-cookie black">
                        <i className="bx bx-cookie"></i>
                        Accept
                    </div>
                    <div className="button-cookie white">Reject</div>
                </div>
            </div>
        </div>
    )
}
