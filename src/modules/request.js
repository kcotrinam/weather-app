import apiKey from './global';

const getData = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
  const json = response.json();

  if (response.status !== 200) {
    throw Error('CITY NOT FOUND');
  } else {
    return json;
  }
};


export default getData;