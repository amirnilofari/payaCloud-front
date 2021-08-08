<template>
  <div>
    <div class="px-4 py-6 mb-0 bg-white border-0 rounded-t">
      <div class="flex flex-wrap items-center">
        <div class="flex flex-wrap items-center w-full max-w-full px-4">
          <h3
            class="inline text-lg font-semibold text-primary"
          >
            Region List
          </h3>
          <button
            @click="close"
            type="button"
            class="absolute inline-flex justify-center w-full px-10 py-2 mt-3 mr-6 text-base font-medium rounded-md shadow-sm right-16 bg-primary text-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            create region
          </button>
        </div>
      </div>
    </div>
    <loading
      v-if="isLoading"
      class="mt-14"
    ></loading>
    <empty-state
      v-else-if="!isLoading && regions.length === 0"
    ></empty-state>
    <table
      v-else
      class="items-center w-full bg-white border-collapse rounded shadow-lg"
    >
      <thead
        class="bg-background"
      >
      <tr>
        <th
          class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-primary text-primary whitespace-nowrap"
        >
          Id
        </th>
        <th
          class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-primary text-primary whitespace-nowrap"
        >
          Name
        </th>
        
        <th
          class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-primary text-primary whitespace-nowrap"
        >
          status
        </th>
        <th
          class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-primary text-primary whitespace-nowrap"
        >

        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="region in regions"
        :key="region.id"
        class="cursor-pointer hover:bg-background"
      >
        <td
          class="p-4 px-6 text-xs font-bold align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
        >
          {{region.id}}
        </td>
        <th
          class="flex items-center p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
        >
          <img
            :src="region.icon.address"
            class="items-center w-12 h-12 bg-white border-2 rounded-full border-primary"
            alt="..."
          />
          <span
            class="ml-3 font-bold"
          >
              {{region.name}}
            </span>
        </th>
        <td
          class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
        >
          <button
            v-if="region.status === 'active'"
            class="p-2 mr-5 text-white rounded-full pointer-events-none bg-positive hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          </button>
          <button
            v-else
            class="p-2 mr-5 text-white rounded-full pointer-events-none bg-negative hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </td>
        
        <td
          class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
        >
          <button
            class="p-2 mr-5 text-white rounded-full bg-primary hover:shadow-lg"
            @click="onEdit(region)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
    <div
      class="mt-6 text-center"
    >
      <button
        v-if="!isEnd"
        @click="getData"
        class="px-6 py-3 mb-1 mr-1 text-sm font-semibold transition-all duration-150 ease-linear rounded shadow outline-none bg-background text-primary hover:shadow-lg focus:outline-none"
        type="submit"
      >
        Load More
      </button>
    </div>
  </div>
</template>

<script>
  import loading from '/components/loading'
  import emptyState from '/components/empty-state'

  export default {
    components: {
      loading,
      emptyState
    },
    props: ['isLoading', 'regions', 'isEnd'],
    methods: {
      onEdit (region) {
        this.$nuxt.$emit('toggleCreateModal')
        this.$nuxt.$emit('onSetRegion', region)
      },
      close () {
        this.$nuxt.$emit('toggleCreateModal')
      },
      getData () {
        this.$nuxt.$emit('loadMore')
      }
    }
  }
</script>

<style scoped>

</style>
