const scaleNames = {
    c: 'celsius',
    f: 'fahrenheit',
    k: 'kelvin'
}

export default function TempInput ( { temperature, scale, onTemperatureChange } ) {
    return (
        <div className="mb-3">
            <label className="form-label">{ scaleNames[scale] }</label> 
            <input type="number" step="0.1" min="0" className="form-control" value={ temperature } onChange={ (e) => onTemperatureChange(e, scale) }/>
        </div>
    );
}