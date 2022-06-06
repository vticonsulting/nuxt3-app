<script setup lang="ts">
import { formatAMPM } from '~/utilities'

interface TimeSlot {
  slot: number,
  time: string
  amPm: string
}

// Generate a list of time slots in 30 minute increments starting at 6:30am and ending at 6:00pm
const timeSlots: TimeSlot[] = [];
for (let i = 0; i < 22; i++) {
  const input = new Date(2021, 0, 1, 7, 0 + i * 30, 0);
  let [time, amPm] = formatAMPM(input).split(' ')
  timeSlots.push({
    slot: i,
    time: time,
    amPm: amPm.toUpperCase()
  });
}
</script>

<template>
  <div class="flex text-sm font-medium text-gray-500">
    <div
      v-for="slot in timeSlots"
      class="flex items-center justify-center flex-shrink-0 w-20 h-10 space-x-1 border-r select-none border-primary-200 bg-primary-50"
    >
      <span class="text-sm font-semibold">{{ slot.time }}</span>
      <span class="text-xs text-gray-400" style="font-variant: small-caps;">{{ slot.amPm }}</span>
    </div>
  </div>
</template>