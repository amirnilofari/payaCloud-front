<template>
  <div>
    <div
      class="card"
    >
      <div class="card-head">
        <div class="card-head-detail">
          <div class="card-head-text">
            <h3 class="card-head-title">Users List</h3>
            <button
              @click="close"
              type="button"
              class="card-head-button"
            >
              create user
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
              Type
            </th>
            <th
              class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-primary text-primary whitespace-nowrap"
            >
              Name
            </th>
            <th
              class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-primary text-primary whitespace-nowrap"
            >
              Email
            </th>
            <th
              class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-primary text-primary whitespace-nowrap"
            >
              Balance
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="users in users"
            :key="users.id"
            class="cursor-pointer hover:bg-background"
          >
            <td
              class="p-4 px-6 text-xs font-bold align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
            >
              {{users.id}}
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
            >
              {{users.type}}
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
            >
              {{users.name}}
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
            >
              {{users.email}}
            </td>
            <td
              class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
            >
              {{users.balance}}
            </td>

          </tr>
          </tbody>
        </table>
      </div>
      <div>
        <loading v-if="isLoading" class="mt-14"></loading>
        <empty-state
          v-else-if="!isLoading && users.length === 0"
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
    props: ['isLoading', 'users', 'isEnd'],
    methods: {
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
