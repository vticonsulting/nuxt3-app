<script setup>
import { Icon } from '@iconify/vue'
const links = [
  {
    name: 'Blog',
    icon: 'carbon:blog',
    link: '/',
  },
  {
    name: 'Merch',
    icon: 'ion:shirt-outline',
    link: '/merch',
  },
]
</script>

<template>
  <header class="flex items-center justify-between h-20 px-[5%] lg:px-[15%]">
    <NuxtLink to="/" class="text-2xl font-bold lg:text-4xl">
      <span class="text-primary">C</span>ontent
    </NuxtLink>
    <nav class="flex items-center text-gray-600 space-x-7">
      <template v-for="(n, i) in links" :key="`navLink-${i}`">
        <NuxtLink
          :to="n.link"
          class="inline-block nav-link hover:text-primary group"
        >
          <div class="flex items-center space-x-2">
            <Icon :icon="n.icon" class="w-4 h-4" />
            <span class="font-medium"> {{ n.name }}</span>
          </div>
          <div
            class="h-0.5 w-4/5 bg-primary mt-1 -translate-y-full scale-0 group-hover:scale-100 group-hover:translate-y-full transition-all"
          />
        </NuxtLink>
      </template>
    </nav>
  </header>
</template>

<style scoped>
	.nav-link.router-link-active.router-link-exact-active {
		@apply text-primary;
	}
</style>
