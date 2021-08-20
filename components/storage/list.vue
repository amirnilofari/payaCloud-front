<template>
  <div>
    <div
      class="card"
    >
      <div class="card-head">
        <div class="card-head-detail">
          <div class="card-head-text">
            <h3 class="card-head-title">Storages List</h3>
            <button
              @click="close"
              type="button"
              class="card-head-button"
            >
              Create storage
            </button>
          </div>
        </div>
      </div>
      <div class="table-frame">
        <table
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
              clue
            </th>
            <th
              class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-primary text-primary whitespace-nowrap"
            >
              cluster name
            </th>
            <th
              class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-primary text-primary whitespace-nowrap"
            >

            </th>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="storage in storages"
            :key="storage.id"
            class="cursor-pointer hover:bg-background"
          >
            <td
              class="p-4 px-6 text-xs font-bold align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
            >
              {{storage.id}}
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
            >
              {{storage.name}}
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
            >
              {{storage.clue}}
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
            >
              {{storage.cluster.name}}
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
            >
              <button
                class="p-2 mr-5 text-white rounded-full bg-primary hover:shadow-lg"
                @click="onEdit(storage)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div>
        <loading v-if="isLoading" class="mt-14"></loading>
        <empty-state
          v-else-if="!isLoading && storages.length === 0"
        ></empty-state>
      </div>
    </div>
    <div class="mt-8 text-center">
      <button
        v-if="!isEnd"
        @click="getData"
        class="moreBtn"
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
    props: ['isLoading', 'storages', 'isEnd'],
    methods: {
      onEdit (storage) {
        this.$nuxt.$emit('toggleCreateModal')
        this.$nuxt.$emit('onSetStorage', storage)
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
