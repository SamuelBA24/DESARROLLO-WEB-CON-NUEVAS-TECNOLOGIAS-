//Declara variable sin actualizar
let nombreUsuario;
// declaración inicial
let user = "Juan"

console.log(nombreUsuario);
console.log(user);

// Operador ternario

user==="Pedro"? console.log("Verdadero") : console.log("Falso"); 

//Const Es parecido a constante

const PI=3.1416
//Trato de cambiar el valor
//PI = 20;

//Metodos propios del lenguaje
let PI_DOS;
PI_DOS = Math.PI;
user.includes("P");
console.log(user.length);
//Mertodos o funciones
//Arrow function

const saludarUsuario = ()  => {
    return "Hola Juanito";
}

const saludarUser = nombreUsuario =>{
    return "Hola" +nombreUsuario;
}

const sumarDatos =(NumberOne, NumberTwo)=>{
    return NumberOne+NumberTwo;
}

console.log(sumarDatos(1.0,2));

// instancia de  una  función. Hacwe  lo mismo

let tres = saludarUser;
console.log(tres("Pedro"));

//ciclos

for (i=0;  i<10;i++){
    
}

// Funcion de edad arrow function
//

const edadUsuario = () => {
    return new Date().getFullYear() - 1995;
}

console.log(edadUsuario());

