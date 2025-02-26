<template>
  <div
    class="grid grid-cols-2 gap-4 p-4 lg:grid-cols-3 lg:p-10 xl:grid-cols-4 2xl:grid-cols-5"
  >
    <div
      v-for="animal of animalListData.Data"
      :key="animal.animal_id"
      class="flex flex-col items-center overflow-hidden rounded-md border shadow-lg duration-200 hover:shadow-2xl"
    >
      <div
        class="my-5 h-[150px] w-[150px] overflow-hidden rounded-full lg:h-[200px] lg:w-[200px]"
      >
        <NuxtImg
          class="h-[150px] w-[150px] lg:h-[200px] lg:w-[200px]"
          :src="animal.album_file"
        />
      </div>
      <div
        class="flex h-12 w-full flex-col items-center justify-center bg-[#138f63] px-5 text-white lg:h-[60px] lg:flex-row lg:justify-between"
      >
        <p class="text-xs xl:text-sm">{{ animal.shelter_name }}</p>
        <p class="text-[10px] xl:text-xs">
          {{ animal.animal_opendate ? animal.animal_opendate : "尚未開放認養" }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const appStore = useAppStore();

appStore.setLoading(true);
const { data: animalListData } = await useFetch(
  "https://data.moa.gov.tw/api/v1/AnimalRecognition?$top=10",
);
appStore.setLoading(false);
</script>

<style lang="scss" scoped></style>
