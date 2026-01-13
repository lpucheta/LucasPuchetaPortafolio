import styles from './Proyectos.module.css'
import CardProyectos from './CardProyectos'
import img1 from '../assets/img-proyectos/img-ejemplo.png'
import imgDesarrollo from '../assets/img-proyectos/endesarrollo.jpg'


function Proyectos() {

    const misProyectos = [
        {
            id: 1,
            nombre: 'Landing Cafeteria',
            descripcion: 'Landing page para una cafeteria ficticia enfocado en el desarrollo web responsive.',
            imagen: img1,
            tecnologias: ['HTML', 'CSS', 'JavaScript', 'React'],
            link: 'https://landing-cafeteria-720fv7ujc-lucas-puchetas-projects.vercel.app/'
        },
        {
            id: 2,
            nombre: 'Proyecto en Desarrollo',
            descripcion: 'Proximo proyecto en desarrollo.',
            imagen: imgDesarrollo,
            tecnologias: ['React', 'CSS'],
            link: '#'
        },
        {
            id: 3,
            nombre: 'Proyecto en Desarrollo',
            descripcion: 'Proximo proyecto en desarrollo.',
            imagen: imgDesarrollo,
            tecnologias: ['React', 'CSS'],
            link: '#'
        },
        {
            id: 4,
            nombre: 'Proyecto en Desarrollo',
            descripcion: 'Proximo proyecto en desarrollo.',
            imagen: imgDesarrollo,
            tecnologias: ['React', 'CSS'],
            link: '#'
        }
    ]


    return (
        <section className={styles.container} id='proyectos'>
            <header className={styles.titulo}>
                <h1>Proyectos</h1>
                <p>Estos son los proyectos que estuve realizando por cuenta propia</p>
            </header>
            
            <div className={styles.contenedorGrid}>
                {misProyectos.map(proyecto => (
                    <CardProyectos 
                        key={proyecto.id} 
                        nombre={proyecto.nombre}
                        info={proyecto}
                    />
                ))}
            </div>
       
        </section>
        
        
        
    )
}


export default Proyectos