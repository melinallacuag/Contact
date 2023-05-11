import React from "react";
import {Contacto} from '../../models/contacto.class'
import { PropTypes } from "prop-types";
import ContactoEstado from "../contacto_estado";

const Contact = ({ task }) => {

    return(
        <div>
            <h2>
               Nombre: { task.nombre }
            </h2>
            <p>
                Apellido: { task.apellido }
            </p>
            <p>
                Email: { task.email }
            </p>
            
             <ContactoEstado contacto={task} />
            
        </div>
    )
};

Contact.protoTypes = {
    task: PropTypes.instanceOf(Contacto)
};

export default Contact;