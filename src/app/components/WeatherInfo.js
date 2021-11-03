import React from 'react';

const WeatherInfo = props => {
    console.log(props)
    return(
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {
                props.temperature ?
                <div className="card card-body">
                
                    <p><i class="fas fa-map-marker-alt "></i> Localización: {props.city}, {props.country}</p>
                    <p><i class="fas fa-temperature-low "></i> Temperatura: {props.temperature} °C, {props.description} </p>
                    <p><i className="fas fa-water"></i> Humedad: {props.humidity}</p>
                    <p><i class="fas fa-wind "></i> Velocidad del viento: {props.wind_speed}</p>

            </div> 
            :
            <div className="card card-body"> 
            </div>
            }
        </div>
    )
}

export default WeatherInfo;