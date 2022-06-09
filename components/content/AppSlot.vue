<template>
  <div>
    <h1>Parent component</h1>

    <p style="border: 1px solid;padding: .5rem">
      <slot />
    </p><hr>
    <slot name="namedSlot" />
  </div>
</template>
