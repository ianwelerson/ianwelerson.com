<script setup lang="ts">
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    next: {
        tyle: String,
        required: false
    }
})
</script>

<template>
    <section :id="props.id" class="home-section">
        <div class="home-section__content">
            <slot></slot>
        </div>
    </section>
</template>

<style scoped lang="scss">
.home-section {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 101vh;
    padding: 0 24px;

    @media (min-width: 1024px)  {
        max-width: 50vw;
    }
}
</style>