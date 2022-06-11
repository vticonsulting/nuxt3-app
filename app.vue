<template>
  <div class="sm:py-10">
    <Html lang="en" />
    <Meta property="og:image" content="/cover.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
    <NuxtLayout>
      <Navbar />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-gray-900;
}
</style>

<style>
.text-heather {
    --tw-text-opacity: 1;
    color: rgb(164 152 181 / var(--tw-text-opacity));
}
.bg-midnight {
    --tw-bg-opacity: 1;
    background-color: rgb(22 0 38 / var(--tw-bg-opacity));
}
.bg-tolopea {
  --tw-bg-opacity: 1;
  background-color: rgb(22 0 52 / var(--tw-bg-opacity));
}
.border-jagger {
  --tw-border-opacity: 1;
  border-color: rgb(41 12 81 / var(--tw-border-opacity));
}
.border-\[\#513C6F\] {
    --tw-border-opacity: 1;
    border-color: rgb(81 60 111 / var(--tw-border-opacity));
}
.bg-sunglow {
    --tw-bg-opacity: 1;
    background-color: rgb(253 184 47 / var(--tw-bg-opacity));
}
.focus\:outline-none:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
}
.focus\:border-sunglow:focus {
    --tw-border-opacity: 1;
    border-color: rgb(253 184 47 / var(--tw-border-opacity));
}
</style>
