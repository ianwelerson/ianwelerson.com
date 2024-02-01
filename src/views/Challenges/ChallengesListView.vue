<script lang="ts" setup>
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'

import BackIcon from '@/components/icons/BackIcon.vue'

const { t, tm } = useI18n()

const challengeList = ref()

challengeList.value = tm('challenges.list.items') // I will be using i18n for now

useHead({
  title: t('meta.title', { name: t('basic.fullName'), page: t('challenges.list.title') }),
})
</script>

<template>
    <div class="challenge-list">
        <header class="challenge-header">
            <div class="challenge-header__content">
                <router-link :to="{ name: 'home' }" class="challenge-header__back">
                    <span class="challenge-header__back-icon">
                        <back-icon />
                    </span>
                </router-link>
                <h1 class="challenge-header__title">{{ $t('challenges.list.title') }}</h1>
            </div>
        </header>
        <section class="challenge-content">
            <h2 class="challenge-content__entry">{{ $t('challenges.list.entry.text') }} <a :href="$t('challenges.list.entry.link')" target="_blank">{{ $t('challenges.list.entry.linkText') }}</a>.
            </h2>
            <div :class="['challenge-content__list', { 'challenge-content__list--not-content': !challengeList.length }]">
                <p v-if="!challengeList.length" class="no-content">{{ $t('challenges.list.noContent') }}</p>
                <template v-else>
                    <router-link v-for="challenge in challengeList" :key="challenge.id" :to="{ name: 'challenge', params: { challengeId: challenge.id } }" class="challenge-card">
                        <div class="challenge-card__wrapper">
                            <div class="challenge-card__thumb">
                                <img :src="challenge.thumb" class="thumb-img" >
                            </div>
                            <div class="challenge-card__description">
                                <h4 class="title">{{ challenge.title }}</h4>
                                <p class="description">{{ challenge.description }}</p>
                                <a v-if="!!challenge.source" :href="challenge.source.link" target="_blank" class="source">{{ challenge.source.title }}</a>
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

.challenge-header {
    width: 100%;
    background: $blue-600;
    padding: 20px;
    display: flex;
    justify-content: center;
    
    @media (min-width: 1024px) {
        padding: 20px 0;
    } 

    &__content {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
        width: 100%;

        @media (min-width: 1280px) {
            padding: 0;
            width: 1280px;
        }
    }

    &__back {
        display: flex;
        background: $white;
        padding: 4px;
        border-radius: 100%;
        position: absolute;
        left: 0;
    }

    &__back-icon {
        width: 24px;
        height: 24px;
        color: $blue-600;
    }

    &__title {
        font-size: $text-lg;
        font-weight: $font-bold;
    }
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
    overflow: hidden;
    
    @media (min-width: 1024px) {
        margin: 20px;
        width: calc(33.33% - 40px);
    }
    
    &__wrapper {
        height: 100%;
        background-color: $white;
        display: flex;
        flex-direction: column;
    }

    &:hover {
        color: $blue-500;
        box-shadow: 10px 10px 20px rgba(251, 251, 251, 0.082);
        transition: all 0.2s ease-in;
    }

    &__thumb {
        width: 100%;
        height: 250px;
        overflow: hidden;
        margin-top: -5px;
        border-radius: 15px 15px 0 0;
        
        .thumb-img {
            margin-top: -5px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__description {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 20px;
        
        .title {
            font-weight: $font-bold;
            font-size: $text-lg;
        }
        
        .description {
            flex: 1;
            margin-top: 16px;
            font-weight: $font-light;
        }
        
        .source {
            align-self: flex-start;
            margin-top: 16px;
            border: 1px solid $primary;
            border-radius: 20px;
            padding: 6px 10px;
            display: flex;
            color: $primary;
            z-index: 10;
            text-decoration: none;
            color: inherit;
        }
    }
}
</style>