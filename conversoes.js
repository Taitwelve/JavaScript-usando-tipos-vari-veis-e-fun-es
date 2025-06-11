//conversão para número
Number("1"); // retorna o número 1 
Number("Alura"); // retorna NaN
Number(undefined); // retorna NaN
Number(null); // retorna 0

//Number.parseInt() e Number.parseFloat()
parseInt(‘4’); // retorna o número 4
parseInt(‘4.5’); // retorna o número 4
parseFloat(‘4’); // retorna o número 4
parseFloat(‘4.5’); // retorna o número 4.5
parseFloat(‘4.5abc’); // retorna o número 4.5

+’45’ // retorna o número 45
+true // retorna o número 1
console.log(typeof +’45’); // retorna ‘number’
console.log(typeof +true); // retorna ‘number’
