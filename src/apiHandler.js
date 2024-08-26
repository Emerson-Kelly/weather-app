import { connected } from 'process';
import './styles.css';
import { filterAPIData } from './distributeAPIData';

const searchField = document.getElementById("searchField");

searchField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleAPI(searchField.value);
    }
});

export async function handleAPI(searchFieldValue) {

    console.log('User entered:', searchFieldValue);

    const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + searchFieldValue + '/?key=NVX2UNEEQ2C2M6SWL7G732EED', { mode: 'cors' });

    try {
        const data = await response.json();
        console.log(data);
        filterAPIData(data);
    } catch (error) {
        console.error("Error fetching the weather data:", error);
    }
}