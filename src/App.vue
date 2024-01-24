<script setup lang="ts">
import LanguageSwitch from '@/components/global/LanguageSwitch.vue'
</script>

<template>
  <div class="app-wrapper">
    <div class="app-wrapper__language-selector">
      <language-switch />
    </div>
    <div class="app-wrapper__content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
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
