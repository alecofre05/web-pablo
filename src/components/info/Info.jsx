import './info.css'

export const Info = () => {

    const phone = "https://api.whatsapp.com/send?phone=1132389517"

    return (
        <nav className="navbar" id="nb-color">
            <a className="nav-link anchor" id="mail-info" href="https://mail.google.com/mail/?view=cm&fs=1&to=cofrealejandro05@gmail.com" target="_blank" rel="noopener noreferrer">pablogcofre@gmail.com</a>
            <a className="nav-link" id="phone-info" aria-current="page" href={phone} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i>11-3820-7357 Consultanos</a>
        </nav>
    )
}