<script lang="ts" setup>
import { HEDER_MENU } from "~/constants";

const statusBurgerMenu = ref(false);
const statusMenu = ref(false);

function openBurger() {
  statusBurgerMenu.value = !statusBurgerMenu.value;
  statusMenu.value = !statusMenu.value;
}
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <NuxtLink to="/" class="header__logo">
        <NuxtImg src="/img/logo.png" loading="lazy" />
      </NuxtLink>

      <nav class="header__nav" :class="{ active: statusMenu }">
        <ul class="header__list">
          <li
            v-for="(item, index) in HEDER_MENU"
            :key="index"
            class="header__item"
          >
            <NuxtLink :to="item.link" class="header__link">
              <Icon :name="item.icon" class="header__icon" size="16" />
              {{ item.text }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <button
        class="header__burger"
        :class="{ active: statusBurgerMenu }"
        @click="openBurger"
      >
        <span class="header__burger-span"></span>
        <span class="header__burger-span"></span>
        <span class="header__burger-span"></span>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "~/assets/scss/general/_mixins.scss" as *;

.header {
  padding: responsive(24, 50) 0;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    display: block;
    width: responsive(100, 245);
  }

  &__list {
    display: flex;
    align-items: center;
    gap: responsive(24, 32);
  }

  &__link {
    display: flex;
    align-items: center;
    position: relative;
    gap: 12px;
    transition: var(--transition);

    &::after {
      position: absolute;
      content: "";
      bottom: toRem(-5);
      width: 100%;
      right: 0;
      height: toRem(2);
      background-color: var(--color-green);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    &:hover {
      &::after {
        transform: scaleX(1);
      }
    }
  }

  &__icon {
    color: var(--color-gray);
  }

  &__burger {
    position: relative;
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: toRem(6);
    width: toRem(26);
    height: toRem(24);
    cursor: pointer;
    z-index: 4;

    &-span {
      width: 100%;
      height: toRem(2);
      background-color: var(--color-green);
      transition: transform 0.3s ease, opacity 0.2s ease;
      transform-origin: center;
    }

    &.active {
      & .header__burger-span {
        &:nth-child(1) {
          transform: translateY(toRem(8)) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: translateY(toRem(-8)) rotate(-45deg);
        }
      }

      .header__burger-span {
        background-color: var(--color-white);
      }
    }
  }
}

@include mq("md") {
  .header {
    &__nav {
      position: fixed;
      top: 0;
      left: 0;

      width: 100vw;
      height: 100vh;

      background: var(--gradient);
      padding: 50px 16px;

      transform: translateX(100%);
      transition: transform 0.4s ease;
      will-change: transform;
      z-index: 4;

      &.active {
        transform: translateX(0);
      }
    }

    &__list {
      flex-direction: column;
      align-items: flex-start;
    }

    &__link {
      color: var(--color-white);

      &::after {
        display: none;
      }
    }

    &__icon {
      color: var(--color-white);
    }

    &__burger {
      display: flex;
    }
  }
}
</style>
