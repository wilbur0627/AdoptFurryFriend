<template>
  <div class="sticky top-0 h-20 w-full bg-main shadow-lg">
    <div class="mx-auto flex w-full max-w-[1140px] items-center">
      <NuxtLink to="/" class="mr-10 flex cursor-pointer items-center sm:mr-20">
        <img class="h-20" src="/adopt.png" alt="動物認養資訊平台" />
        <p
          class="font-serif text-lg font-bold text-white sm:text-xl lg:text-2xl"
        >
          動物認養資訊平台
        </p>
      </NuxtLink>
      <div class="items-ceter flex gap-x-4">
        <NuxtLink
          v-for="list of navList"
          :key="list.path"
          class="text-xs text-white duration-200 hover:text-[#63ffc8] sm:text-base"
          :to="list.path"
        >
          {{ list.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const navList = ref([
  {
    name: "領養查詢",
    path: "/adopt",
  },
  {
    name: "尋寵啟事",
    path: "/lose-love",
  },
]);
</script>

<style lang="scss" scoped></style>
