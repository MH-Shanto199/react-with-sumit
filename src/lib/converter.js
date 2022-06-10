export function toCelsius(temperature, scale) {
    if ( scale === 'f' ) {
        return (temperature - 32) * 5 / 9;
    }else if ( scale === 'k' ) {
        return temperature - 273.15 
    }
}

export function toFahrenheit(temperature, scale) {
    if ( scale === 'c') {
        return ( temperature * 9/5 ) + 32;
    }else if ( scale === 'k') {
        return ( temperature - 273.15) * 9/5 + 32;
    }
}

export function toKelvin(temperature, scale) {
    if ( scale === 'c') {
        return temperature + 273.15;
    } else if ( scale === 'f') {
        return ( temperature - 32 ) * 5/9 + 273.15;
    }
}

export function convert(temperature, convertTo, scale) {
    const inputVal = parseFloat(temperature);
    if (Number.isNaN(inputVal)) {
        return '';
    }
    const output = convertTo(inputVal, scale);

    const rounded = Math.round(output * 1000) / 1000;

    return rounded.toString();
}