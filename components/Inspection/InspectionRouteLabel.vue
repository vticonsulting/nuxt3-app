<script>
export default {
  props: {
    route: {
      type: Object,
    }
  }
}
</script>

<template>
  <div class="absolute flex flex-col flex-shrink-0 w-40 h-20 p-1 -ml-40 text-xs inspection-label">
    <div class="h-full p-4 bg-white rounded select-none">
      <a
        href="#"
        role="button"
        class="font-bold no-underline cursor-pointer hover:underline text-primary-500 whitespace-nowrap"
      >{{ route.FieldTechName }}</a>
      <span class="flex items-baseline space-x-1">
        <span class="text-sm">10</span>
        <span class="text-gray-500">Miles</span>
      </span>
    </div>
  </div>
</template>