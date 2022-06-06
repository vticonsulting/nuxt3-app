<script>
const sampleLogs = [{
  FieldTech: "Sean O'Brien",
  PreviousClaimNumber: "home",
  NextClaimNumber: "0529620832",
  MilageToInspection: 32,
}]

export default {
  props: {
    mileage: {
      type: Array,
      default: () => sampleLogs
    }
  },
}
</script>

<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >Field Technician</th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >Previous Claim Number</th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >Next Claim Number</th>
                <th
                  scope="col"
                  class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                >Mileage To Inspection</th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- Odd row -->
              <tr v-for="item in mileage" class="bg-white">
                <td
                  class="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap"
                >{{ item.FieldTech }}</td>
                <td
                  class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                >{{ item.PreviousClaimNumber }}</td>
                <td
                  class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                >{{ item.NextClaimNumber }}</td>
                <td
                  class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap"
                >{{ item.MilageToInspection }}</td>
                <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <a href="#" class="text-primary-600 hover:text-primary-900">Edit</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>