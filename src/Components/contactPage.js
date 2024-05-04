import './css/ContactPage.css';

function ContactPage() {
  
  return (
    <div className="contact-page">
      <h1 className='titulo-contacto'>Contacto</h1>
      <div className="contact-form">
        <h2 className='subtitulo-contacto'>Envíanos un mensaje</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email"  required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message"  required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
