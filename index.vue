<script setup>
const { data: blogNav } = await useAsyncData('navigation', () => {
  return fetchContentNavigation(queryContent('blog'))
})
useHead({
  title: 'Content Blog',
})
</script>

<template>
  <div class="min-h-screen">
    <Nav />
    <main>
      <section class="lg:px-[15%] px-[5%] pt-20">
        <h1
          class="text-2xl font-semibold leading-normal text-center lg:text-5xl"
        >
          Check Out Our Latest Blog Posts
        </h1>
        <h1
          class="text-4xl font-bold leading-normal text-center lg:text-6xl rainbow-text"
        >
          Learn. Share. Grow.
        </h1>
      </section>
      <section class="lg:px-[15%] px-[5%] lg:pt-20 pt-14">
        <p
          class="mb-10 font-medium tracking-wider text-center text-gray-500 uppercase"
        >
          Blog Posts
        </p>
        <div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <template
            v-for="(b, i) in blogNav[0].children"
            :key="`blogNavItem-${b._path}-${i}`"
          >
            <div class="py-5 border-2 rounded-lg px-7">
              <h2 class="text-lg font-semibold rainbow-text">
                {{ b.title }}
              </h2>
              <!-- Loop over files inside the content dir -->
              <ul
                v-if="b.children"
                class="pl-2 mt-4 space-y-3 list-disc list-inside"
              >
                <template
                  v-for="(child, k) in b.children"
                  :key="`childNav-${child._path}-${k}-${i}`"
                >
                  <li
                    class="text-sm text-gray-600 underline transition-all list-item hover:text-primary-900 underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary"
                  >
                    <NuxtLink :to="`/blog${child._path}`">
                      {{ child.title }}
                    </NuxtLink>
                  </li>
                </template>
              </ul>
              <ul v-else class="pl-2 mt-4 space-y-3 list-disc list-inside">
                <li
                  class="text-sm text-gray-600 underline transition-all list-item hover:text-primary-900 underline-offset-4 decoration-wavy decoration-primary/40 hover:decoration-primary"
                >
                  <NuxtLink :to="`/blog${b._path}`">
                    Get Started
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </template>
        </div>
      </section>
    </main>
  </div>
</template>
