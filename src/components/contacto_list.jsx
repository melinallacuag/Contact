import React from "react";
import {Contacto} from '../models/contacto.class'
import Contact from "./pure/contact"

const ContactoList = () => {

    const  defaultContacto = new Contacto('Juans','Perez','juan@gmail.com',false);

    return(
        <div>
         <div>
            Datos de la Persona

            <Contact task={defaultContacto}></Contact>
            
         </div>
        </div>
    )
};


export default ContactoList;