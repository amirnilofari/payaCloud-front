<template>
  <div>
    <div
      class="card"
    >
      <div class="card-head">
        <div class="card-head-detail">
          <div class="card-head-text">
            <h3 class="card-head-title">List Proxies</h3>
            <button
              @click="close"
              type="button"
              class="card-head-button"
            >
              Create
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
              host
            </th>
            <th
              class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-primary text-primary whitespace-nowrap"
            >
              proxy
            </th>
            <th
              class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-primary text-primary whitespace-nowrap"
            >
              port
            </th>
            <th
              class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-primary text-primary whitespace-nowrap"
            >
              Edit
            </th>
          </tr>
          </thead>
          <tbody
            v-if="proxies.length > 0"
          >
          <tr
            v-for="proxy in proxies"
            :key="proxy.id"
            class="cursor-pointer hover:bg-background"
          >
            <td
              class="p-4 px-6 text-xs font-bold align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
            >
              {{proxy.id}}
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
            >
              {{proxy.host}}
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
            >
              {{proxy.proxy}}
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
            >
              {{proxy.port}}
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
            >
              <button
                class="p-2 mr-5 text-white rounded-full bg-primary hover:shadow-lg"
                @click="onEdit(proxy)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          v-else-if="!isLoading && proxies.length === 0"
        ></empty-state>
      </div>
    </div>
    <div class="mt-8 text-center">
      <button
        v-if="!isEnd && proxies.length > 0"
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
    props: ['isLoading', 'proxies', 'isEnd'],
    methods: {
      onEdit (proxy) {
        this.$nuxt.$emit('toggleCreateModal')
        this.$nuxt.$emit('onSetProxy', proxy)
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
