import React, { useEffect } from "react";

declare global {
    interface Window {
        adsbygoogle: any;
    }
}


const AdBanner = () => {
    useEffect(() => {
        let adsbygoogle = window.adsbygoogle
        if (adsbygoogle) {

            try {
                (adsbygoogle = adsbygoogle || []).push({});
            } catch (err) {
                console.log(err);
            }
        }
    }, []);

    return (
        <ins
            className="adsbygoogle adbanner-customize"
            style={{
                display: "block"
            }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-9259748524746137"
            data-ad-slot="4183202333"
        />
    );
};

export default AdBanner
