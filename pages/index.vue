<template>
  <div>
    <Carousel />
    <MainPage />
  </div>
</template>

<script setup>
const { data: getError } = await useFetch("/api/errorGo");
console.log(getError.value);
</script>

<style lang="scss" scoped></style>
