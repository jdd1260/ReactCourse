import axios from 'axios';

const API_KEY = 'a2eff798997a0324e4ac42c8123d91b3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(cityName) {
    const url = `${ROOT_URL}&q=${cityName},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
