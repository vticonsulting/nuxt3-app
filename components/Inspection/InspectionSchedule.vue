<script>
export default {
  props: {
    schedule: {
      type: Object,
      required: true,
    }
  },
}
</script>

<template>
  <section class="relative overflow-x-auto">
    <span
      class="absolute flex items-center w-40 h-10 px-4 font-bold bg-primary-50 text-primary-500"
    >Area Schedule</span>
    <div class="ml-40">
      <inspection-time-slots />
      <div v-for="route in schedule.Routes" class="flex w-auto gap-0 mx-auto border-gray-200">
        <inspection-route-track />

        <inspection-route :route="route" />
      </div>
    </div>
  </section>
</template>