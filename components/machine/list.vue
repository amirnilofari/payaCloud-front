<template>
  <div>
    <div class="rounded-t mb-0 px-4 py-6 border-0 bg-white">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3
            class="font-semibold text-lg text-primary"
          >
            Machines List
          </h3>
        </div>
      </div>
    </div>
    <loading
      v-if="isLoading"
      class="mt-14"
    ></loading>
    <empty-state
      v-else-if="!isLoading && machines.length === 0"
    ></empty-state>
    <table
      v-else
      class="items-center w-full bg-white border-collapse shadow-lg rounded"
    >
      <thead
        class="bg-background"
      >
      <tr>
        <th
          class="text-sm px-6 align-middle border border-primary py-3 text-primary uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
        >
          Id
        </th>
        <th
          class="text-sm px-6 align-middle border border-primary py-3 text-primary uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
        >
          Name
        </th>
        <th
          class="text-sm px-6 align-middle border border-primary py-3 text-primary uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
        >
          Address
        </th>
        <th
          class="text-sm px-6 align-middle border border-primary py-3 text-primary uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
        >
          Memory Size
        </th>
        <th
          class="text-sm px-6 align-middle border border-primary py-3 text-primary uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
        >
          Disk Size
        </th>
        <th
          class="text-sm px-6 align-middle border border-primary py-3 text-primary uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
        >
          Cpu Core
        </th>
        <th
          class="text-sm px-6 align-middle border border-primary py-3 text-primary uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
        >
          Status
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="machine in machines"
      >
        <td
          class="font-bold text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          {{machine.id}}
        </td>
        <th
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center"
        >
          <img
            :src="machine.template.icon.address"
            class="h-12 w-12 bg-white rounded-full border"
            alt="..."
          />
          <span
            class="ml-3 font-bold"
          >
              {{machine.template.name}}
            </span>
        </th>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          {{machine.address.address}}
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          {{machine.memorySize}}
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          {{machine.diskSize}}
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          {{machine.cpuCore}}
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          <button
            v-if="machine.status === 'active'"
            class="bg-positive rounded-full text-white p-2 hover:shadow-lg mr-5 pointer-events-none"
          >
            {{machine.status}}
<!--            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"-->
<!--                 stroke="currentColor">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>-->
<!--            </svg>-->
          </button>
          <button
            v-else
            class="bg-negative rounded-full text-white p-2 hover:shadow-lg mr-5 pointer-events-none"
          >
            {{machine.status}}
            <!--            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"-->
<!--                 stroke="currentColor">-->
<!--              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>-->
<!--            </svg>-->
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import loading from '/components/loading'
  import emptyState from '/components/empty-state'

  export default {
    name: "list",
    components: {
      loading,
      emptyState
    },
    props: ['isLoading', 'machines']
  }
</script>

<style scoped>

</style>
