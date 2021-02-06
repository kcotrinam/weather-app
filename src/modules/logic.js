import getData from './request'

class Weather {
  constructor(value, measurement) {
    this.value = value;
    this.measurement = measurement;
    this.cityContainer = document.querySelector('.content');
  }

  transformTemp (temp) {
    switch (this.measurement) {
      case 'fahrenheit':
        return `${Math.round(temp - 273.15) * 9 / 5 + 32} °F`;
      case 'celsius':
        return `${Math.round(temp - 273.15)} °C`;
      default:
        return `${temp} °K`
    }
  }

  get populateContainers () {
    this.cityContainer.innerHTML = ''
    const temp = this.transformTemp(this.value.main.temp)
    const mintemp = this.transformTemp(this.value.main.temp_min)
    const maxtemp = this.transformTemp(this.value.main.temp_max)
    const feelsLike = this.transformTemp(this.value.main.feels_like)
    const card =`
                  <div class="card">
                    <div>
                      <p>
                        ${this.value.weather[0].description}
                        <span>
                          <img src= "http://openweathermap.org/img/w/${this.value.weather[0].icon}.png" alt="${this.value.weather[0].description}"/>
                        </span>
                      </p>
                    </div>
                    <h1 class="card__city">
                      ${this.value.name}
                      <span>${this.value.sys.country}</span>
                    </h1>
                    <h2 class="card__temperature">Temperature: ${temp}</h2>
                    <p class="card__min-temperature">Temperature minimum: ${mintemp}</p>
                    <p class="card__max-temperature">Temperature maximum: ${maxtemp}</p>
                    <p class="card__feels">Feels like: ${feelsLike}</p>
                    <p class="card__feels">Humidity: ${this.value.main.humidity}%</p>
                  </div>
                `
    return card
  }

  render () {
    console.log(this.value)
    this.cityContainer.insertAdjacentHTML('afterbegin', this.populateContainers)
  }
}

const searchWeather = async (city, measurement) => {
  const value = await getData(city)
  const weather = new Weather(value, measurement);
  weather.render();
}

const displayInfo = (ev) => {
  ev.preventDefault()
  const form = document.querySelector('form')
  const city = document.querySelector('.city-input').value;
  const measurement = document.querySelector('#measurement').value
  
  if (city) searchWeather(city, measurement);
  form.reset()
}

export default displayInfo;