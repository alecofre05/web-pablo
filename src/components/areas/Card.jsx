import { Cards } from './Areas'
import './areas.css'


export const Card = () => {
    return (
        <div className="cards-container" id="areas">
            <Cards className="card-bod" title="DESPIDOS" 
            text="Si te despidieron de forma verbal o te enviaron una carta documento, asesorate. Es muy
            probable que te corresponda una indemnización."
            />
            <Cards className="card-bod" title="TRABAJO SIN REGISTRO" 
            text="Si te pagan en mano todo o una parte de tu salario, y sin recibo de sueldo, o te piden que
            factures, corresponde que reclames la registración de tu empleo y los beneficios de un
            trabajador debidamente registrado."
            />
            <Cards className="card-bod" title="ACOSO LABORAL" 
            text="Si en tu trabajo te amenazan, te discriminan o te maltratan bajo cualquier modalidad, podes
            pedir que modifiquen la conducta o dependiendo el caso, considerarte despedido."
            />
            <Cards className="card-bod" title="ACCIDENTES LABORALES"
            text="Si sufriste un accidente efectuando tus tareas, o camino a tu trabajo o a tu hogar, podes
            reclamar una indemnización."
            />
            <Cards className="card-bod" title="CATEGORÍA LABORAL" 
            text="Si tu empleador te registró en un convenio que no corresponde a tus tareas, o en una
            categoría distinta a la que te corresponde por convenio, asesorate. Podes reclamar que te
            registren correctamente y te abonen diferencias salariales."
            />
            <Cards className="card-bod" title="CAMBIO EN LAS CONDICIONES" 
            text="Si te cambiaron los horarios, las tareas o el lugar de trabajo, sin tu consentimiento; podes
            reclamar que te regularicen las condiciones."
            />
        </div>
    )
}