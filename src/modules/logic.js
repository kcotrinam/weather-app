import getData from './request'

class Weather {
  constructor() {
    this.cityContainer = document.querySelector('.content .city');
    this.tempContainer = document.querySelector('.content .temp');
    this.minTempContainer = document.querySelector('.content .mintemp');
    this.maxTempContainer = document.querySelector('.content .maxtemp');
  }

  transformTemp (temp) {
    return Math.round(temp - 273.15)
  }

  populateContainers (city, temperature, minTemperature, maxTemperature) {
    this.cityContainer.innerHTML = `City: ${city}`;
    this.tempContainer.innerHTML = `Temperature: ${temperature} °C`;
    this.minTempContainer.innerHTML = `Temperature minimum: ${minTemperature} °C`;
    this.maxTempContainer.innerHTML = `Temperature maximum: ${maxTemperature} °C`;
  }

  render (city, temp, minTemp, maxTemp) {
    const tmp = this.transformTemp(temp);
    const mTemp = this.transformTemp(minTemp);
    const mxTemp = this.transformTemp(maxTemp);
    this.populateContainers(city, tmp, mTemp, mxTemp);
  }
}

const searchWeather = async (city) => {
  const value = await getData(city)
  
  const w = new Weather();
  w.render(value.name, value.main.temp, value.main.temp_min, value.main.temp_max);
}

const displayInfo = (ev) => {
  ev.preventDefault()
  const form = document.querySelector('form')
  const city = document.querySelector('.city-input').value;
  if (city) searchWeather(city);
  form.reset()

}

export default displayInfo;