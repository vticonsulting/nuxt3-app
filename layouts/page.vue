<template>
  <div>
    <slot name="app-before" />
    <div id="app-before" />
    <div class="flex flex-col min-h-screen">
      <slot name="header">
        <PageNavbar />
      </slot>
      <div class="flex flex-col flex-1 w-full">
        <div
          class="relative flex flex-col flex-1 w-full h-full mx-auto max-w-8xl"
        >
          <slot />
        </div>
      </div>
      <slot name="footer">
        <PageFooter />
      </slot>
    </div>
    <slot name="app-after" />
    <div id="app-after" />
  </div>
</template>
