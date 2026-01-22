<script lang="ts" setup>
import { useCatalogStore } from "@/stores/catalog";

const storeCatalog = useCatalogStore();

const { getCatalog } = storeCatalog;

onMounted(() => {
  getCatalog();
});
</script>

<template>
  <section class="catalog">
    <div class="container catalog__container">
      <div class="catalog__head">
        <h1 class="title catalog__title">Все кроссовки</h1>
      </div>
      <ul class="catalog__list">
        <li
          v-for="(item, index) in storeCatalog.catalog"
          :key="index"
          class="catalog__item"
        >
          <CatalogCard v-if="storeCatalog.catalog.length" :card="item" />
        </li>
        <!-- <template v-if="storeCatalog.catalog.length">
          
        </template> -->
        <!-- <template v-else>
          <li class="catalog__item">
            <CatalogCardSkeleton />
          </li>
        </template> -->
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/general/_mixins.scss" as *;

.catalog {
  padding: var(--padding-section) 0;

  &__container {
    display: flex;
    flex-direction: column;
    gap: responsive(15, 30);
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: responsive(20, 40);
  }
}
</style>
