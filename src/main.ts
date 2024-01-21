import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

// App
import App from './App.vue'
import router from './router'

// Locale
import { en, ptBR } from '@/locale'

const i18n = createI18n({
    locale: navigator.language,
    fallbackLocale: 'en',
    messages: {
        en: en,
        'pt-BR': ptBR
    }
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
