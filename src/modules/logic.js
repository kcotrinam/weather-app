import getData from './request'

class Weather {
  constructor() {
    this.cityContainer = document.querySelector('.content .city');
    this.tempContainer = document.querySelector('.content .temp');
    this.minTempContainer = document.querySelector('.content .mintemp');
    this.maxTempContainer = document.querySelector('.content .maxtemp');
  }

  transformTemp (temp) {
    return temp - 273.15
  }

  populateContainers (city, temperature, minTemperature, maxTemperature) {
    this.cityContainer.innerHTML = `City: ${city}`;
    this.tempContainer.innerHTML = `Temperature: ${temperature}`;
    this.minTempContainer.innerHTML = `Temperature minimum: ${minTemperature}`;
    this.maxTempContainer.innerHTML = `Temperature maximum: ${maxTemperature}`;
  }

  render (city, temp, minTemp, maxTemp) {
    const tmp = this.transformTemp(temp);
    const mTemp = this.transformTemp(minTemp);
    const mxTemp = this.transformTemp(maxTemp);
    this.populateContainers(city, tmp, mTemp, mxTemp);
  }

}


// const showInfo = async () => {
//   const value = await getData('arequipa')
//   console.log(value.name)
//   // const icon =  `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${value.[0]["icon"]}`
//   return value.name
// }

// // showInfo()

const searchWeather = async (city) => {
  const value = await getData(city)
  
  const w = new Weather();
  w.render(value.name, value.main.temp, value.main.temp_min, value.main.temp_max);
}

export default searchWeather;