import React from 'react';
import ReactDOM from 'react-dom';

/* COMPARANDO React.createElement() CON JSX

REACT CREATE ELEMENT : React.createElement()
---------------------------------------------
    Recibe 3 argumentos:
    - El tipo de elemento que estamos creando
    - sus atributos o props(properties)
    - y el children que es el contenido.
*/ 

//1. Crear 1 elemento y mostrarlo
/*
const new_element = React.createElement('h1', {}, 'Contenido del nuevo elemento por React.createElement()');
const container = document.getElementById('principal');
ReactDOM.render(new_element, container);
*/

//2. Crear 1 elemento y mandar props (properties) y mostrarlo
/*
const new_element = React.createElement(
    'a',
    {href:'http://www.youtube.com' , target:'_blank'},
    'Enviando props en React.createElement()'
);
const container = document.getElementById('principal');
ReactDOM.render(new_element , container);
*/

//3. Crear 1 elemento y uso de parametros
// Para mostrar parametros se usan apostrofes graves ( `${ aqui_va_la_variable }` = alt + 96 ) 
/*
var nombre = 'Pablo';
const new_element = React.createElement(
    'h1',
    {},
    `Hola me llamo ${nombre}`    
);
const container = document.getElementById('principal');
ReactDOM.render(new_element , container);
*/

//4. Crear elementos dentro de otro elemento
// Se crea dentro del div etiquetas 'h1' y 'a'
/*
const new_element = React.createElement(
    'div',
    {},
    React.createElement(
        'h1',
        {},
        'creando elemento h1 dentro del elemento div con React.createElement'
    ),
    React.createElement(
        'a',
        {href : 'http://www.gmail.com'},
        'Ir a Gmail'
    )
);
const container = document.getElementById('principal');
ReactDOM.render(new_element , container);
*/

//5. Agregando estilos en React.createElement
// Para indicar los estilos dentro de los props se usan {}. Dentro de las llaves se indican los estilos.
const new_element = React.createElement(
    'div',
    {style : {background: 'yellow', fontSize : '42px' } },
    'Usando estilos con React.createElement()'
);
const container = document.getElementById('principal');
ReactDOM.render(new_element , container);





/* JSX :
---------- */ 

//1. Crear 1 elemento y mostrarlo
/*
const new_element = <h1>Contenido del nuevo elemento con JSX</h1>
const container = document.getElementById('principal');
ReactDOM.render(new_element, container);
*/

//2. Crear 1 elemento y mandar props (properties) y mostrarlo
/*
const new_element = <a href="http://www.youtube.com" target="_blank">Enviando props con JSX</a>
const container = document.getElementById('principal');
ReactDOM.render(new_element , container);
*/

//3. Crear 1 elemento y uso de parametros
// En JSX no es necesario agregar $ , solo basta con las {} y el nombre de la variable
/*
var nombre = 'Mario';
const new_element = <h1>Hola me llamo {nombre}</h1>
const container = document.getElementById('principal');
ReactDOM.render(new_element , container);
*/

//4. Crear elementos dentro de otro elemento
// Se crea dentro del div etiquetas 'h1' y 'a'
/*
const new_element = <div><h1>creando elemento h1 dentro del elemento div con JSX</h1><a href="http://www.gmail.com">Ir a Gmail con JSX</a></div>
const container = document.getElementById('principal');
ReactDOM.render(new_element , container);
*/

//5. Agregando estilos en JSX
/*
    // A) Declarando el estilo en una constante y llamarla en JSX
    const misestilos = {
        background : 'green',
        fontSize : '30px'
    }
    //const new_element = <div style = {misestilos} ><h1>Agregandpo estilos con JSX</h1></div>

    // B) Usando llaves dobles {{ }} en la misma linea de JSX
    const new_element = <div style = {{ background : 'red' }}><h1>Agregandpo estilos con JSX</h1></div>


const container = document.getElementById('principal');
ReactDOM.render(new_element , container); 
*/
    