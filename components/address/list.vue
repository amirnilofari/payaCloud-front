<template>
  <div>
    <div class="px-4 py-6 mb-0 bg-white border-0 rounded-t">
      <div class="flex flex-wrap items-center">
        <div class="flex flex-wrap items-center w-full max-w-full px-4">
          <h3
            class="inline text-lg font-semibold text-primary"
          >
            IP List
          </h3>
          <button
            @click="close"
            type="button"
            class="absolute inline-flex justify-center w-full px-10 py-2 mt-3 mr-6 text-base font-medium rounded-md shadow-sm right-16 bg-primary text-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            create IP
          </button>
        </div>
      </div>
    </div>
    <loading
      v-if="isLoading"
      class="mt-14"
    ></loading>
    <empty-state
      v-else-if="!isLoading && addresses.length === 0"
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
          Address
        </th>
        <th
          class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-primary text-primary whitespace-nowrap"
        >
          Gateway
        </th>
        <th
          class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-primary text-primary whitespace-nowrap"
        >
          Netmask
        </th>
        <th
          class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-primary text-primary whitespace-nowrap"
        >
          Package Name
        </th>
        <th
          class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-primary text-primary whitespace-nowrap"
        >

        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="address in addresses"
        :key="address.id"
        class="cursor-pointer hover:bg-background"
      >
        <td
          class="p-4 px-6 text-xs font-bold align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
        >
          {{address.id}}
        </td>
        <td
          class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
        >
          {{address.address}}
        </td>
        <td
          class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
        >
          {{address.gateway}}
        </td>
        <td
          class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
        >
          {{address.netmask}}
        </td>
         <td
          class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
        >
          {{address.package.name}}
        </td>
        <td
          class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
        >
          <button
            class="p-2 mr-5 text-white rounded-full bg-primary hover:shadow-lg"
            @click="onEdit(address)"
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
    props: ['isLoading', 'addresses', 'isEnd'],
    methods: {
      onEdit (address) {
        this.$nuxt.$emit('toggleCreateModal')
        this.$nuxt.$emit('onSetAddress', address)
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
