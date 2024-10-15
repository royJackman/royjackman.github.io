<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
    <div class="item" @click="isOpen = !isOpen">
        <i><slot name="logo"></slot></i>
        <div class="content">
            <div class="spaced">
                <h2><slot name="position"></slot></h2>
                <h2><slot name="company"></slot></h2>
            </div>
            <div class="spaced">
                <h3><slot name="hook"></slot></h3>
                <h3><slot name="dates"></slot></h3>
            </div>
            <Transition name="fade">
                <div v-if="isOpen">
                    <ul><slot name="bullets"></slot></ul>
                    <div class="tech"><slot name="technologies"></slot></div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .content {
        display: flex;
        flex-direction: column;
        margin: 0 0.4rem;
    }

    .fade-enter-active {
        animation: squeeze 0.3s;
        transition: all 0.3s ease-out;
    }

    .fade-leave-active {
        animation: squeeze 0.8s reverse;
        transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .fade-enter-from, .fade-leave-to {
        opacity: 0;
        transform: translateY(20px);
    }

    h2 {
        font-weight: 700;
        margin-bottom: 0.2rem;
        color: var(--color-accent);
    }

    h3 {
        font-weight: 500;
        margin-bottom: 0.4rem;
        color: var(--color-text);
    }

    i {
        display: flex;
        place-items: center;
        place-content: center;
        width: 32px;
        height: 32px;
        color: var(--color-text);
    }

    .item {
        display: flex;
        position: relative;
        flex-direction: row;
    }

    .spaced {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 88vw;
    }

    .tech {
        display: flex;
        flex-flow: row wrap;
        overflow: scroll;
    }

    ul {
        text-align: justify;
    }

    @keyframes squeeze {
        0% {
            height: 0%;
        }
        100% {
            height: 100%;
        }
    }

    @media (min-width: 1024px) {
        .item {
            margin-top: 0;
            padding: 0.4rem 0 1rem calc(var(--section-gap) / 4);

            &:before, &:after {
                content: ' ';
                border-left: 1px solid var(--color-border);
                position: absolute;
                left: 0;
                height: calc(50% - 25px);
            }

            &:before {
                bottom: calc(50% + 25px);
            }
            
            &:after {
                top: calc(50% + 25px);
            }

            &:first-of-type:before {
                display: none;
            }

            &:last-of-type:after {
                display: none;
            }
        }

        i {
            top: calc(50% - 25px);
            left: -26px;
            position: absolute;
            border: 1px solid var(--color-border);
            background: var(--color-background);
            border-radius: 8px;
            width: 50px;
            height: 50px
        }

        .spaced {
            width: 50vw;
        }
    }
</style>