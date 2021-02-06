
const apiKey = '90389a28c75f30a2126f4ec7e1c08520';

const getData = async (city) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
  const json = response.json();

  if (response.status !== 200) {
    throw Error('City not supported');
  } else {
    return json;
  }
};


export default getData;