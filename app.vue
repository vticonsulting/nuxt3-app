<script setup>
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>

<template>
  <div class="sm:py-10">
    <AppContainer>
      <!-- <AppHeader /> -->
      <!-- <PageContainer> -->
      <Html lang="en" />
      <Meta property="og:image" content="/cover.jpg" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Navbar />
      <ConfettiComponent :passed="true" />
      <NuxtPage />
      <main class="text-left">
        <nav>
          <AppNavigation :navigation-tree="navigation" />
        </nav>
      </main>
      <!-- </PageContainer> -->
    </AppContainer>
  </div>
</template>

<style>
body {
  @apply bg-gray-50 dark:bg-gray-900;
}
</style>
