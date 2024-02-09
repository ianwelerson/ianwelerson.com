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

const challengeData = (tm('challenges.list.items') as any[])?.find(item => item.id === challengeId)
</script>

<template>
    <div class="challenge-view">
        <challenge-header :title="challengeData.title ?? $t('challenges.list.title')" redirect-to="challengesList" />
        <div class="challenge-view__content">
            <a :href="challengeData.source.link"  target="_blank" :class="['source', `source--${challengeData.source.theme}`]">
                <span class="source__link">Source: {{ challengeData.source.title }}</span>
            </a>
            <component :is="challenge"></component>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.challenge-view {
    flex: 1;
    display: flex;
    flex-direction: column;
    
    &__content {
        flex: 1;
        display: flex;
        flex-direction: column;
        background-color: $white;
        position: relative;
    }
}

.source {
    align-self: flex-start;
    border: 1px solid $primary;
    border-radius: 20px;
    padding: 5px 10px;
    display: flex;
    z-index: 10;
    position: absolute;
    right: 10px;
    top: 10px;
    transition: all 0.2s ease-in;
    text-decoration: none;
    
    &__link {
        font-size: 16px;
        color: $primary;
        transition: all 0.2s ease-in;
    }

    &--white {
        border-color: $white;

        .source__link {
            color: $white;
        }
    }

    &:hover:not(&--white) {
        background-color: $primary;

        .source__link {
            color: $white;
        }
    }

    &:hover:is(&--white) {
        opacity: 0.7;
    }
}
</style>