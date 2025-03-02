<template>
  <div class="sticky top-0 h-[60px] w-full bg-white shadow-lg md:h-20">
    <div class="mx-auto flex w-full items-center justify-between px-[32px]">
      <NuxtLink to="/" class="mr-10 flex cursor-pointer items-center sm:mr-20">
        <img class="h-[60px] md:h-20" src="/adopt.png" alt="動物認養資訊平台" />
        <p class="font-serif text-lg font-bold sm:text-xl lg:text-2xl">
          動物認養資訊平台
        </p>
      </NuxtLink>
      <div class="items-ceter hidden gap-x-4 md:flex">
        <NuxtLink
          v-for="list of navList"
          :key="list.path"
          class="text-xs font-bold duration-200 hover:text-[#138f63] sm:text-base"
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
  {
    name: "合法特定寵物業者名單",
    path: "/legal-specific-pet",
  },
]);
</script>

<style lang="scss" scoped></style>
