<template>
  <div class="mx-auto my-5 max-w-[1480px] px-10">
    <p class="mb-5 text-center text-3xl">看狗狗</p>
    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="dog in dogData"
        :key="dog.animal_id"
        class="h-[450px] overflow-hidden rounded border p-3 shadow-md"
      >
        <img
          :src="dog.album_file"
          :alt="dog.shelter_name"
          class="mb-2 h-[60%] w-full rounded border border-[#138f63]"
        />
        <div class="flex h-[40%] flex-col items-center justify-center">
          <p>收容編號 : {{ dog.animal_subid }}</p>
          <p>
            {{
              dog.animal_colour +
              animalStore.bodyType[dog.animal_bodytype] +
              animalStore.sexual[dog.animal_sex] +
              dog.animal_kind
            }}
          </p>
          <p>{{ dog.animal_place }}</p>
          <p>{{ dog.shelter_tel }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const animalStore = useAnimalStore();

const randomSkip = Math.floor(Math.random() * 100);
const { data: dogData } = await useFetch("/api/moa", {
  server: true,
  query: { top: 4, skip: randomSkip, filter: `animal_kind+like+狗` },
});
</script>

<style lang="scss" scoped></style>
