import React from 'react';

const Weather = (props)=>(
	<div className="weather__info">
		{
			props.data.city && props.data.country && <p className="weather__key">Locatioin : <span className="weather__value">{props.data.city},{props.data.country}</span></p> 
		}
		{
			props.data.temperature && <p className="weather__key">Temperature: <span className="weather__value">{props.data.temperature}</span></p>
		}
		{
			props.data.humidity && <p className="weather__key">Humidity: <span className="weather__value">{props.data.humidity}</span></p>
		}
		{
			props.data.description && <p className="weather__key">Conditions: <span className="weather__value">{props.data.description}</span></p>
		}
		{
			props.data.error && <p className="weather__error">{props.data.error}</p>
		}
	</div>
)

export default Weather;