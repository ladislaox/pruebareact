/* 
CREANDO EL PRIMER COMPONENTE 
----------------------------
Se crea el archivo js que es el nuevo componente.
Se llama al componente y se manda al ReactDom para mostrarlo.
*/

import React from 'react';
import ReactDOM from 'react-dom';

// importamos al componente Badge para mandarlo a mostrar (renderizar)
import Cpnt_badge from './components/Cpnt_badge';

const container = document.getElementById('principal');

//ReactDom siempre recibe JSX, por eso para renderizar el componente se envia como un "elemento" (etiqueta). Es por eso las "< />"
ReactDOM.render( <Cpnt_badge /> , container);



