<script>
export default {
  props: {
    project: {
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
  <div :class="['flip-card absolute w-40 h-20 p-1 text-2xs', { flipped: flipped }]" class>
    <div class="flip-card-inner">
      <div
        :class="`text-red-500 bg-red-50`"
        class="h-full p-2 border border-red-500 rounded select-none flip-card-front hover:border-red-900"
      >
        <a href="#" class="font-bold hover:underline">{{ project.ShortName }}</a>
        <div>
          Claim
          <a @click="flip" class="font-semibold cursor-pointer hover:underline">0529608415</a>
        </div>
        <div>Service TC</div>
        <div class="whitespace-nowrap">15 Travel Minutes</div>
        <div class="asInvalidTime" style="display: none;">Inspection Time: 08:00:00</div>
      </div>
      <div
        class="h-full p-2 text-red-500 border border-red-500 rounded select-none flip-card-back bg-red-50 hover:border-red-900"
      >
        <a @click="flip" class="font-semibold cursor-pointer hover:underline">&larr; Back</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.flip-card {
  background-color: transparent;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card.flipped .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front {
  position: relative;
  backface-visibility: hidden;
}

.flip-card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>