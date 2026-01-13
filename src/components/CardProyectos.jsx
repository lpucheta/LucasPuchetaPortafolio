import styles from './CardProyectos.module.css'
import { FaReact, FaCss3Alt, FaJsSquare, FaHtml5 } from 'react-icons/fa';

const iconosTecnologias = {
    React: <FaReact title="React" className={styles.iconReact} />,
    CSS: <FaCss3Alt title="CSS" className={styles.iconCss} />,
    JavaScript: <FaJsSquare title="JavaScript" className={styles.iconJs} />,
    HTML: <FaHtml5 title="HTML" className={styles.iconHtml} />
}


function CardProyectos({ info }) {

    const { nombre, descripcion, imagen, tecnologias, link } = info

    return(
        <article className={styles.contenedorCard}>
            <img src={imagen} alt={nombre} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                
                <div className={styles.iconosContainer}>
                    {tecnologias.map((tec, index) =>(
                        <span key={index} className={styles.icono}>
                            {iconosTecnologias[tec]}
                        </span>
                    ))}
                </div>


                <a href={link} target="_blank" rel="noopener noreferrer" className={styles.botonLink}>Ver Proyecto</a>
                </div>

                
        </article>
    )
}

export default CardProyectos