<template>
  <div>
    <slot name="app-before" />
    <div id="app-before" />
    <div class="flex flex-col min-h-screen">
      <slot name="header">
        <DashboardNavbar>
          <template #drawer>
            <DashboardSidebar mode="mobile" />
          </template>
        </DashboardNavbar>
      </slot>
      <div class="flex flex-col flex-1 w-full">
        <div
          class="relative flex flex-row flex-1 w-full h-full mx-auto max-w-8xl"
        >
          <div class="py-4 lg:pl-8">
            <DashboardSidebar />
          </div>
          <div class="flex flex-col lg:ml-60 xl:ml-80">
            <slot />
            <slot name="footer">
              <PageFooter />
            </slot>
          </div>
        </div>
      </div>
    </div>
    <slot name="app-after" />
    <div id="app-after" />
  </div>
</template>
