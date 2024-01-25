<script setup lang="ts">
import { computed, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

import TranslateIcon from '@/components/icons/TranslateIcon.vue'
import BrazilFlagIcon from '@/components/icons/BrazilFlagIcon.vue'
import USFlagIcon from '@/components/icons/USFlagIcon.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'

type AllowedLanguages = 'enUS' | 'ptBR'

const { locale } = useI18n({ useScope: 'global' })

const currentLanguage = computed(() => {
    return locale.value.replace('-', '')
})

const isModalOpen = ref(false)
const languageModal = ref(null)

function toggleLanguageModal() {
    isModalOpen.value = !isModalOpen.value 
}

function changeLanguage(language: AllowedLanguages) {
    locale.value = `${language.slice(0, 2)}-${language.slice(2)}`
}

function isCurrent(language: AllowedLanguages): boolean {
    return language === currentLanguage.value
}

onClickOutside(languageModal, () => toggleLanguageModal())
</script>

<template>
    <div :class="['language-switch', { 'language-switch--open': isModalOpen }]">
        <button class="language-switch__button" @click="toggleLanguageModal"><translate-icon /></button>
        <div v-if="isModalOpen" ref="languageModal" class="language-switch__modal">
            <button class="modal-close" @click="toggleLanguageModal">
                <div class="modal-close__icon">
                    <CloseIcon />
                </div>
            </button>
            <div class="language-selection">
                <h3 class="language-selection__title">{{ $t('translate.title') }}</h3>
                <ul class="language-selection__options">
                    <li class="language-selection__option">
                        <button class="language-flag" @click="changeLanguage('enUS')" :disabled="isCurrent('enUS')"><USFlagIcon /></button>
                    </li>
                    <li class="language-selection__option">
                        <button class="language-flag" @click="changeLanguage('ptBR')" :disabled="isCurrent('ptBR')"><BrazilFlagIcon /></button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.language-switch {
    position: fixed;
    top: 10px;
    right: 10px;

    &__button {
        background-color: transparent;
        border: none;
        outline: none;
        padding: 0;
        color: $gray-500;
        width: 30px;
        cursor: pointer;
        
        @media (min-width: 1024px) {
            width: 40px;
        }
    }

    &__modal {
        position: fixed;
        z-index: 100;
        left: 50%;
        top: 30vh;
        transform: translate(-50%, 50%);

        .modal-close {
            position: absolute;
            padding: 10px;
            right: 0;
            top: 0;
            background-color: transparent;
            border: none;
            border-radius: 0 11px 0 12px;
            background-color: $gray-500;
            cursor: pointer;
            
            &__icon {
                color: $white;
                width: 16px;
            }
        }
    }

    &--open {
        &::after {
            content: '';
            width: 100vw;
            height: 100vh;
            position: fixed;
            left: 0;
            top: 0;
            background-color: #000;
            opacity: 0.4;
        }
    }
}

.language-selection {
    width: 300px;
    background-color: $white;
    color: $blue-500;
    border-radius: 12px;
    padding: 12px 12px 12px 12px;

    &__title {
        font-size: $text-lg;
        font-weight: $font-bold;
        text-align: center;
    }

    &__options {
        margin-top: 30px;
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &__option {
        &:not(:first-child) {
            margin-top: 10px;
        }

        .language-flag {
            cursor: pointer;
            background-color: transparent;
            border: none;
            width: 80px;

            &:disabled {
                cursor: not-allowed;
                opacity: 0.6;
            }
        }
    }
}
</style>