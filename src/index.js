/*
COMPARANDO JAVASCRIPT CON JSX

Javascript :
    Creamos un nuevo elemento 'h1' y le agregamos un texto.
    El elemento nuevo se agrega dentro de un elemento existente llamado 'principal'
*/ 
/*
const new_element = document.createElement('h1');
new_element.innerText = 'Texto con javascript';

const container = document.getElementById('principal');
container.appendChild(new_element);
*/





/*
JSX (es parte de React) :
    Se importa las librerias 
        React	, es igual “createElement”
        ReactDOM, es igual a “appendChild”  
*/
import React from 'react';
import ReactDOM from 'react-dom';

const new_element = <h1>Texto con JSX - React</h1>;
const container = document.getElementById('principal');

// ReactDOM.render(__qué_mostrar__, __dónde_mostrar__);
ReactDOM.render(new_element, container);