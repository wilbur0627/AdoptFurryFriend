<template>
  <div>
    <ClientOnly>
      <swiper-container ref="containerRef">
        <swiper-slide v-for="img in imgList" :key="img.name">
          <img :src="getImage(img.name)" alt="" />
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<script setup>
const containerRef = ref(null);

const swiper = useSwiper(containerRef, {
  loop: true,
  autoplay: {
    delay: 3000,
  },
});

const imgList = ref([
  {
    name: "ad1",
  },
  {
    name: "ad2",
  },
]);
const getImage = (name) => {
  return useImg(
    import.meta.glob("~/assets/img/Carousel/*.png", { eager: true }),
    name,
  );
};

onMounted(() => {
  console.log(swiper.instance);
});
</script>

<style lang="scss" scoped></style>
