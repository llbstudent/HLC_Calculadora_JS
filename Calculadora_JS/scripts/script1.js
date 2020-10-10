//Var globales
var acumulaNumeros = '0'; // Nos servirá para acumular números
var operador = ""; // Nos servirá para conocer la operación que queremos realizar
var resultado = 0; // Nos servirá para guardar un resultado previo y/o actual
var resultadoVisible;

//Main
window.addEventListener('load', function() {
    //Capturamos los elementos necesarios
    resultadoVisible = document.getElementById("resultadoVisible");
    var btnCalc = document.getElementsByClassName("btnPress");

    //Añadimos eventos a todos los botones
    for (let i = 0; i < btnCalc.length; i++) {
        btnCalc[i].addEventListener('click', pulsaBoton);
    }

    //Visulalización del número actual en la calculadora
    resultadoVisible.innerHTML = acumulaNumeros;
})

//Métodos
function pulsaBoton() {
    if (this.id.includes('num')) {
        addNumber(this.id);

    } else if (this.id.includes('operacion')) {
        console.log("Soy una operación " + this.id);
        addOperator(this.id);

    } else if (this.id.includes('punto')) {
        console.log("Soy un punto " + this.id);

    } else if (this.id.includes('reset')) {
        resultado = 0;
        acumulaNumeros = '0';
        resultadoVisible.innerHTML = acumulaNumeros;

    } else if (this.id.includes('resultado')) {
        calcularResultado();

    }
}

//Método que nos añade números al pulsar los botones
function addNumber(num) {
    switch (num) {

        case 'num0':
            if (acumulaNumeros === '0') {
                acumulaNumeros = String(0);
            } else {
                acumulaNumeros += String(0);
            }
            resultadoVisible.innerHTML = acumulaNumeros;
            break;

        case 'num1':
            if (acumulaNumeros === '0') {
                acumulaNumeros = String(1);
            } else {
                acumulaNumeros += String(1);
            }
            resultadoVisible.innerHTML = acumulaNumeros;
            break;

        case 'num2':
            if (acumulaNumeros === '0') {
                acumulaNumeros = String(2);
            } else {
                acumulaNumeros += String(2);
            }
            resultadoVisible.innerHTML = acumulaNumeros;
            break;


        case 'num3':
            if (acumulaNumeros === '0') {
                acumulaNumeros = String(3);
            } else {
                acumulaNumeros += String(3);
            }
            resultadoVisible.innerHTML = acumulaNumeros;
            break;

        case 'num4':
            if (acumulaNumeros === '0') {
                acumulaNumeros = String(4);
            } else {
                acumulaNumeros += String(4);
            }
            resultadoVisible.innerHTML = acumulaNumeros;
            break;

        case 'num5':
            if (acumulaNumeros === '0') {
                acumulaNumeros = String(5);
            } else {
                acumulaNumeros += String(5);
            }
            resultadoVisible.innerHTML = acumulaNumeros;
            break;

        case 'num6':
            if (acumulaNumeros === '0') {
                acumulaNumeros = String(6);
            } else {
                acumulaNumeros += String(6);
            }
            resultadoVisible.innerHTML = acumulaNumeros;
            break;

        case 'num7':
            if (acumulaNumeros === '0') {
                acumulaNumeros = String(7);
            } else {
                acumulaNumeros += String(7);
            }
            resultadoVisible.innerHTML = acumulaNumeros;
            break;

        case 'num8':
            if (acumulaNumeros === '0') {
                acumulaNumeros = String(8);
            } else {
                acumulaNumeros += String(8);
            }
            resultadoVisible.innerHTML = acumulaNumeros;
            break;

        case 'num9':
            if (acumulaNumeros === '0') {
                acumulaNumeros = String(9);
            } else {
                acumulaNumeros += String(9);
            }
            resultadoVisible.innerHTML = acumulaNumeros;
            break;
    }
}


//Método que nos selecciona la operación que deseamos
function addOperator(operacion) {
    resultado = Number(acumulaNumeros);
    acumulaNumeros = '0';
    //console.log(operacion);

    switch (operacion) {
        case 'operacionPorcentaje':
            operador = '%';
            break;

        case 'operacionSuma':
            operador = '+';
            break;

        case 'operacionResta':
            operador = '-';
            break;

        case 'operacionMultiplicacion':
            operador = '*';
            break;

        case 'operacionDivision':
            operador = '/';
            break;

        default:
            break;
    }
}


//----------------------------------------------------------
// FUNCIONES PARA EL CALCULO DE LAS OPERACIONES ARITMÉTICAS
//----------------------------------------------------------
function calcularResultado() {
    switch (operador) {
        case '+':
            resultado += Number(acumulaNumeros);
            acumulaNumeros = String(resultado);
            resultadoVisible.innerHTML = acumulaNumeros;
            break;

        case '-':
            resultado -= Number(acumulaNumeros);
            acumulaNumeros = String(resultado);
            resultadoVisible.innerHTML = acumulaNumeros;
            break;

        case '*':
            resultado *= Number(acumulaNumeros);
            acumulaNumeros = String(resultado);
            resultadoVisible.innerHTML = acumulaNumeros;
            break;

        case '/':
            resultado /= Number(acumulaNumeros);
            acumulaNumeros = String(resultado);
            resultadoVisible.innerHTML = acumulaNumeros;
            break;

        case '%':
            resultado = (resultado * Number(acumulaNumeros)) / 100;
            acumulaNumeros = String(resultado);
            resultadoVisible.innerHTML = acumulaNumeros;
            break;

    }
}