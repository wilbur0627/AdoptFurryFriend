<template>
  <div class="sticky top-0 h-[110px] w-full shadow-lg">
    <div
      class="mx-auto flex w-full max-w-[1140px] items-center justify-between"
    >
      <NuxtLink to="/" class="flex cursor-pointer items-center">
        <img class="h-[110px]" src="/adopt.png" alt="動物認養資訊平台" />
        <p class="font-serif text-3xl font-bold text-[#333]">
          動物認養資訊平台
        </p>
      </NuxtLink>
      <div class="items-ceter flex gap-x-2">
        <NuxtLink
          v-for="list of navList"
          :key="list.path"
          class="hover:text-main duration-200"
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
