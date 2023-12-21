import './assets/main.css'
import { test } from './test'
import { handleNextTask } from './test'
import { createApp } from 'vue'
import App from './App.vue'

export var queues = [];

var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
localStorage.setItem("tasks", JSON.stringify(tasks));
var success = JSON.parse(localStorage.getItem("success")) || [];
localStorage.setItem("success", JSON.stringify(success));
var failed = JSON.parse(localStorage.getItem("failed")) || [];
localStorage.setItem("failed", JSON.stringify(failed));



test(); 

// handleNextTask();

createApp(App).mount('#app')
