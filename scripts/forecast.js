const appKey = 'OfntFkKO7BHhGFmZ5UEeC6DbBQxzRYiV';

// fetching Current conditions
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${appKey}`

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

// fetching city
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${appKey}&q=${city}`

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};
