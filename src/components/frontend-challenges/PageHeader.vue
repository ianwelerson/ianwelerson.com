<script lang="ts" setup>
import BackIcon from '@/components/icons/BackIcon.vue'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    redirectTo: {
        type: String,
        required: true
    }
})
</script>

<template>
    <header class="challenge-header">
        <div class="challenge-header__content">
            <router-link :to="{ name: props.redirectTo }" class="challenge-header__back">
                <span class="challenge-header__back-icon">
                    <back-icon />
                </span>
            </router-link>
            <h1 class="challenge-header__title">{{ props.title }}</h1>
        </div>
    </header>
</template>

<style lang="scss">
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
</style>