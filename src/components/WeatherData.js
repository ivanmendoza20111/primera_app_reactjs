import React, { Component } from 'react';

import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={12} weatherState={'cloud'}/>
        <WeatherExtraInfo humidity={80} wind={'10m/s'}/>
    </div>
);

export default WeatherData;