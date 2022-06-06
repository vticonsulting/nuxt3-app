<template>
  <div class="color-key">
    <h4 class="text-xs font-bold tracking-wider uppercase text-primary-200">Color Key</h4>

    <div class="mt-2 space-y-2 text-sm">
      <div class="flex items-center leading-none">
        <span
          class="inline-block w-10 h-8 text-green-900 bg-green-100 border border-green-900 xkey xunAssignedShade"
        ></span>
        <div class="flex flex-col ml-2">
          <span class="font-medium text-green-900">Assigned by Auto Scheduler</span>
        </div>
      </div>

      <div class="flex items-center leading-none">
        <span
          class="inline-block w-10 h-8 text-blue-900 bg-blue-100 border border-blue-900 xkey xassignedShade"
        ></span>
        <div class="flex flex-col ml-2">
          <span class="font-medium text-blue-900">Manually Assigned Inspection</span>
          <span class="text-xs">Field Tech was assigned outside of the auto scheduler</span>
        </div>
      </div>

      <div class="flex items-center leading-none">
        <span
          class="inline-block w-10 h-8 text-purple-900 bg-purple-100 border border-purple-900 xkey xremovedRoute"
        ></span>
        <div class="flex flex-col ml-2">
          <span class="font-medium text-purple-900">Removed Route</span>
          <span class="text-xs">Original assigned field tech no longer in service area</span>
        </div>
      </div>

      <div class="flex items-center leading-none">
        <span
          class="inline-block w-10 h-8 text-red-900 bg-red-100 border border-red-900 xkey xexceptionRoute"
        ></span>
        <div class="flex flex-col ml-2">
          <span class="font-medium text-red-900">Exception</span>
          <span class="text-xs">Was not able to schedule inspection due to no available routes</span>
        </div>
      </div>
    </div>
  </div>
</template>

