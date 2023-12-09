import './assets/main.css'
import { test } from './test'
import { handleNextTask } from './test'
import { createApp } from 'vue'
import App from './App.vue'

var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
localStorage.setItem("tasks", JSON.stringify(tasks));

test();

//TODO fix error if queue is empty

handleNextTask();  
createApp(App).mount('#app')
