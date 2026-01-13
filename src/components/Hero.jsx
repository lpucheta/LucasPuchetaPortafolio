import styles from './Hero.module.css'
import imgHero from '../assets/Gem-pc.png'


function Hero() {

    // Función para manejar el scroll con los buttons
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            
            const offset = 80; 
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };


    return (
        <section className={styles.seccion}>
            <div className={styles.contenedorPrincipal}>
                <header>
                    <h1 className={`${styles.titulo} ${styles.headerTexto}`}>
                        <span>Desarrollador</span>
                        <span> Frontend</span>
                    </h1>
                    <p className={styles.parrafo}>Soy Lucas, desarrollador frontend enfocado en crear interfaces limpias y funcionales.</p>
            </header>

                <div className={styles.contenedorBotones}>
                    <button className={styles.botonProyectos} onClick={() => scrollToSection('proyectos')}>Ver Proyectos</button>
                    <button className={styles.botonContacto} onClick={() => scrollToSection('contacto')}>Contacto</button>
                </div>
            
            <nav>
                <div className={styles.contenedorRedes}>
                    <h3>Encuentrame en</h3>
                    <ul className={styles.redes}>
                        <li><a href="https://github.com/lpucheta" className={styles.enlaceRedes} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/lucas-pucheta-13b661163/" className={styles.enlaceRedes} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://www.instagram.com/lpucheta.dev/" className={styles.enlaceRedes} target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
            </nav>

            </div>
            

            <div>
                <img src={imgHero} alt="imagen-ilustrativa" className={styles.imagen} />
            </div>

        </section>
        
    )
}

export default Hero