<script setup lang="ts">
import { ref, computed, type ComputedRef } from 'vue'
import { useHead } from '@unhead/vue'
import { useI18n } from "vue-i18n"
import { useElementVisibility } from '@vueuse/core'

import HomeSection from '@/components/home/HomeSection.vue'

// Icons
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'

const { t } = useI18n();

const yearsOfExperience = ref()
// Section refs
const entrySection = ref(null)
const aboutSection = ref(null)
const contactSection = ref(null)
// Section status
const entryViewed = useElementVisibility(entrySection)
const aboutViewed = useElementVisibility(aboutSection)
const contactViewed = useElementVisibility(contactSection)

yearsOfExperience.value = new Date().getFullYear() - 2018

useHead({
  title: t('meta.title', { name: t('basic.fullName'), page: 'About' }),
})

const entryViewedStatus: ComputedRef<boolean> = computed(() => {
  return entryViewed.value || entryViewedStatus.value
})
const aboutViewedStatus: ComputedRef<boolean> = computed(() => {
  return aboutViewed.value || aboutViewedStatus.value
})
const contactViewedStatus: ComputedRef<boolean> = computed(() => {
  return contactViewed.value || contactViewedStatus.value
})
</script>

<template>
  <main class="home">
    <div class="home__wrapper">
      <home-section id="entry" next="about" ref="entrySection">
        <div :class="['entry', { 'entry--visible': entryViewedStatus }]">
          <p class="entry__greetings tracking-in-expand">{{ $t('home.entry.greetings') }}</p>
          <h1 class="entry__introduction fade-in">{{ $t('home.entry.introduction.start') }} <span
              class="entry__highlight">{{
                $t('basic.shortName') }}</span><br>{{ $t('home.entry.introduction.middle') }} <span
              class="entry__highlight">{{ $t('basic.title') }}</span></h1>
          <div class="entry__cta scale-in-ver-center">
            <router-link to="#about" class="btn btn--lg btn--color-white btn--floating">{{ $t('home.entry.cta')
            }}</router-link>
          </div>
        </div>
      </home-section>
      <home-section id="about" next="contact" ref="aboutSection">
        <div :class="['about', { 'about--visible': aboutViewedStatus }]">
          <div class="about__picture fade-in">
            <img src="@/assets/images/profile-pic-white.png" :alt="`${$t('basic.fullName')} - Picture`" class="about__profile">
          </div>
          <div class="about__description fade-in">
            <p class="about__description-line">{{ $t('home.about.description.start', { years: yearsOfExperience }) }}</p>
            <p class="about__description-line">{{ $t('home.about.description.middle') }}</p>
            <p class="about__description-line">{{ $t('home.about.description.end') }}</p>
          </div>
          <div class="about__cta fade-in">
            <router-link :to="{ name: 'challengesList' }" class="btn btn--color-white">{{ $t('home.about.cta') }}</router-link>
          </div>
          <div class="about__stack">
            <div v-for="stack in $tm('home.about.stack')" :key="stack" class="stack-item scale-in-ver-center">{{ stack }}
            </div>
          </div>
        </div>
      </home-section>
      <home-section id="contact" ref="contactSection">
        <div :class="['contact', { 'contact--visible': contactViewedStatus }]">
          <a :href="`mailto:${$t('social.email')}`" class="contact__email fade-in">{{ $t('social.email') }}</a>
          <div class="contact__social">
            <a :href="$t('social.linkedin')" class="btn btn--social btn--social-white scale-in-hor-center"><linkedin-icon /></a>
            <a :href="$t('social.github')" class="btn btn--social btn--social-white scale-in-hor-center"><github-icon /></a>
          </div>
        </div>
      </home-section>
    </div>
  </main>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;

  &__wrapper {}

  &::before {
    content: '';
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
    background: $bg-gradient;
  }

  &::after {
    content: '';
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 100vh;
    left: 0;
    z-index: -1;
    background: $blue-800;
    transform: skew(0deg, -10deg);
    transform-origin: left bottom;
  }
}

.entry {
  text-align: center;
  display: none;
  
  &--visible {
    display: block;
  }

  &__greetings {
    margin: 0;
    text-transform: uppercase;
    font-weight: $font-bold;
    color: $gray-500;
    letter-spacing: .4rem;
    font-size: $text-base;

    @media (min-width: 1024px) {
      font-size: $text-lg;
    }
  }

  &__introduction {
    margin-top: 12px;
    font-weight: $font-light;
    font-size: $text-4xl;
    animation-delay: 0.7s;

    @media (min-width: 1024px) {
      font-size: $text-5xl;
    }
  }

  &__highlight {
    font-weight: $font-bold;
  }

  &__cta {
    margin-top: 40px;
    animation-delay: 1.2s;
  }
}

.about {
  display: none;
  flex-direction: column;
  align-items: center;

  &--visible {
    display: flex;
  }

  &__profile {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 100%;
    animation-delay: 0.3s;

    @media (min-width: 1024px) {
      width: 200px;
      height: 200px;
    }
  }

  &__description {
    margin-top: 20px;
    text-align: center;
    animation-delay: 0.6s;

    @media (min-width: 1024) {
      width: 90%;
    }
  }

  &__description-line {
    font-weight: $font-light;
    line-height: 1.5;
    letter-spacing: 0.05rem;
    font-size: $text-base;
    animation-delay: 0.9s;

    @media (min-width: 1024px) {
      font-size: $text-lg;
    }

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &__cta {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    animation-delay: 1.2s;
  }

  &__stack {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 24px -12px -6px -12px;

    @media (min-width: 1024px) {
      width: 90%;
    }

    .stack-item {
      color: $white;
      background-color: $blue-500;
      padding: 12px 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      margin: 6px 12px;
      animation-delay: 1.5s;
    }
  }
}

.contact {
  display: none;
  flex-direction: column;
  justify-content: center;

  &--visible {
    display: flex;
  }

  &__email {
    text-decoration: none;
    color: $white;
    font-weight: $font-bold;
    font-size: $text-3xl;
    transition: 2s all ease-in;
    animation-delay: 0.3s;

    @media (min-width: 1024px) {
      font-size: $text-5xl;
    }

    &:hover {
      color: $gray-500;
      text-decoration: underline;
      transition: 2s all ease-out;
    }
  }

  &__social {
    display: flex;
    justify-content: center;
    margin-top: 50px;

    .btn {
      animation-delay: 0.6s;
    }
  }
}
</style>
