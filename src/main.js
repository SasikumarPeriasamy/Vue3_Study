import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App);
app.directive('focus',{
    mounted(input){
    //    input.style.backgroundColor = 'lightgreen';
        input.style.color = 'darkgreen';
    //    input.style.fontSize = '17px';
    }
})
app.use(store).use(router).mount('#app')
