<script setup lang="ts">
const { data: urls } = await useAsyncData('urls', () => queryContent('/urls').find())
const { data: logs } = await useLazyAsyncData('logs', () => queryContent('/logs').find())
const { data: incidents } = await useLazyAsyncData('reports', () =>
  queryContent('/incidents').sort({ title: 0 }).find(),
)
const gridCount = useGridCount()
useCustomHead('StatusBase Status Page')

const retrieveLogs = (path: string) => {
  return logs.value?.find(i => i._path.includes(path.split('/')[2]))
}
</script>

<template>
  <div class="">
    <OverallStatus :report_data="logs" />

    <div class="inline-flex items-end mt-12 font-semibold md:mt-20">
      <h2 class="text-xl md:text-3xl">
        Uptime
      </h2>
      <h3 class="ml-3 text-gray-400 md:text-xl md:ml-6">
        Last {{ gridCount }} days
      </h3>
    </div>

    <div class="flex flex-col items-center">
      <Card v-for="url in urls" :key="url._id" :meta_data="url" :report_data="retrieveLogs(url._path)" />
    </div>

    <IncidentReport :incidents="incidents" />
  </div>
</template>
