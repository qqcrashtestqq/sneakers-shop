<script lang="ts" setup></script>

<template>
  <div class="layout">
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<style>
.layout {
  min-height: 100vh;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin: 85px 85px 0; */
  /* background-color: var(--color-white); */
}
</style>
