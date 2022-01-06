import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

export const UpNavBar = () => {
    return (
        <>
            <div id="upnavbar" className="container">
                <ul >
                    <li><a href="tel:+51938493983"><FontAwesomeIcon icon={faEnvelope} size="sm" /> <span> 938493983 </span></a></li>
                    <li><a href="mailto:contacto@cdbiotech.pe?subject=Deseo cotizar un equipo"> <FontAwesomeIcon icon={faPhoneAlt} size="sm" /> <span> contacto@cdbiotech.pe</span></a></li>
                </ul>
            </div>

        </>
    )
}