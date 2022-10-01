import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//Add PrimeVue
import PrimeVue from "primevue/config";

//Add PrimeFlex
import 'primeflex/primeflex.css';
//Add Theme
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";




//Add Toast Service
import ToastService from "primevue/toastservice";

//Add Components
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Carousel from "primevue/carousel";
import DataView from "primevue/dataview";



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue,{ripple:true})
app.use(ToastService);
// PrimeVue Component
app.component("pv-button",Button)
app.component("pv-input-text",InputText)
app.component('pv-carousel', Carousel);
app.component('pv-data-view', DataView);


app.mount('#app')
