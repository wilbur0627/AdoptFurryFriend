<template>
  <div class="mx-auto my-5 max-w-[1480px] px-5 md:px-10">
    <p class="mb-5 text-center text-3xl">看貓咪</p>
    <div
      class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <div
        v-for="cat in catData"
        :key="cat.animal_id"
        class="h-[450px] overflow-hidden rounded border p-3 shadow-md"
      >
        <img
          :src="cat.album_file"
          :alt="cat.shelter_name"
          class="mb-2 h-[60%] w-full rounded border border-[#138f63]"
        />
        <div class="flex h-[40%] flex-col items-center justify-center">
          <p>收容編號 : {{ cat.animal_subid }}</p>
          <p>
            {{
              cat.animal_colour +
              animalStore.bodyType[cat.animal_bodytype] +
              animalStore.sexual[cat.animal_sex] +
              cat.animal_kind
            }}
          </p>
          <p>{{ cat.animal_place }}</p>
          <p>{{ cat.shelter_tel }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const animalStore = useAnimalStore();

const randomSkip = Math.floor(Math.random() * 100);
const { data: catData } = await useFetch("/api/moa", {
  server: true,
  query: { top: 4, skip: randomSkip, filter: `animal_kind+like+貓` },
});
</script>

<style lang="scss" scoped></style>
