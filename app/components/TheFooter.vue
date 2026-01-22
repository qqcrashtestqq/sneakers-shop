<script lang="ts" setup>
import { FOOTER_MENU } from "@/constants";
</script>

<template>
  <footer class="footer">
    <div class="container footer__container">
      <NuxtLink to="/" class="footer__logo">
        <NuxtImg src="/img/logo.png" loading="lazy" />
      </NuxtLink>
      <nav class="footer__nav">
        <ul class="footer__list">
          <li
            v-for="(item, index) in FOOTER_MENU"
            :key="index"
            class="footer__item"
          >
            <NuxtLink :to="item.link" class="footer__link">
              {{ item.text }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/general/_mixins.scss" as *;

.footer {
  padding: toRem(24) 0;
  background-color: var(--color-green);

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: block;
    width: responsive(200, 245);
  }

  &__list {
    display: flex;
    align-items: center;
    gap: responsive(24, 32);
  }

  &__link {
    color: var(--color-white);
  }
}

@include mq("md") {
  .footer {
    &__container {
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
    }

    &__list {
      flex-direction: column;
      align-items: flex-start;
    }
  }
}
</style>
