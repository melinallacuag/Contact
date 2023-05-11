import { useState } from 'react';

function ContactoEstado(props) {
  const [conectado, setConectado] = useState(props.contacto.conectado);

  function cambiarEstado() {
    setConectado(!conectado);
  }

  return (
    <div>
      {conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}
      <button onClick={cambiarEstado}>
        {conectado ? 'Desconectar' : 'Conectar'}
      </button>
    </div>
  );
}

export default ContactoEstado;