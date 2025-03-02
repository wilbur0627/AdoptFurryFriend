<template>
  <div
    class="relative h-0 w-full overflow-hidden border-b-[5px] border-[#138f63] pb-[calc(22.91666666666667%)]"
  >
    <ClientOnly>
      <swiper-container :loop="true" :autoplay="{ delay: 3000 }">
        <swiper-slide
          v-for="(animals, index) in animalList"
          :key="index"
          class="flex max-h-[22.91666666666667vw] cursor-pointer"
        >
          <div
            v-for="animal in animals"
            :key="animal.animal_id"
            class="group relative flex-1"
            @click="goToDetail(animal)"
          >
            <img
              class="relative z-20 h-full w-full group-hover:z-0"
              :src="animal.album_file"
              :alt="animal.shelter_name"
              loading="lazy"
            />
            <div
              class="absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col items-center justify-center bg-black bg-opacity-0 text-white duration-300 group-hover:bg-opacity-50"
            >
              <p>收容編號 : {{ animal.animal_subid }}</p>
              <p>
                {{
                  animal.animal_colour +
                  animalStore.bodyType[animal.animal_bodytype] +
                  animalStore.sexual[animal.animal_sex] +
                  animal.animal_kind
                }}
              </p>
              <p>{{ animal.animal_remark }}</p>
              <p>{{ animal.animal_place }}</p>
              <p>{{ animal.shelter_tel }}</p>
              <p>{{ animal.shelter_address }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<script setup>
const animalStore = useAnimalStore();

const randomSkip = Math.floor(Math.random() * 100);
const randomListData = await $fetch(
  `https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=15&$skip=${randomSkip}`,
);
const animalList = ref([]);
let arr = [];
for (let i = 0; i < randomListData.length; i++) {
  arr.push({
    ...randomListData[i],
  });
  if (arr.length === 3) {
    animalList.value.push(arr);
    arr = [];
  }
}

const goToDetail = (animal) => {
  console.log(animal);
};
</script>

<style lang="scss" scoped></style>
