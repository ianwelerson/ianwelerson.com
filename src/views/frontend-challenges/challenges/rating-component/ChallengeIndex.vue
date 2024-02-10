<script lang="ts" setup>
import { ref } from 'vue'

import StarIcon from './assets/StarIcon.vue'
import SuccessIcon from './assets/SuccessIcon.vue'

const rated = ref(false)
const selectedRate = ref<number>(0)

function setRate(id: number) {
    selectedRate.value = id
}

function submitRating() {
    if (selectedRate.value) {
        rated.value = true
    }
}
</script>

<template>
    <div class="rating-component">
        <div class="rating-component__wrapper">
            <div class="rating-card">
                <div class="rating-card__content">
                    <div v-if="rated" class="rating-success">
                        <div class="rating-success__content">
                            <div class="rating-success__icon">
                                <div class="icon"> <success-icon /></div>
                            </div>
                            <div class="rating-success__cound">
                                <p class="count-text">You selected {{ selectedRate }} out of 5</p>
                            </div>
                            <div class="rating-success__message">
                                <h1 class="title">Thank you!</h1>
                                <p class="message">We appreciate you taking the time to give a rating.<br>If you ever need
                                    more support, don't hesitate to get in touch!</p>
                            </div>
                        </div>
                    </div>
                    <div v-else class="rating-form">
                        <div class="rating-form__content">
                            <div class="rating-form__icon">
                                <div class="icon"> <star-icon /></div>
                            </div>
                            <div class="rating-form__text">
                                <h1 class="title">How did we do?</h1>
                                <p class="description">Please let us know how we did with your support request. All feedback
                                    is appreciated to help us improve our offering!</p>
                            </div>
                            <div class="rating-form__score">
                                <button v-for="id in 5" :key="id"
                                    :class="['score-btn', { 'score-btn--selected': id === selectedRate }, { 'score-btn--between': id < selectedRate }]"
                                    @click="setRate(id)">{{ id }}</button>
                            </div>
                            <div class="rating-form__submit">
                                <button class="submit-btn" @click="submitRating">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$cl-orange: hsl(25, 97%, 53%);
$cl-white: hsl(0, 0%, 100%);
$cl-light-grey: hsl(217, 12%, 63%);
$cl-medium-grey: hsl(216, 12%, 54%);
$cl-dark-blue: hsl(213, 19%, 18%);
$cl-very-dark-blue: hsl(216, 12%, 8%);

.rating-component {
    font-family: $font-family-inter;
    flex: 1;
    display: flex;
    width: 100%;
    background-color: $cl-very-dark-blue;

    &__wrapper {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.rating-card {
    width: 400px;
    overflow: hidden;
    border-radius: 20px;
    background: rgba(24, 30, 40, 1);
    position: relative;

    &::before {
        content: '';
        position: absolute;
        width: 150px;
        height: 150px;
        top: -50px;
        left: 50%;
        transform: translate(-50%, 0);
        background-color: rgba(34, 41, 51, 1);
        opacity: 0.3;
        border-radius: 100%;
        box-shadow: 0 0 40px 100px rgba(34, 41, 51, 1);
    }

    &__content {
        padding: 35px;
    }
}

.rating-form {
    &__content {
        display: flex;
        flex-direction: column;
    }

    &__icon {
        align-self: flex-start;
        width: auto;
        border-radius: 100%;
        padding: 17px;
        background: $cl-dark-blue;

        .icon {
            width: 16px;
            height: 16px;
            color: $cl-orange;
        }
    }

    &__text {
        margin-top: 30px;

        .title {
            font-size: 24px;
            font-weight: 600;
        }

        .description {
            margin-top: 20px;
            font-size: 13px;
            color: $cl-medium-grey;
        }
    }

    &__score {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;

        .score-btn {
            background-color: transparent;
            border: none;
            border-radius: 100%;
            font-size: 16px;
            line-height: 0;
            width: 50px;
            height: 50px;
            color: $cl-medium-grey;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            transition: all 0.2s ease-out;

            &:before {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-color: $cl-medium-grey;
                opacity: 0.1;
            }

            &:hover,
            &--selected {
                background-color: $cl-orange;
                color: $cl-white;
                transition: all 0.2s ease-in;
            }

            &--between {
                opacity: 0.5;
            }
        }
    }

    &__submit {
        margin-top: 30px;

        .submit-btn {
            width: 100%;
            border-radius: 50px;
            background-color: $cl-orange;
            color: $cl-white;
            padding: 14px;
            border: none;
            cursor: pointer;
            text-transform: uppercase;
            font-weight: 600;
            letter-spacing: 1.5px;
            transition: all 0.2s ease-out;

            &:hover {
                background-color: $cl-white;
                color: $cl-orange;
                transition: all 0.2s ease-in;
            }
        }
    }
}

.rating-success {
    &__content {
        display: flex;
        flex-direction: column;
    }

    &__icon {
        display: flex;
        justify-content: center;

        .icon {
            width: 150px;
        }
    }

    &__cound {
        align-self: center;
        margin-top: 18px;
        
        .count-text {
            position: relative;
            padding: 5px 15px;
            border-radius: 20px;
            overflow: hidden;
            text-align: center;
            font-size: 12px;
            color: $cl-orange;

            &:after {
                content: '';
                background-color: $cl-light-grey;
                opacity: 0.1;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
            }
        }
    }

    &__message {
        margin-top: 30px;
        text-align: center;

        .title {
            font-size: 24px;
            font-weight: 600;
        }

        .message {
            margin-top: 10px;
            font-size: 12px;
            color: $cl-medium-grey;
        }
    }
}
</style>