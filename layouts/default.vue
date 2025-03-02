<template>
  <div>
    <Navbar class="z-[999]" />
    <NuxtPage />
  </div>
</template>

<script setup>
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>

<style lang="scss" scoped></style>
