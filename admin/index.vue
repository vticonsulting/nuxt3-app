<script setup lang="ts">
const user = useSupabaseUser()
const { auth } = useSupabaseClient()
const text = useToUpper('it works!')

const inputTypes = [
  'button',
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'month',
  'number',
  'password',
  'radio',
  'range',
  'search',
  'select',
  'submit',
  'tel',
  'text',
  'textarea',
  'time',
  'url',
  'week',
]
const inputOptions = {
  checkbox: ['I like Tailwind', 'I also like FormKit', 'I like other things too'],
  radio: ['I like Tailwind', 'I like FormKit', 'I like everything'],
  select: ['I like Tailwind', 'I like FormKit', 'I like everything'],
}
const { result, search } = useSearch('test_index') // pass your index as param

const randomColor = (e) => {
  const hex = Math
    .floor(Math.random() * 16777215)
    .toString(16)
  e.target.setAttribute(
    'style',
    `background-color: #${hex}`,
  )
}

watchEffect(() => {
  if (user.value)
    navigateTo('/tasks')
})

onMounted(async () => {
  await search({
    query: 'Samsung',
    requestOptions: { filters: 'objectID:ecommerce-sample-data-99' },
  })
})
</script>

<template>
  <div class="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
    {{ result }}
    <!-- You can use the label prop -->
    <FormKit
      type="button"
      label="Checkout my label"
      help="You can use the label prop."
    />

    <!-- Or the default slot -->
    <FormKit
      type="button"
      help="You can use the default slot."
    >
      Checkout my slot
    </FormKit>

    <!-- You can also bind event listeners -->
    <FormKit
      type="button"
      help="You can bind event listeners."
      @click="randomColor"
    >
      Click me!
    </FormKit>

    <FormKit
      type="text"
      placeholder="Hello world!"
    />
    <FormKit
      label="Default FormKit text input"
      type="text"
      help="the config.classes definitions apply globally"
    />

    <!-- using section-key class props -->
    <FormKit
      type="text"
      label="Section-key class props"
      help="Look, Ma! Tailwind styles"
      outer-class="mb-5"
      label-class="block mb-1 text-sm font-bold"
      inner-class="max-w-md mb-1 overflow-hidden border border-gray-400 rounded-lg focus-within:border-blue-500"
      input-class="w-full h-10 px-3 text-base text-gray-700 placeholder-gray-400 border-none"
      help-class="text-xs text-gray-500"
    />

    <!-- using the classes prop -->
    <FormKit
      type="text"
      label="Classes prop"
      help="Look, Ma! Tailwind styles"
      :classes="{
        outer: 'mb-5',
        label: 'block mb-1 font-bold text-sm',
        inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
        input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
        help: 'text-xs text-gray-500',
      }"
    />

    <FormKit
      label="I have a validation error"
      type="text"
      help="I must equal 'foo'"
      value="bar"
      validation="required|is:foo"
      validation-visibility="live"
      validation-label="Input"
    />

    <FormKit
      label="I am a disabled input"
      type="text"
      value="I'm so faded"
      help="I cannot be interacted with"
      :disabled="true"
    />

    <!-- <FormKit
      v-for="type in inputTypes"
      :key="type"
      :label="`This is a ${type} input`"
      :type="type"
      :placeholder="`${type} input placeholder`"
      :options="inputOptions[type] ? inputOptions[type] : null"
      :help="`Help text for the ${type} input`"
      :multiple="type === 'file'"
      :disabled="type === 'date' ? true : undefined"
      :validation="type === 'email' ? 'required|email' : 'required'"
      :validation-visibility="type === 'email' ? 'live' : 'blur'"
      :validation-label="type"
    /> -->

    <div id="gradient">
      This element is surrounded by a gradient-based border image!
    </div>

    <h2 class="my-6 text-3xl font-extrabold text-center u-text-white">
      Sign in to your account {{ text }}
    </h2>
    <LoginCard>
      <button
        class="block mt-3"
        @click="auth.signIn({ provider: 'github' })"
      >
        GitHub
      </button>
    </LoginCard>
  </div>
</template>

<style>
#gradient {
  width: 200px;
  border: 30px solid;
  border-image: repeating-linear-gradient(45deg, #f33, #3bf, #f33 30px) 60;
  padding: 20px;
}
</style>
