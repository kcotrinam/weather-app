import getData from './modules/request'
const apiKey = '90389a28c75f30a2126f4ec7e1c08520'


const showInfo = async () => {
  const value = await getData(apiKey)
  console.log(value)
  console.log(value.main.temp)
  return value.name
}

showInfo()
