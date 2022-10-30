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
import Menubar from 'primevue/menubar';
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Tag from "primevue/tag";
import Card from "primevue/card";
import Divider from "primevue/divider";
import Dialog from 'primevue/dialog';
import Password from "primevue/password";
import SelectButton from "primevue/selectbutton";
import Textarea from "primevue/textarea";
import Image from "primevue/image";
import Calendar from "primevue/calendar";
import Dropdown from "primevue/dropdown";
import Checkbox from "primevue/checkbox";
import DialogService from "primevue/dialogservice";
import ConfirmationService from "primevue/confirmationservice";
import Rating from "primevue/rating";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import RadioButton from 'primevue/radiobutton';




const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue,{ripple:true})
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);

// PrimeVue Component
app.component("pv-button",Button)
app.component("pv-input-text",InputText)
app.component('pv-carousel', Carousel);
app.component('pv-data-view', DataView);
app.component('pv-menubar', Menubar);
app.component('pv-avatar', Avatar);
app.component('pv-avatar-group', AvatarGroup);
app.component('pv-tag', Tag)
app.component('pv-card', Card)
app.component('pv-divider', Divider);
app.component('pv-dialog', Dialog)
app.component('pv-password',Password)
app.component('pv-select-button',SelectButton)
app.component('pv-text-area', Textarea)
app.component('pv-password',Password)
app.component('pv-image', Image)
app.component('pv-calendar',Calendar)
app.component('pv-drop-down',Dropdown)
app.component('pv-checkbox',Checkbox)
app.component('pv-rating',Rating)
app.component('pv-dataViewLayoutOption', DataViewLayoutOptions)
app.component('RadioButton', RadioButton);




app.mount('#app')
