<script lang="ts" setup></script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
// @use "@/assets/styles/mixins" as *;

.button {
  display: flex;
  align-items: center;
  padding: responsive(12, 18) responsive(12, 33);
  width: 100%;
  border-radius: var(18);
  background-color: var(--color-green-thin);
  transition: var(--transition);
  color: var(--color-white);
  font-weight: 600;

  &:hover {
    background-color: var(--color-green);
  }
}
</style>
