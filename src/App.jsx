import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import styles from './App.module.css'
import Proyectos from './components/Proyectos'
import About from './components/About'
import Contacto from './components/Contacto'

function App() {
  

  return (
    <div className={styles.appContainer}>
      <header>
        <NavBar />
      </header>
      <main className={styles.mainContent}>
        <Hero />
        <Proyectos />
        <About />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

export default App
