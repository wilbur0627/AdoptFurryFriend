<template>
  <div class="mx-auto my-5 max-w-[1480px] px-10">
    <p class="mb-5 text-center text-3xl">看貓咪</p>
    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="cat in catData"
        :key="cat.animal_id"
        class="overflow-hidden rounded"
      >
        <img :src="cat.album_file" :alt="cat.shelter_name" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
const randomSkip = Math.floor(Math.random() * 100);
const { data: catData } = await useFetch("/api/moa", {
  server: true,
  query: { top: 4, skip: randomSkip, filter: `animal_kind+like+貓` },
});
</script>

<style lang="scss" scoped></style>
