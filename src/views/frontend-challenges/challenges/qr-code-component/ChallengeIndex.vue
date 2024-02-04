<script lang="ts" setup>
import VueQrcode from 'vue-qrcode'
</script>

<template>
    <div class="qr-code-component">
        <div class="qr-code-component__wrapper">
            <section class="card">
                <div class="card__qr-box">
                    <div class="card__qr-img">
                        <vue-qrcode value="https://ianwelerson.com" type="image/png" :width="150" :margin="0" :version="3"
                            :color="{ dark: '#ffffffff', light: '#ffffff00' }" />
                    </div>
                </div>
                <div class="card__info">
                    <h1 class="title">Want to know more about me?</h1>
                    <p class="description">Scan the QR code to visit my personal website and check out more info about me.
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// Colors
$cl-white: hsl(0, 0%, 100%);
$cl-light-gray: hsl(212, 45%, 89%);
$cl-grayish-blue: hsl(220, 15%, 55%);
$cl-light-blue: hsl(217, 63%, 53%);
$cl-dark-blue: hsl(218, 44%, 22%);

.qr-code-component {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $cl-light-gray;

    &__wrapper {}
}

.card {
    width: 315px;
    padding: 15px 15px 30px 15px;
    background: $cl-white;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: $font-family-inter;

    &__qr-box {
        padding: 65px;
        background: $cl-light-blue;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        overflow: hidden;
        position: relative;

        &:before,
        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: $white;
            opacity: 0.05;
            border-radius: 100%;
        }

        &::before {
            top: -40%;
            left: -40%;
        }

        &::after {
            bottom: -70%;
            right: -45%;
        }
    }

    &__qr-img {}

    &__info {
        margin-top: 30px;
        padding: 0 20px;
        text-align: center;
        color: $cl-dark-blue;

        .title {
            font-weight: $font-bold;
            font-size: 20px;
        }

        .description {
            margin-top: 15px;
            font-size: 15px;
        }
    }
}
</style>