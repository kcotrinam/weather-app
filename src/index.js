
import searchWeather from './modules/logic'

const formBtn = document.querySelector('button')

formBtn.addEventListener('click', e => {
  e.preventDefault();
  const city = document.querySelector('.city-input').value;
  if (city) searchWeather(city);
})
