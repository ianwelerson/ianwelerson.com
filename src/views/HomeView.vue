<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'
import { useI18n } from "vue-i18n";

import HomeSection from '@/components/home/HomeSection.vue'

// Icons
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'

const { t } = useI18n();

const yearsOfExperience = ref()

yearsOfExperience.value = new Date().getFullYear() - 2018

useHead({
  title: t('meta.title', { name: t('basic.fullName'), page: 'About' }),
  meta: [
    {
      name: 'description',
      content: t('meta.description', { years: yearsOfExperience.value })
    },
    {
      name: 'keywords',
      content: 'HTML,CSS,JavaScript,TypeScript,Vue,Vue.js,PHP,Laravel,Tailwind,Bootstrap,Wordpress,Plugin,SEO,Dev,Developer,Development,Frontend,Front-end,Engineer'
    },
    {
      name: 'author',
      content: t('basic.fullName')
    },
    {
      name: 'theme-color',
      content: '#091C2F'
    }
  ]
})
</script>

<template>
  <main class="home">
    <div class="home__wrapper">
      <home-section id="entry" next="about">
        <div class="entry">
          <p class="entry__greetings">{{ $t('home.entry.greetings') }}</p>
          <h1 class="entry__introduction">{{ $t('home.entry.introduction.start') }} <span class="entry__highlight">{{
            $t('basic.shortName') }}</span><br>{{ $t('home.entry.introduction.middle') }} <span
              class="entry__highlight">{{ $t('basic.title') }}</span></h1>
          <div class="entry__cta">
            <router-link to="#about" class="btn btn--lg btn--color-white btn--floating">{{ $t('home.entry.cta')
            }}</router-link>
          </div>
        </div>
      </home-section>
      <home-section id="about" next="contact">
        <div class="about">
          <div class="about__picture">
            <img src="@/assets/images/profile-pic.jpg" :alt="`${$t('basic.fullName')} - Picture`" class="about__profile">
          </div>
          <div class="about__description">
            <p class="about__description-line">{{ $t('home.about.description.start', { years: yearsOfExperience }) }}</p>
            <p class="about__description-line">{{ $t('home.about.description.middle') }}</p>
            <p class="about__description-line">{{ $t('home.about.description.end') }}</p>
          </div>
          <div class="about__cta">
            <a :href="$t('social.linkedin')" target="_blank" class="btn btn--color-white">{{ $t('home.about.cta') }}</a>
          </div>
          <div class="about__stack">
            <div v-for="stack in $tm('home.about.stack')" :key="stack" class="stack-item">{{ stack }}</div>
          </div>
        </div>
      </home-section>
      <home-section id="contact">
        <div class="contact">
          <a :href="`mailto:${$t('social.email')}`" class="contact__email">{{ $t('social.email') }}</a>
          <div class="contact__social">
            <a :href="$t('social.linkedin')" class="btn btn--social btn--social-white"><linkedin-icon /></a>
            <a :href="$t('social.github')" class="btn btn--social btn--social-white"><github-icon /></a>
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

    @media (min-width: 1024px) {
      font-size: $text-5xl;
    }
  }

  &__highlight {
    font-weight: $font-bold;
  }

  &__cta {
    margin-top: 40px;
  }
}

.about {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__picture {
    //
  }

  &__profile {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 100%;


    @media (min-width: 1024px) {
      width: 200px;
      height: 200px;
    }
  }

  &__description {
    margin-top: 20px;
    text-align: center;

    @media (min-width: 1024) {
      width: 90%;
    }
  }

  &__description-line {
    font-weight: $font-light;
    line-height: 1.5;
    letter-spacing: 0.05rem;
    font-size: $text-base;

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
    }
  }
}

.contact {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__email {
    text-decoration: none;
    color: $white;
    font-weight: $font-bold;
    font-size: $text-3xl;
    
    @media (min-width: 1024px) {
      font-size: $text-5xl;
    }
  } 

  &__social {
    display: flex;
    justify-content: center;
    margin-top: 50px;
  }
}
</style>
