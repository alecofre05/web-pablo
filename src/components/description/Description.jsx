import './description.css'

export const Description = () => {
    return (
        <div className="description-container" id="description">
            <div className="flex-container desc-cont">
                <div className="flex-child">
                    <h4><strong>Nosotros</strong></h4>
                    <p>
                        Nuestro Estudio Jurídico especializado en Derecho del Trabajo y Accidentes Laborales,
                        orientado a brindar un asesoramiento de elevada excelencia, personalizado y ágil. <br/>
                        Tenemos la flexibilidad de contar con profesionales de otras áreas, con experiencia en Derecho
                        de Familia, Sucesiones, Civil y Comercial, entre otras ramas.<br/>
                        Ejercemos nuestras especialidades con seriedad, honestidad y compromiso con nuestros
                        clientes, quienes lo avalan y nos recomiendan.
                    </p>
                </div>

                <div className="flex-child">
                    <h4><strong>Aca iria una foto</strong></h4>
                    <p>
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of
                        using Lorem Ipsum is that it has a more-or-less normal distribution of
                        letters.
                    </p>
                </div>
            </div>
        </div>
    );
};