import './wsp.css';

export const Wsp = () => {
    const phone = "https://api.whatsapp.com/send?phone=1132389517"
    return (
        <>
        <a href={phone} className="float" target="_blank">
            <i className="fa fa-whatsapp my-float"></i>
        </a>
        </>
    )
}