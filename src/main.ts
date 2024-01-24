// Base Styles
import '@/assets/styles/base.scss'

// Vue
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createHead } from '@unhead/vue'

// App
import App from './App.vue'
import router from './router'

// Locale
import { enUS, ptBR } from '@/locale'

const i18n = createI18n({
    legacy: false,
    locale: navigator.language,
    fallbackLocale: 'en-US',
    messages: {
        'en-US': enUS,
        'pt-BR': ptBR
    }
})

const head = createHead()

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(head)

app.mount('#app')
