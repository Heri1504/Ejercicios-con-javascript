
// pedir 2 numeros y decir cual es mayor, menor o igual

// let numero1 = prompt('Dame un numero');
//  let numero2 = prompt('Dame otro numero');

// if (numero1 > numero2) {
//     document.write('El primer numero es mayor : ' + numero1);
    
// }else if (numero1 < numero2) {
//     document.write('El segundo numero es mayor : ' + numero2);
// }else if (numero1 = numero2) {
//      document.write('Los numeros son iguales : ' + numero1);
//  }

// par o impar
// let par = prompt ('Escribe un numero');
// let valor = (par % 2===0) ? 'El numero es par' : 'El numero es impar'
//  document.write (valor);

// pedir dos numeros y devolder el cociente

//  let numero1 = prompt ('Escribe un numero');
// let numero2 = prompt ('Escribe otro numero');

// if (numero1 == 0 || numero2 == 0){
// document.write(' Error 404 ');
// }else if (numero1 > 0 && numero2 > 0){

//      document.write('El cociente es '+ numero1/numero2);
//  }

//  pida dos números y pregunte cuál operación quiere hacer con los números, sumar, restar, multiplicar o dividir.
 let numero1 = prompt('Introduce un numero');
 let numero2 = prompt('Introduce otro numero');
 numero1 = Number(numero1);
 numero2 = Number(numero2);

 let operacion = prompt('Que operacion desea realizar  (sumar, restar, multiplicar, o dividir)');

 switch (operacion) {
    case 'sumar':
       document.write('El resultado de la suma es: '+ (numero1+numero2));
        
         break;
    case 'restar':
        document.write('El resultado de la resta es: '+(numero1-numero2));

        break;
    case 'multiplicar':
         document.write('El resultado de la multiplicacion es:' + (numero1*numero2));
        
        break;
     case 'dividir':
         document.write('El resultado de la division es: ' + (numero1/numero2));

        break;
     default:
         document.write('Escribe una operacion aritmetica');
         break; 
        
 }