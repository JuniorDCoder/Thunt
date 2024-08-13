import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Configure NProgress (optional)
NProgress.configure({ showSpinner: true })

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Thunt'
    next()
})

const app = createApp(App)

app.use(router)

app.mount('#app')
