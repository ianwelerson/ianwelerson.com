<script setup lang="ts">
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { useI18n } from "vue-i18n";

import LanguageSwitch from '@/components/global/LanguageSwitch.vue'

const showLanguageSwitch = ref(false)

const route = useRoute()
const { t } = useI18n()

const yearsOfExperience = ref()
yearsOfExperience.value = new Date().getFullYear() - 2018

watch(route, ({ meta }) => {
  showLanguageSwitch.value = !!meta?.allowTranslate
})

useHead({
  title: t('meta.title', { name: t('basic.fullName'), page: 'Home' }),
  meta: [
    {
      name: 'description',
      content: t('meta.description', { years: yearsOfExperience.value })
    },
    {
      name: 'keywords',
      content: 'HTML,CSS,JavaScript,TypeScript,Vue,Vue.js,PHP,Laravel,Tailwind,Bootstrap,Wordpress,Plugin,SEO,Dev,Developer,Development,Frontend,Front-end,Engineer'
    },
    {
      name: 'author',
      content: t('basic.fullName')
    },
    {
      name: 'theme-color',
      content: '#091C2F'
    }
  ]
})

</script>

<template>
  <div class="app-wrapper">
    <div v-if="showLanguageSwitch" class="app-wrapper__language-selector">
      <language-switch />
    </div>
    <div class="app-wrapper__content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  background: $bg-solid;

  &__language-selector {
    position: relative;
    z-index: 20;
  }

  &__content {
    position: relative;
    z-index: 10;
  }
}
</style>
