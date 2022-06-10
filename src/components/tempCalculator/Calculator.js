import React from "react";
import TempInput from "../tempCalculator/TempInput"
import  { toCelsius, toFahrenheit, toKelvin, convert } from "../../lib/converter"

class Calculator extends React.Component {

    state = {
        temperature: '',
        scale: ''
    }

    
    handlaeChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale
        });
    }

    render() {
        const { scale, temperature } = this.state;
        const celsius = scale === 'f' || scale === 'k' ? convert(temperature, toCelsius, scale) : temperature;
        const fahrenheit = scale === 'c' || scale === 'k' ? convert(temperature, toFahrenheit, scale) : temperature;
        const kelvin = scale === 'f' || scale === 'c' ? convert(temperature, toKelvin, scale) : temperature;
        return (
            <div className="container mb-4">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <TempInput scale="c" onTemperatureChange={this.handlaeChange} temperature={celsius}/>
                                    <TempInput scale="f" onTemperatureChange={this.handlaeChange} temperature={fahrenheit}/>
                                    <TempInput scale="k" onTemperatureChange={this.handlaeChange} temperature={kelvin}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        );
    }

    
}
export default Calculator;