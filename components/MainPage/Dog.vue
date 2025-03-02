<template>
  <div class="mx-auto my-5 max-w-[1480px] px-10">
    <p class="mb-5 text-center text-3xl">看狗狗</p>
    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="dog in dogData"
        :key="dog.animal_id"
        class="overflow-hidden rounded"
      >
        <img :src="dog.album_file" :alt="dog.shelter_name" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
const randomSkip = Math.floor(Math.random() * 100);
const { data: dogData } = await useFetch("/api/moa", {
  server: true,
  query: { top: 4, skip: randomSkip, filter: `animal_kind+like+狗` },
});
</script>

<style lang="scss" scoped></style>
