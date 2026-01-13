import styles from './Contacto.module.css'
import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from 'react';


function Contacto() {

  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);


  useEffect(() => {
    if (state.succeeded) {
      const form = document.getElementById('contact-form');
      if (form) {
        form.reset(); //  limpieza de todos los inputs
      }
    }
  }, [state.succeeded]);

    return (
        <section className={styles.container} id='contacto'>
      <h2 className={styles.title}>Contacto</h2>
      <p className={styles.subtitle}>¿Tienes un proyecto en mente? Hablemos.</p>
      
      <form className={styles.form} onSubmit={handleSubmit} id="contact-form">
        <div className={styles.group}>
          <label htmlFor="name">Nombre</label>
          <input name='name' type="text" id="name" placeholder="Tu nombre" required/>
        </div>

        <div className={styles.group}>
          <label htmlFor="email">Email</label>
          <input name='email' type="email" id="email" placeholder="email@ejemplo.com" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className={styles.group}>
          <label htmlFor="message">Mensaje</label>
          <textarea name='message' id="message" rows="5" placeholder="Cuéntame sobre tu idea..." className={styles.textarea} required></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button type="submit" className={`${styles.button} ${state.succeeded ? styles.buttonSuccess : ''}`} 
        disabled={state.submitting || state.succeeded}>
          {state.submitting ? "Enviando..." : state.succeeded ? "¡Mensaje enviado!" : "Enviar mensaje"}
        </button>
        {state.succeeded && <p className={styles.thanks}>¡Gracias! Te responderé pronto.</p>}
      </form>
    </section>
  );
}

export default Contacto