function converterTemperatura() {
    //Obtendo o valor da temperatura por meio do campo celsius (input)
    const celsiusInput = document.getElementById('celsius');
    const celsius = parseFloat(celsiusInput.value);

    //Verifa se o valor é inválido
    if (isNaN(celsius)) {
        alert('Erro, digite um valor númerico válido.');
        return;
    }

    //Converte Celsius para Fahrenheit
    const fahrenheit = celsiusParaFahrenheit(celsius);

    //Exibindo o resultado
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(1);
}

function celsiusParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}