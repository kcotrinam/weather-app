import displayInfo from './modules/logic'
import './scss/styles.scss'


const formBtn = document.querySelector('button')

formBtn.addEventListener('click', e => displayInfo(e))
