import styles from './About.module.css'
import { FaReact, FaCss3Alt, FaJsSquare, FaHtml5 } from 'react-icons/fa';
import { FaGitAlt, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiPostgresql, SiSqlite } from 'react-icons/si';

const iconosTecnologias = {
    React: <FaReact title="React" className={styles.iconReact} />,
    CSS: <FaCss3Alt title="CSS" className={styles.iconCss} />,
    JavaScript: <FaJsSquare title="JavaScript" className={styles.iconJs} />,
    HTML: <FaHtml5 title="HTML" className={styles.iconHtml} />,
    GIT: <FaGitAlt title="Git" className={styles.iconGit} />,
    GitHub: <FaGithub title="GitHub" className={styles.iconGitHub} />,
    NodeJS: <FaNodeJs title="Node.js" className={styles.iconNode} />,
    TailwindCSS: <SiTailwindcss title="Tailwind CSS" className={styles.iconTailwind} />,
    MySQL: <SiMysql title="MySQL" className={styles.iconMysql} />,
    PostgreSQL: <SiPostgresql title="PostgreSQL" className={styles.iconPostgresql} />,
    SQLite: <SiSqlite title="SQLite" className={styles.iconSqlite} />,
}



function About() {
    return (
        <div className={styles.contenedor} id='about'>
            <div className={styles.textoContainer}>
                <h1>Sobre mi</h1>
                <p>Me especializo en el desarrollo frontend utilizando HTML, CSS, JavaScript y React.
                Actualmente estoy ampliando mi stack hacia el backend, con foco en seguir mejorando como desarrollador.</p>
            </div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h2 className={styles.titulo}>Stack Tecnologico</h2>
                <ul className={styles.listaContainer}>
                    <li className={styles.lista}>{iconosTecnologias.HTML}</li>
                    <li className={styles.lista}>{iconosTecnologias.CSS}</li>
                    <li className={styles.lista}>{iconosTecnologias.JavaScript}</li>
                    <li className={styles.lista}>{iconosTecnologias.React}</li>
                    <li className={styles.lista}>{iconosTecnologias.GIT} {iconosTecnologias.GitHub}</li>
                    <li className={styles.lista}>{iconosTecnologias.NodeJS}</li>
                    <li className={styles.lista}>{iconosTecnologias.TailwindCSS}</li>
                    <li className={styles.lista}>{iconosTecnologias.MySQL}</li>
                </ul>
            </div>
            

        </div>
    )
}

export default About