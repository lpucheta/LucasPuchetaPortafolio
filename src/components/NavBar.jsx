import styles from './NavBar.module.css'
import { useState } from 'react'

function NavBar() {

    const [menuAbierto, setMenuAbierto] = useState(false);


    return (
        <nav className={styles.navContainer}>
            <div className={styles.izqContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
                <h1><a href="#" className={styles.enlace}>Lucas Pucheta</a></h1>
            </div>
            

            {!menuAbierto && (
                <button className={styles.botonMenu} onClick={() => setMenuAbierto(!menuAbierto)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                </button>

            )}



            <div className={`${styles.menuContainer} ${menuAbierto ? styles.active : ""}`}>
                <button className={styles.botonCerrar} onClick={() => setMenuAbierto(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                </button>

                <ul className={styles.listaNavegacion}>
                    <li><a href="#proyectos" className={styles.linkNavegacion}>Proyectos</a></li>
                    <li><a href="#about" className={styles.linkNavegacion}>Sobre Mi</a></li>
                    <li><a href="#contacto" className={styles.linkNavegacion}>Contacto</a></li>
                </ul>
            </div> 
        </nav>
    )
}

export default NavBar