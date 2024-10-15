<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useWindowScroll } from '@vueuse/core'
import FaceCard from './components/FaceCard.vue'
import { computed } from 'vue';

const { y } = useWindowScroll()
const ypx = computed(() => `${y.value}px`);

</script>

<template>
    <div class="header">
        <FaceCard msg="Roy Jackman"/>
    </div>
    <RouterView/>
</template>

<style lang="scss" scoped>
.header {
  line-height: 1.5;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  .header {
    display: flex;
    place-items: center;
    transform: translateY(v-bind(ypx));
  }
}
</style>
