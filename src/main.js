import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faStar, faEnvelope, faPhone, faAt, faLocationArrow} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareFacebook, faSquareInstagram, faSquarePinterest, faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'

library.add(faStar, faEnvelope, faPhone, faSquareFacebook, faSquarePinterest, faSquareTwitter, faLinkedin, faSquareInstagram, faAt, faLocationArrow)

createApp(App).component('FontAwesomeIcon', FontAwesomeIcon).mount('#app')
