/*
CREANDO EL COMPONENTE
---------------------

- todo componente se crea como una CLASE
- todo componente se exporta
*/

import React from 'react';

class Cpnt_badge extends React.Component{
// se empieza a crear el componente con JSX

    //se ingresa lo que se va a mostrar (renderizar)
    render() {

        // la clase devolvera JSX
        return(
            <div>
                <h1>Mi primer componente</h1>
                <div>
                    <a href="http://www.platzi.com">Mi primer link en mi componente</a>
                </div>
                <div style={{background:'lightblue', textDecoration:'underline'}}>Texto prueba en mi componente con JSX</div>
            </div>
        );
    }

}

//exportamos el componente
export default Cpnt_badge;
