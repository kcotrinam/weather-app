import getData from './request'

class Weather {
  constructor(value) {
    this.value = value
    this.cityContainer = document.querySelector('.content');
  }

  transformTemp (temp) {
    return Math.round(temp - 273.15)
  }

  get populateContainers () {
    this.cityContainer.innerHTML = ''
    const temp = this.transformTemp(this.value.main.temp)
    const mintemp = this.transformTemp(this.value.main.temp_min)
    const maxtemp = this.transformTemp(this.value.main.temp_max)
    const card =`
                  <div class="card">
                    <h1 class="card__city">${this.value.name}</h1>
                    <h2 class="card__temperature">Temperature: ${temp} °C</h2>
                    <p class="card__min-temperature">Temperature minimum: ${mintemp} °C</p>
                    <p class="card__max-temperature">Temperature maximum: ${maxtemp} °C</p>
                  </div>
                `
    return card
  }

  render () {
    this.cityContainer.insertAdjacentHTML('afterbegin', this.populateContainers)
  }
}

const searchWeather = async (city) => {
  const value = await getData(city)
  
  const w = new Weather(value);
  w.render();
}

const displayInfo = (ev) => {
  ev.preventDefault()
  const form = document.querySelector('form')
  const city = document.querySelector('.city-input').value;
  if (city) searchWeather(city);
  form.reset()
}

export default displayInfo;