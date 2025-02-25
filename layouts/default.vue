<template>
  <div>{{ dog }}</div>
</template>

<script setup>
const data = await $fetch(
  "https://data.moa.gov.tw/api/v1/AnimalRecognition?$top=10&animal_kind=狗",
);

const dog = computed(() => {
  return data.Data.filter((f) => f.animal_kind === "狗");
});
</script>

<style lang="scss" scoped></style>
