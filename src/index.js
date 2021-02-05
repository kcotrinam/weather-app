
import displayInfo from './modules/logic'

const formBtn = document.querySelector('button')

formBtn.addEventListener('click', e => displayInfo(e))
