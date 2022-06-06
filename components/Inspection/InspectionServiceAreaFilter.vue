<template>
  <div class="items-end justify-between sm:space-x-4 sm:flex asfilterRow">
    <div class="items-end flex-1 sm:space-x-4 sm:flex">
      <service-area-select />

      <service-date-input />

      <div class="space-x-0 space-y-4 sm:flex sm:space-y-0 sm:space-x-4 button-group">
        <generate-schedule-button class="mt-4 sm:mt-0" />
        <approve-area-schedule-button class="mt-4 sm:mt-0" />
      </div>
    </div>

    <mileage-log-button class="mt-4 sm:mt-0" />
  </div>
</template>