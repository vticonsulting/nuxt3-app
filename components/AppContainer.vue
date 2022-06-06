<script setup lang="ts">
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

const menu = ref([
  {
    header: 'Main Navigation',
    hiddenOnCollapse: true,
  },
  {
    href: '/',
    title: 'Dashboard',
    icon: 'fa fa-user',
  },
  {
    href: '/charts',
    title: 'Charts',
    icon: 'fa fa-chart-area',
    child: [
      {
        href: '/charts/sublink',
        title: 'Sub Link',
      },
    ],
  },
])
</script>

<template>
  <div class="min-h-screen u-bg-black">
    <client-only>
      <sidebar-menu :menu="menu" />
    </client-only>
    <slot />
  </div>
</template>
