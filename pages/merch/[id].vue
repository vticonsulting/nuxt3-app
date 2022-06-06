<script setup>
import { Icon } from '@iconify/vue'
const id = useRoute().params.id

const { data: product } = await useAsyncData(`product-${id}`, async () => {
  const q = await queryContent('merch').only('body').findOne()
  return q.body.find(p => p.id == parseInt(id))
})

// function used to format the price
const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

// Set header
useHead({
  title: `${product.value.title} for ${formatPrice(product.value.price)}`,
})
</script>

<template>
  <div>
    <Nav />
    <main>
      <section class="lg:px-[10%] pt-10 px-[5%]">
        <div class="relative flex flex-col items-start lg:flex-row gap-7">
          <div class="flex-1">
            <img
              class="w-full object-contain h-[90%]"
              :src="product.image"
              :alt="product.title"
            >
          </div>
          <div class="flex-1">
            <p
              class="inline-block px-4 py-1 text-sm text-gray-500 capitalize bg-gray-200 rounded"
            >
              {{ product.category }}
            </p>
            <h1 class="my-5 text-2xl font-bold lg:text-3xl lg:my-6">
              {{ product.title }}
            </h1>
            <div class="flex items-center space-x-1">
              <template v-for="(r, i) in 5" :key="`productRating-${i}`">
                <Icon
                  icon="ri:star-fill"
                  :class="{
                    'text-primary-500': i < parseInt(product.rating.rate),
                    'text-gray-300': i >= parseInt(product.rating.rate),
                  }"
                />
              </template>
              <span class="ml-2 text-xs">{{ product.rating.count }} reviews</span>
            </div>

            <p class="mt-8 text-2xl lg:text-3xl">
              {{ formatPrice(product.price) }}
            </p>
            <p
              class="mt-5 text-sm text-gray-500 whitespace-pre-wrap lg:text-base"
              v-html="product.description"
            />
            <div class="flex items-center mt-12 space-x-5">
              <button class="w-full py-4 text-white rounded-md rainbow-bg">
                Add To Cart
              </button>
              <button>
                <Icon icon="ph:heart-straight" class="text-gray-500 w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <br>
    </main>
  </div>
</template>
