<template>
  <div class="w-full max-w-lg lg:max-w-xs">
    <label for="search" class="sr-only">Search</label>

    <div class="relative text-gray-400 focus-within:text-gray-600">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <icon-search-solid></icon-search-solid>
      </div>

      <input
        id="search"
        class="block w-full py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 bg-white border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-600 focus:ring-white focus:border-white sm:text-sm"
        placeholder="Search for Field Tech"
        type="search"
        name="search"
      />
    </div>
  </div>
</template>