<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const challengeId = route.params.challengeId
</script>

<template>
    Challgende {{ challengeId }} View
</template>

<style></style>