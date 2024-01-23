<script setup lang="ts">
</script>

<template>
  <main class="main">
    <div class="main__text">{{ $t('home') }}</div>
  </main>
</template>

<style scoped lang="scss">
.main {
  &__text {
    font-size: 700;
    color: $blue-500;
    font-variation-settings: 'wght' 600;
  }
}
</style>
