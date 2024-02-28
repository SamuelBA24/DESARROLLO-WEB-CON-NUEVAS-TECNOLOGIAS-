// Sin Parametros
const Sinparametro = () => {
    console.log("Hola, me presento. Soy una función sin parámetros. No recibo nada.");
    };

    // Con Parametro
    const funcionConUnParametro = (Parametro) => {
    console.log("Hola, me presento. Soy una función con un parámetro. Recibo un parámetro: " + Parametro);
    };

    //Con tres Parametros
    const funcionConTresParametros = (parametro1, parametro2, parametro3) => {
        let suma = parametro1 + parametro2 + parametro3;
        console.log(`¡Hola, soy una función con tres parámetros! La suma de los parámetros es: ${suma}`);
    };

    //Declaración de variables con let y const
    let edad = 19;
    const ciudad =  "Madrid";
    let nombre = "Samuel";
    let saldo = 230000;
    const producto = "Jacket";
    let disponible = true;

    // Llamado a las funciones
    console.log(edad);
    console.log(ciudad);
    console.log(nombre);
    console.log(saldo);
    console.log(producto);
    console.log(disponible);
