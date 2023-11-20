/*"#" Incrementa el valor numérico en 1.
"@" Decrementa el valor numérico en 1.
"*" Multiplica el valor numérico por sí mismo.
"&" Imprime el valor numérico actual.
*/
output = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&';
var number = 0; 
let formatOutput = output.split('');

for (const key in formatOutput){
  if (formatOutput[key] === '#'){
    number++;
  } else if (formatOutput[key] === '@'){
    number--;
  } else if (formatOutput[key] === '*'){
    number *= number;
  } else if (formatOutput[key] === '&'){
    console.log('El resultado es',number);
  }
}

