import styles from './Footer.module.css'

function Footer() {

    return(
        <footer className={styles.container}>
    <div className={styles.izqContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 8l-4 4l4 4" />
            <path d="M17 8l4 4l-4 4" />
            <path d="M14 4l-4 16" />
        </svg>
        <h1><a href="#">Lucas Pucheta</a></h1>
    </div>

    <div>
        <ul className={styles.redes}>
            <li><a href="https://github.com/lpucheta" className={styles.enlaceRedes} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/lucas-pucheta-13b661163/" className={styles.enlaceRedes} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/lpucheta.dev/" className={styles.enlaceRedes} target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
    </div>
</footer>
    )
}

export default Footer