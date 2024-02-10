<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

import ChallengeHeader from '@/components/frontend-challenges/PageHeader.vue'

const route = useRoute()
const { tm } = useI18n()

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
            <div class="links">
                <a v-for="link in challengeData.links" :key="link.type" :href="link.url" target="_blank"
                    :class="['links__item', `links__item--${link.theme}`]">
                    <span class="links__item-text">{{ link.type === 'DESIGN' ? 'Design from' : 'View code on' }} {{ link.title
                    }}</span>
                </a>
            </div>
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

.links {
    z-index: 10;
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;

    &__item {
        padding: 5px 10px;
        align-self: flex-start;
        border: 1px solid $primary;
        border-radius: 20px;
        transition: all 0.2s ease-in;
        text-decoration: none;

        &:not(:last-child) {
            margin-right: 10px;
        }

        &-text {
            font-size: 16px;
            color: $primary;
            transition: all 0.2s ease-in;
        }

        &--white {
            border-color: $white;

            .links__item-text {
                color: $white;
            }
        }

        &:hover:not(&--white) {
            background-color: $primary;

            .links__item-text {
                color: $white;
            }
        }

        &:hover:is(&--white) {
            opacity: 0.7;
        }
    }
}
</style>