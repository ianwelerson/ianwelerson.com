<script lang="ts" setup>
</script>

<template>
    <div class="social-links">
        <div class="social-links__content">
            <section class="social-card">
                <div class="social-card__picture">
                    <img src="@/assets/images/profile-pic-white.png" alt="Picture of Ian Welerson" class="user-pic">
                </div>
                <div class="social-card__personal">
                    <h1 class="name">Ian Welerson</h1>
                    <p class="address">Vitória, Brazil</p>
                </div>
                <div class="social-card__description">
                    <p class="description-text">"Frontend Eingineer based in Brazil"</p>
                </div>
                <div class="social-card__links">
                    <a href="https://github.com/ianwelerson/" target="_blank" class="social-link">GitHub</a>
                    <a href="https://www.linkedin.com/in/ianwelerson/" target="_blank" class="social-link">Linkedin</a>
                    <a href="https://twitter.com/ianwelerson" target="_blank" class="social-link">Twitter</a>
                    <a href="https://instagram.com/ianwelerson" target="_blank" class="social-link">Instagram</a>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// Colors
$cl-primary-green: hsl(75, 94%, 57%);
$cl-white: hsl(0, 0%, 100%);
$cl-grey: hsl(0, 0%, 20%);
$cl-dark-grey: hsl(0, 0%, 12%);
$cl-off-black: hsl(0, 0%, 8%);
$cl-btn-bg: hsla(0, 0%, 100%, 0.06);

.social-links {
    width: 100%;
    flex: 1;
    background-color: $cl-dark-grey;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: $font-family-inter;

    &__content {
        // 
    }
}

.social-card {
    min-width: 330px;
    padding: 30px;
    border-radius: 10px;
    background-color: $cl-grey;

    &__picture {
        width: 80px;
        height: 80px;
        margin: 0 auto;

        .user-pic {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    &__personal {
        margin-top: 25px;
        text-align: center;

        .name {
            font-weight: 600;
            font-size: 18px;
        }

        .address {
            margin-top: 4px;
            color: $cl-primary-green;
            font-size: 12px;
            font-weight: 600;
        }
    }

    &__description {
        margin-top: 30px;
        text-align: center;
        font-size: 12px;
    }

    &__links {
        margin-top: 20px;
        display: flex;
        flex-direction: column;

        .social-link {
            width: 100%;
            padding: 15px;
            border-radius: 10px;
            background-color: $cl-btn-bg;
            color: $white;
            font-size: 12px;
            font-weight: 600;
            text-align: center;
            text-decoration: none;
            transition: all 0.2s ease-in;

            &:not(:first-child) {
                margin-top: 12px;
            }

            &:hover {
                background-color: $cl-primary-green;
                color: $cl-dark-grey;
                transition: all 0.2s ease-out;
            }
        }
    }
}
</style>