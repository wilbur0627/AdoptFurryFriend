<template>
  <div>
    <NuxtPwaManifest />
    <NuxtLayout>
      <NuxtPage class="h-full" />
    </NuxtLayout>
    <transition name="fade" mode="out-in">
      <Loading v-if="appStore.loading" />
    </transition>
  </div>
</template>

<script setup>
const appStore = useAppStore();
</script>

<style lang="scss" scoped></style>
