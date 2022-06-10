<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import { availableLocales } from '~/utils/lang'

// micro compiler
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top',
  },
})

// state
const currentStyle = toRef(props, 'type')
const localeSetting = useState<string>('locale.setting')
</script>

<template>
  <div class="flex items-center">
    <Listbox
      v-if="currentStyle === 'dropdown-right-top'"
      v-model="localeSetting"
      as="div"
      class="relative flex items-center"
    >
      <ListboxLabel class="sr-only">
        Theme
      </ListboxLabel>
      <ListboxButton
        type="button"
        title="Change Language"
        class="transition-colors duration-300"
      >
        <span class="flex items-center justify-center">
          <IconLa:language />
        </span>
      </ListboxButton>
      <ListboxOptions
        class="absolute right-0 z-50 p-1 py-1 overflow-hidden text-sm font-semibold text-gray-700 bg-white rounded-lg shadow-lg outline-none top-full ring-1 ring-gray-900/10 w-36 dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"
      >
        <ListboxOption
          v-for="lang in availableLocales"
          :key="lang.iso"
          :value="lang.iso"
          class="flex items-center px-2 py-2 cursor-pointer" :class="{
            'text-sky-500 bg-gray-100 dark:bg-gray-600/30':
              localeSetting === lang.iso,
            'hover:bg-gray-50 dark:hover:bg-gray-700/30':
              localeSetting !== lang.iso,
          }"
        >
          <span class="mr-2 text-sm">
            {{ lang.flag }}
          </span>
          <span class="flex-1 truncate">
            {{ lang.name }}
            <span class="text-xs">({{ lang.iso }})</span>
          </span>
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
    <select
      v-if="currentStyle === 'select-box'"
      v-model="localeSetting"
      class="w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"
    >
      <option
        v-for="lang in availableLocales"
        :key="lang.iso"
        :value="lang.iso"
        class="flex items-center space-x-2"
      >
        {{ lang.flag }} {{ lang.name }} ({{ lang.iso }})
      </option>
    </select>
  </div>
</template>
