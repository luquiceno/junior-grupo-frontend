import { Label, TextInput, Textarea } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1 style={{ fontSize: '3rem' }}>Contáctanos</h1>
      <p style={{ fontSize: '2rem', margin: '2rem 0'}}>Rellena el siguiente formulario:</p>
      <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1rem' }}>
          <Label htmlFor="email4" value="Tu correo electrónico" />
          <TextInput
            id="email4"
            type="email"
            rightIcon={HiMail}
            placeholder="nombre@apprende.com"
            required
            style={{ width: '100%', fontSize: '1.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <Label htmlFor="comment" value="Tu mensaje" />
          <Textarea
            id="comment"
            placeholder="Deja un comentario..."
            required
            rows={4}
            style={{ width: '100%', fontSize: '1.5rem' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;