let continuar = true

const recargo5 = 1.05
const recargo10 = 1.10
const recargo15 = 1.15

while(continuar) {

    alert('.:: CALCULADOR DE CUOTAS ::.');

    montoAPagar = parseFloat(prompt('Por favor, ingrese el monto a pagar:'));
    cantCuotas = parseInt(prompt('Por favor, ingrese la cantidad de cuotas:'));

    if(!(isNaN(montoAPagar) || isNaN(cantCuotas))) {
        continuar = false
    } else {
        alert('Por favor, ingrese un valor numérico válido.')
    }

    function pagoEnCuotas (monto, cuotas) {

        if(cuotas > 0 && cuotas <= 3) {
            pagoTotal = monto/cuotas;
            alert('Pago sin interés: usted abonará $'+pagoTotal.toFixed(2)+' cada mes, durante '+cuotas+' meses.')

        } else if(cuotas > 3 && cuotas <= 6) {
            pagoTotal = (monto/cuotas)*recargo5;
            alert('5% de recargo: usted abonará $'+pagoTotal.toFixed(2)+' cada mes, durante '+cuotas+' meses.')

        } else if(cuotas > 6 && cuotas <= 9) {
            pagoTotal = (monto/cuotas)*recargo10;
            alert('10% de recargo: usted abonará $'+pagoTotal.toFixed(2)+' cada mes, durante '+cuotas+' meses.')

        } else if(cuotas > 9 && cuotas <= 12) {
            pagoTotal = (monto/cuotas)*recargo15;
            alert('15% de recargo: usted abonará $'+pagoTotal.toFixed(2)+' cada mes, durante '+cuotas+' meses.')

        } else {
            alert('Ingrese un número de cuotas válido. Recuerde que puede ser de 1 a 12.')
        }
    }

    pagoEnCuotas (montoAPagar, cantCuotas);
}
