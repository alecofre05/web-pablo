import React from 'react';
import './wsp.css';

export const Wsp = () => {
    const phone = "+5491138207357";
    const encodedPhone = encodeURIComponent(phone);

    return (
        <>
            <a href={`https://api.whatsapp.com/send?phone=${encodedPhone}`} className="float" target="_blank">
                <i className="fa fa-whatsapp my-float"></i>
            </a>
        </>
    );
};
