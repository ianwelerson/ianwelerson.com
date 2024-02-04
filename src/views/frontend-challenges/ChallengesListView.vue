<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'

import ChallengeHeader from '@/components/frontend-challenges/PageHeader.vue'

const { t, tm } = useI18n()

const challengeList = ref()

challengeList.value = tm('challenges.list.items') // I will be using i18n for now

useHead({
    title: t('meta.title', { name: t('basic.fullName'), page: t('challenges.list.title') }),
})

function getEmbed(id: string) {
    return defineAsyncComponent(() =>
        import(`@/views/frontend-challenges/challenges/${id}/ChallengeIndex.vue`)
    )
}
</script>

<template>
    <div class="challenge-list">
        <challenge-header :title="$t('challenges.list.title')" redirect-to="home" />
        <section class="challenge-content">
            <h2 class="challenge-content__entry">{{ $t('challenges.list.entry.text') }} <a
                    :href="$t('challenges.list.entry.link')" target="_blank">{{ $t('challenges.list.entry.linkText') }}</a>.
            </h2>
            <div :class="['challenge-content__list', { 'challenge-content__list--not-content': !challengeList.length }]">
                <p v-if="!challengeList.length" class="no-content">{{ $t('challenges.list.noContent') }}</p>
                <template v-else>
                    <router-link v-for="challenge in challengeList" :key="challenge.id"
                        :to="{ name: 'challenge', params: { challengeId: challenge.id } }" class="challenge-card">
                        <div class="challenge-card__wrapper">
                            <div class="challenge-card__thumb">
                                <template v-if="!!challenge?.showAsEmbed">
                                    <div class="thumb-embed">
                                        <component :is="getEmbed(challenge.id)"></component>
                                    </div>
                                </template>
                                <template v-else>
                                    <img :src="`/images/challenges/${challenge.id}.png`" class="thumb-img">
                                </template>
                                <p v-if="!challenge.level"
                                    :class="['difficulty-level', `difficulty-level--${challenge.level}`]">{{
                                        $t(`challenges.level.${challenge.level}`) }}</p>
                            </div>
                            <div class="challenge-card__description">
                                <h4 class="title">{{ challenge.title }}</h4>
                                <p v-if="!!challenge.description" class="description">{{ challenge.description }}</p>
                            </div>
                        </div>
                    </router-link>
                </template>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.challenge-list {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: $bg-solid;
}

.challenge-content {
    padding: 20px;
    width: 100%;

    @media (min-width: 1280px) {
        padding: 20px 0;
        width: 1280px;
    }

    &__entry {
        font-size: $text-lg;
        text-align: center;
        padding-top: 20px;

        a {
            color: $gray-500;
        }
    }

    &__list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 40px;

        @media (min-width: 1024px) {
            margin: 40px -20px 0 -20px;
        }

        &--not-content {
            margin: 0;
            height: 50vh;
            justify-content: center;
            align-items: center;
        }
    }
}

.no-content {
    font-size: $text-3xl;
    text-align: center;
    color: $gray-500;
}

.challenge-card {
    width: 100%;
    margin-bottom: 20px;
    text-decoration: none;
    color: $primary;
    transition: all 0.2s ease-out;
    border-radius: 15px;

    @media (min-width: 1024px) {
        margin: 20px;
        width: calc(33.33% - 40px);
    }

    &__wrapper {
        height: 100%;
        border-radius: 15px;
        background-color: $white;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    &:hover {
        color: $blue-500;
        box-shadow: 0 5px 25px rgba(251, 251, 251, 0.082);
        transition: all 0.2s ease-in;
    }

    &__thumb {
        width: 100%;
        height: 250px;
        position: relative;
        padding: 5px 5px 0 5px;

        .thumb-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
        }

        .thumb-embed {
            height: 100%;
            overflow: hidden;
        }

        .thumb-img,
        .thumb-embed {
            box-shadow: 0 5px 15px $gray-500;
            border-radius: 15px 15px 15px 15px;
        }
    }

    &__description {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 15px 20px;

        .title-group {
            display: flex;
        }

        .title {
            font-weight: $font-bold;
            font-size: $text-lg;
        }

        .description {
            flex: 1;
            margin-top: 16px;
            font-weight: $font-light;
        }
    }
}

.difficulty-level {
    position: absolute;
    top: 8px;
    right: 8px;
    border: 1px solid $white;
    border-radius: 12px;
    padding: 4px 12px;
    display: flex;
    z-index: 20;
    background-color: $white;
    font-weight: $font-medium;

    &--0 {
        color: $green-500;
        border-color: $green-500;
    }
}
</style>