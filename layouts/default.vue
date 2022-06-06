<script setup lang="ts">
import { useRoute } from 'vue-router'
// import '../assets/css/tailwind.css'

const route = useRoute()
</script>

<template>
  <div class="flex flex-col h-screen">
    <app-header />
    <slot name="header" />

    <main class="flex-1">
      <template v-if="route.path !== '/'">
        <router-link to="/">
          → Back Home
        </router-link>
        <hr>
      </template>

      <slot name="default" />
    </main>

    <slot name="footer">
      <footer>Copyright {{ new Date().getFullYear() }}</footer>
    </slot>
  </div>
</template>

<style scoped>
.logo {
  width: 1.5rem;
  height: 1.5rem;
  max-width: 100%;
  margin-bottom: 0;
  color: white;
}
</style>
