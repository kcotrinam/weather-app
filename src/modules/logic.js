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
                    <div class="card__description">
                      <p>
                        ${this.value.weather[0].description}
                      </p>
                      <img src= "http://openweathermap.org/img/w/${this.value.weather[0].icon}.png" alt="${this.value.weather[0].description}"/>
                    </div>
                    <h1 class="card__city">
                      ${this.value.name}
                      <span>${this.value.sys.country}</span>
                    </h1>
                    <div class="card__info">
                    <h2 class="card__temperature">${temp}</h2>
                      <div class="card__info-right">
                        <div>
                          <p class="card__min-temperature">Temperature min.: </p>
                          <span>${mintemp}</span>
                        </div>
                        <div>
                          <p class="card__max-temperature">Temperature max.: </p>
                          <span>${maxtemp}</span>
                        </div>
                        <div>
                          <p class="card__feels">Feels like: </p>
                          <span>${feelsLike}</span>
                        </div>
                        <div>
                          <p class="card__feels">Humidity:</p>
                          <span>${this.value.main.humidity} %</span>
                        </div>
                      </div>
                    </div>
                  </div>
                `
    return card
  }

  render () {
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