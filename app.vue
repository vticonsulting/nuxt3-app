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
      <!-- </PageContainer> -->
    </AppContainer>
  </div>
</template>

<style>
body {
  @apply bg-gray-50 dark:bg-gray-900;
}
</style>
