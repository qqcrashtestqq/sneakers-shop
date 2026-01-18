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
}
</style>
