<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['button-clicked'])
</script>

<template>
  <section>
    <div class="flex grid items-center grid-cols-2 px-20">
      <img
        :src="image"
        class="rounded-lg shadow-lg -rotate-6"
        alt="Product Image"
      >
      <div class="p-12 rounded-lg shadow-lg backdrop-blur-2xl">
        <h2 class="mb-6 text-4xl font-bold">
          {{ title }}
        </h2>
        <p class="mb-6 text-gray-500">
          {{ description }}
        </p>

        <button
          class="py-3 text-sm font-medium text-white transition duration-150 ease-in-out bg-green-600 rounded shadow-md px-7 hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg"
          @click="emit('button-clicked')"
        >
          {{ loading ? 'Redirecting' : `Pay ${price}` }}
        </button>
      </div>
    </div>
  </section>
</template>
