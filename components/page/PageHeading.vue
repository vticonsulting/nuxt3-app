<template>
  <div class="p-4 bg-white">
    <div class="mx-auto">
      <div>
        <div>
          <!-- Back -->
          <nav class="sm:hidden" aria-label="Back">
            <a
              href="#"
              class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              <icon-chevron-left-solid class="flex-shrink-0 mr-1 -ml-1 text-gray-400"></icon-chevron-left-solid>
              <span>Back</span>
            </a>
          </nav>

          <breadcrumb-component class="hidden px-4 py-1 -ml-4 bg-white sm:flex"></breadcrumb-component>
        </div>

        <!-- Page Title / Actions  -->
        <div class="mt-2 md:flex md:items-center md:justify-between">
          <div class="flex-1 min-w-0">
            <page-title>Service Area Schedule</page-title>
          </div>

          <!-- Actions -->
          <div class="flex flex-shrink-0 mt-4 md:mt-0 md:ml-4">
            <edit-button></edit-button>

            <publish-button></publish-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>