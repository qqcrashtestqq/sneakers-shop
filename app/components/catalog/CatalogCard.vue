<script lang="ts" setup>
import type { CatalogCard } from "@/types/catalog";

const config = useRuntimeConfig();

defineProps<{
  card: CatalogCard;
}>();
</script>

<template>
  <article class="card">
    <div class="card__img">
      <NuxtImg :src="`${config.public.baseUrl}/${card.image}`" />
    </div>
    <NuxtLink to="/" class="card__title">{{ card.name }}</NuxtLink>
    <div class="card__box">
      <div class="card__value">
        <p class="card__text">price</p>
        <p class="card__price">{{ card.price }} $</p>
      </div>
      1
    </div>
  </article>
</template>

<style scoped lang="scss">
@use "@/assets/scss/general/_mixins.scss" as *;

.card {
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: responsive(20, 30);
  border: toRem(1) solid var(--color-light-gray);
  background-color: var(--color-white);
  border-radius: toRem(40);
  gap: toRem(10);
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    border-color: transparent;
    box-shadow: var(--shadow);
  }

  &__img {
    width: responsive(100, 133);
    margin: 0 auto;
  }

  &__title {
    font-size: 14px;
    text-align: center;
  }

  &__box {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__value {
    display: flex;
    flex-direction: column;
    gap: toRem(2);
  }

  &__text {
    font-weight: 500;
    font-size: 11px;
    text-transform: uppercase;
    color: var(--color-gray);
  }

  &__price {
    font-weight: 700;
    font-size: 14px;
  }
}

@include mq("md") {
  .card {
  }
}
</style>
