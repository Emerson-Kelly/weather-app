import { connected } from "process";
import "./styles.css";
import { filterAPIData } from "./distributeAPIData";
import { initiateLoadModal } from "./loadingModal";
import { toggleTemp } from "./tempToggle";


export const searchField = document.getElementById("searchField");

searchField.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    
     // Remove all elements with class "day-container"
     const forecastContainer = document.getElementById('forecast');
     while (forecastContainer.firstChild) {
         forecastContainer.removeChild(forecastContainer.firstChild);
     }
    
    handleAPI(searchField.value);
  }
});

export async function handleAPI(searchFieldValue) {

  console.log("User entered:", searchFieldValue);
  initiateLoadModal(true);
  let metric = toggleTemp();
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchFieldValue}/next6days?unitGroup=${metric}&elements=datetime%2Cname%2Ctempmax%2Ctempmin%2Ctemp%2Cconditions%2Cicon&key=NVX2UNEEQ2C2M6SWL7G732EED&contentType=json`,
    { mode: "cors" }
  );

  try {
    const data = await response.json();
    console.log(data);
    filterAPIData(data);
  } catch (error) {
    console.error("Error fetching the weather data:", error);
  } finally {
    // Hide loading spinner
    initiateLoadModal(false);
  }
}
