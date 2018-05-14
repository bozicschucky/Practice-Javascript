// Init storage
const storage = new Storage();

// Get location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init UI
const ui = new UI()

// Get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);


// Change location event

document.getElementById('w-change-btn').addEventListener('click', (e) =>{
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // Change location

    weather.changeLocation(city,state);

    // set location in ls
    storage.setLocationData(city,state);

    // Get and display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');
});

function getWeather(){

    weather.getWeather()
    .then( results => {
        // console.log(results);
        ui.paint(results);
    })
    .catch(err => console.log(err));
}
