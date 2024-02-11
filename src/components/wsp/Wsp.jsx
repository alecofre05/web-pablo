import './wsp.css';

export const Wsp = () => {
    const phone = "1138207357";

    return (
        <>
        <a href={`https://api.whatsapp.com/send?phone=+549${phone}`} className="float" target="_blank">
            <i className="fa fa-whatsapp my-float"></i>
        </a>
        </>
    )
}