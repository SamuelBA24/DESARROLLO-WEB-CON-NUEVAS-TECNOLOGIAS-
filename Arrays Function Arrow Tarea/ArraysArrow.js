//Arreglo 1 
const Array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const method1 = Array1.filter((numero) => numero % 2 !== 0);

//Arreglo 2
const Array2 =[2,4,6,8,10,12,14,16,18,20];
const method2 = Array2.map((numero) => numero * 2);

//Arreglo 3
const Array3 =[3,7,22,5,9];
const method3 = Array3.reduce((total, numero) => total * numero , 1);

//Arreglo 4
const Array4 = [10,30,50,123,67,189,101];
const method4 = Array4.reduce((maximo, numero) => Math.max(maximo, numero),-Infinity);

//Arreglo 5
const Array5 = ['hola', 'Buenas noches', 'Como estás', 'Este es ', 'un texto', 'Transformado en','Mayusculas'];
const method5 = [];
Array5.forEach((palabra) => method5.push(palabra.toUpperCase()));

//Arreglo 6
const Array6 = [10,-4,23,-12, 45,-7, 8];
const method6 = Array6.every((numero) => numero >= 0);

console.log('Arreglo filtrado de números impares:', method1);
console.log('Arreglo con elementos duplicados:', method2);
console.log('Suma de todos los elementos:', method3);
console.log('Elemento mayor del arreglo:', method4);
console.log('Arreglo con elementos en mayúsculas:', method5);
console.log('¿Todos los elementos son positivos?:', method6);