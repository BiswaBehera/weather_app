
const cityForm = document.querySelector('.change-location');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const updateUI = (data) => {

    console.log(data);
    const {cityDetails, weather} = data;

    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5> 
        <div class="my-3">${weather.WeatherText}</div> 
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span> 
            <span>&deg;C</span> 
        </div>
    `;

    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

};

const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return {
        cityDetails: cityDets,
        weather
    };

};

cityForm.addEventListener('submit', e => {

    //to prevent default action
    e.preventDefault();

    //to get the city name
    const cityName = cityForm.city.value.trim();
    cityForm.reset();
    
    updateCity(cityName)
        .then( data => updateUI(data))
        .catch( err => console.log(err));

});

