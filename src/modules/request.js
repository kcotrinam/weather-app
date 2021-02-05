

const getData = async (key) => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=arequipa&appid=${key}`);
  const json = response.json();
  return json
}


export default getData;