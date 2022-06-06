<script>
export default {
  props: {
    route: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      flipped: false,
    };
  },
  methods: {
    flip() {
      this.flipped = !this.flipped;
    },
  }
}
</script>

<template>
  <inspection-route-label class="routeColumn" :route="route"></inspection-route-label>

  <!-- Inspection Route Details  -->

  <div v-if="route.ProjectInspectionDetails.length">
    <inspection-detail-card
      v-for="(project, index) in route.ProjectInspectionDetails"
      :project="project"
      :style="`left: ${160 * (index + 1)}px`"
    ></inspection-detail-card>

    <!-- ref="calenderSlot21"
        :model="calenderSlot[21]"
        :start-time="this.divMappers[21].startTime"
        :show-left-border="true"
    :position="slot22Left"-->
  </div>

  <!-- <div class="absolute w-40 h-20 p-1 text-2xs" style="left: 160px">
    <div
      :class="`text-green-900 bg-green-50`"
      class="h-full p-2 border border-green-500 select-none hover:border-green-900"
    >
      <a href="#" class="font-bold hover:underline">SEMCO</a>
      <div class="flex space-x-1">
        <span>Claim</span>
        <a href="#" class="font-semibold hover:underline">0529608415</a>
      </div>

      <div class="flex space-x-1">
        <span>Service</span>
        <span class="font-bold">TC</span>
      </div>

      <div class="flex space-x-1">
        <span class="whitespace-nowrap">Travel Minutes</span>
        <span class="font-bold">15</span>
      </div>

      <div class="asInvalidTime" style="display: none;">Inspection Time: 08:00:00</div>
    </div>
  </div>

  <div class="absolute w-40 h-20 p-1 text-2xs" style="left: 320px">
    <div
      :class="`text-blue-900 bg-blue-50`"
      class="h-full p-2 border border-blue-500 select-none hover:border-blue-900"
    >
      <a href="#" class="font-bold hover:underline">SEMCO</a>
      <div>
        Claim
        <a href="#" class="font-semibold hover:underline">0529608415</a>
      </div>
      <div>Service TC</div>
      <div class="whitespace-nowrap">15 Travel Minutes</div>
      <div class="asInvalidTime" style="display: none;">Inspection Time: 08:00:00</div>
    </div>
  </div>

  <div class="absolute w-40 h-20 p-1 text-2xs" style="left: 480px">
    <div
      :class="`text-yellow-900 bg-yellow-50`"
      class="h-full p-2 border border-yellow-500 select-none hover:border-yellow-900"
    >
      <a href="#" class="font-bold hover:underline">SEMCO</a>
      <div>
        Claim
        <a href="#" class="font-semibold hover:underline">0529608415</a>
      </div>
      <div>Service TC</div>
      <div class="whitespace-nowrap">15 Travel Minutes</div>
      <div class="asInvalidTime" style="display: none;">Inspection Time: 08:00:00</div>
    </div>
  </div>

  <div class="absolute w-40 h-20 p-1 text-2xs" style="left: 640px">
    <div
      :class="`text-indigo-900 bg-indigo-50`"
      class="h-full p-2 border border-indigo-500 select-none hover:border-indigo-900"
    >
      <a href="#" class="font-bold hover:underline">SEMCO</a>
      <div>
        Claim
        <a href="#" class="font-semibold hover:underline">0529608415</a>
      </div>
      <div>Service TC</div>
      <div class="whitespace-nowrap">15 Travel Minutes</div>
      <div class="asInvalidTime" style="display: none;">Inspection Time: 08:00:00</div>
    </div>
  </div>-->
</template>