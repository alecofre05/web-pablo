import './info.css'

export const Info = () => {

    const phone = "1138207357"
    const email = "pablogcofre@gmail.com";

    return (
        <nav className="navbar" id="nb-color">
            <a className="nav-link anchor" id="mail-info" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`} target="_blank" rel="noopener noreferrer"><i class="fa fa-envelope-o"></i>{email}</a>
            <a className="nav-link" id="phone-info" aria-current="page" href={`https://api.whatsapp.com/send?phone=${phone}`} target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i>11-3820-7357 Consultanos.</a>
        </nav>
    )
}

