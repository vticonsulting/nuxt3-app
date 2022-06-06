<script setup>
// Shoutout to the Fake store API
// https://fakestoreapi.com/docs

const { data: products } = await useAsyncData('products', () => {
  return queryContent('merch').find()
})

// create an array of categories from the products
const categories = products.value[0].body.reduce((acc, product) => {
  if (!acc.includes(product.category))
    acc.push(product.category)

  return acc
}, [])

// var used to store the active category
const activeCategory = ref(null)

// function used to set the active category
const setCategory = (category) => {
  activeCategory.value = category
  useRouter().push({
    query: {
      category,
    },
  })
}
// set category on mount if it exist in query
onMounted(() => {
  if (useRoute().query.category)
    activeCategory.value = useRoute().query.category
})

// function used to format the price
const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

// function used to filter the products by category
const filterProducts = computed(() => {
  if (!activeCategory.value)
    return products.value[0].body

  return products.value[0].body.filter((product) => {
    return (
      product.category.toLowerCase() == activeCategory.value.toLowerCase()
    )
  })
})

// Set header
useHead({
  title: 'Content Merch',
})
</script>

<template>
  <div>
    <Nav />
    <main>
      <section class="lg:px-[15%] px-[5%] pt-20">
        <h1
          class="text-2xl font-semibold leading-normal text-center lg:text-5xl"
        >
          Stay Up To Date With The
        </h1>
        <h1
          class="text-4xl font-bold leading-normal text-center lg:text-6xl rainbow-text"
        >
          Latest Fashion Trends
        </h1>

        <div class="mt-10 lg:mt-20">
          <h1 class="mb-5 font-medium lg:text-lg">
            Filter Category
            <button
              v-if="activeCategory"
              class="px-3 rounded-sm text-[13px] capitalize bg-gray-200 ml-5"
              @click="setCategory(null)"
            >
              Clear &times;
            </button>
          </h1>
          <div class="flex flex-wrap items-center mb-5 l lg:space-x-5">
            <template v-for="(c, i) in categories" :key="`categroy-${i}`">
              <button
                :class="{
                  'bg-primary-100 text-primary': c == activeCategory,
                  ' bg-gray-200': c !== activeCategory,
                }"
                class="px-3 py-2 rounded-sm text-[13px] capitalize shrink-0 mr-4 mb-4 lg:mr-0 lg:mb-0"
                @click="setCategory(c)"
              >
                {{ c }}
              </button>
            </template>
          </div>
          <div class="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:mt-20">
            <template
              v-for="(p, i) in filterProducts"
              :key="`product-${i}-${p.id}`"
            >
              <Discount
                v-if="i === 0 && !activeCategory"
                class="p-10 text-white rounded lg:col-span-2 bg-slate-900"
              />
              <NuxtLink
                :to="`/merch/${p.id}`"
                :class="{ 'lg:col-start-3': i === 0 && !activeCategory }"
                class="transition-all bg-white rounded-md hover:shadow-lg hover:cursor-pointer"
              >
                <img
                  :src="p.image"
                  :alt="p.title"
                  class="w-full h-[300px] object-contain object-center"
                >
                <div class="p-3">
                  <h2 class="text-xs">
                    {{ p.title }}
                  </h2>
                  <p class="mt-2 text-sm font-bold">
                    {{ formatPrice(p.price) }}
                  </p>
                </div>
              </NuxtLink>
            </template>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
