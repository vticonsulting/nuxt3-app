<script lang="ts">
import { ref } from 'vue'

interface InspectionDetail {
  ShortName: string;
  ServiceType: string;
  ClaimNumber: string;
}

export default {
  props: {
    inspection: {
      type: Object,

      default: () => ({
        ClaimNumber: '1234567889',
        ServiceType: 'TC',
        ShortName: 'SEM'
      }) as InspectionDetail,
    }
  },
  setup() {
    const isOpen = ref(false)

    function toggle() {
      isOpen.value = !isOpen.value
    }

    return {
      isOpen,
      toggle
    }
  }
}
</script>

<template>
  <div class="border shadow-sm inspection-detail">
    <div class="relative h-full p-1 text-blue-900 bg-blue-100 rounded shadow opacity-90">
      <div class="flex items-center justify-between font-bold inspection-detail-header">
        <div class="inspection-detail-header-title">
          <span>{{ inspection.ShortName }}</span>
        </div>

        <div class="inspection-detail-header-actions">
          {{ inspection.ServiceType }}
          <button
            class="inspection-detail-header-action"
            @click="toggle"
          >
            <i class="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>

      <div class="inspection-detail-body" v-if="isOpen">
        <slot></slot>
      </div>

      <div class="absolute bottom-0 right-0 mb-1 mr-1 text-right">
        <a class="font-semibold underline">{{ inspection.ClaimNumber }}</a>
      </div>
    </div>
  </div>
</template>

<style>
.inspection-detail {
  width: 160px;
  height: 72px;
  padding: 1px;
}
</style>