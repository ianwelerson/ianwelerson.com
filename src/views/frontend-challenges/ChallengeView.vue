<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

import ChallengeHeader from '@/components/frontend-challenges/PageHeader.vue'

const route = useRoute()
const { t, tm } = useI18n()

const challengeId = route.params.challengeId

const challenge = defineAsyncComponent(() =>
    import(`@/views/frontend-challenges/challenges/${challengeId}/ChallengeIndex.vue`)
)

const headerTitle = (tm('challenges.list.items') as any[])?.find(item => item.id === challengeId)?.title || t('challenges.list.title')
</script>

<template>
    <div class="challenge-view">
        <challenge-header :title="headerTitle" redirect-to="challengesList" />
        <div class="challenge-view__content">
            <component :is="challenge"></component>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.challenge-view {
    &__content {
        background-color: $white;
    }
}
</style>