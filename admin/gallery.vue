<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      // eslint-disable-next-line no-console
      console.log(swiper)
    }
    const onSlideChange = () => {
      // eslint-disable-next-line no-console
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
    }
  },
}
</script>

<template>
  <Swiper :slides-per-view="3" :space-between="50" @swiper="onSwiper" @slide-change="onSlideChange">
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
  </Swiper>
</template>
