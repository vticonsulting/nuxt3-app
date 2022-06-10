<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import type { IThemeSettingOptions } from '~/utils/theme'
import { availableThemes } from '~/utils/theme'

// micro compiler
const props = defineProps({
  type: {
    type: String,
    default: 'dropdown-right-top',
  },
})

// state
const themeSetting = useState<IThemeSettingOptions>('theme.setting')
const currentStyle = toRef(props, 'type')
</script>

<template>
  <div class="flex items-center">
    <Listbox
      v-if="currentStyle === 'dropdown-right-top'"
      v-model="themeSetting"
      as="div"
      class="relative flex items-center"
    >
      <ListboxLabel class="sr-only">
        {{ $t('components.theme_switcher.theme') }}
      </ListboxLabel>
      <ListboxButton
        type="button"
        :title="$t('components.theme_switcher.change_theme')"
        class="transition-colors duration-300"
      >
        <span class="flex items-center justify-center dark:hidden">
          <IconUil:sun />
        </span>
        <span class="items-center justify-center hidden dark:flex">
          <IconUil:moon />
        </span>
      </ListboxButton>
      <ListboxOptions
        class="absolute right-0 z-50 p-1 py-1 overflow-hidden text-sm font-semibold text-gray-700 bg-white rounded-lg shadow-lg outline-none top-full ring-1 ring-gray-900/10 w-36 dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"
      >
        <ListboxOption
          v-for="theme in availableThemes"
          :key="theme.key"
          :value="theme.key"
          class="flex items-center px-2 py-2 cursor-pointer" :class="{
            'text-sky-500 bg-gray-100 dark:bg-gray-600/30':
              themeSetting === theme.key,
            'hover:bg-gray-50 dark:hover:bg-gray-700/30':
              themeSetting !== theme.key,
          }"
        >
          <span class="mr-2 text-sm">
            <IconUil:sun v-if="theme.key === 'light'" />
            <IconUil:moon v-else-if="theme.key === 'dark'" />
            <IconUil:laptop v-else-if="theme.key === 'system'" />
            <IconUil:clock v-else-if="theme.key === 'realtime'" />
          </span>
          {{ theme.text }}
        </ListboxOption>
      </ListboxOptions>
    </Listbox>
    <select
      v-if="currentStyle === 'select-box'"
      v-model="themeSetting"
      class="w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"
    >
      <option
        v-for="theme in availableThemes"
        :key="theme.key"
        :value="theme.key"
      >
        {{ theme.text }}
      </option>
    </select>
  </div>
</template>
