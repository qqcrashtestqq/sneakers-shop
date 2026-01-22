<script lang="ts" setup>
import type { Button } from "@/types/button";

withDefaults(defineProps<Button>(), {
  tag: "button",
});
</script>

<template>
  <component :is="tag" class="button">
    {{ label }}
    <Icon v-if="icon" :name="icon" />
  </component>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/general/_mixins.scss" as *;

.button {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: responsive(14, 18) responsive(14, 18);
  width: fit-content;
  border-radius: toRem(118);
  background-color: var(--color-green-thin);
  transition: var(--transition);
  color: var(--color-white);
  font-weight: 600;

  &:hover {
    background-color: var(--color-green);
  }
}
</style>
