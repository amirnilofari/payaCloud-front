<template>
  <div>
    <div class="px-4 py-6 mb-0 bg-white border-0 rounded-t">
      <div class="flex flex-wrap items-center">
        <div class="flex flex-wrap items-center w-full max-w-full px-4">
          <h3
            class="inline text-lg font-semibold text-primary"
          >
            Servers List
          </h3>
          <button
            @click="close"
            type="button"
            class="absolute inline-flex justify-center w-full px-10 py-2 mt-3 mr-6 text-base font-medium rounded-md shadow-sm right-16 bg-primary text-background focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            create server
          </button>
        </div>
      </div>
    </div>
    <loading
      v-if="isLoading"
      class="mt-14"
    ></loading>
    <empty-state
      v-else-if="!isLoading && servers.length === 0"
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
          Address
        </th>
        <th
          class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-primary text-primary whitespace-nowrap"
        >
          Username
        </th>
        <th
          class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-primary text-primary whitespace-nowrap"
        >
          Password
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="server in makeList"
        :key="server.id"
        class="cursor-pointer hover:bg-background"
      >
        <td
          class="p-4 px-6 text-xs font-bold align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
        >
          {{server.id}}
        </td>
        <td
          class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
        >
          {{server.name}}
        </td>
        <td
          class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
        >
          {{server.address}}
        </td>
        <td
          class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
        >
          {{server.username}}
        </td>
        <td
          class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
        >
          {{server.password}}
        </td>
      </tr>
      </tbody>
    </table>
    <div
      class="mt-6 text-center"
    >
      <button
        v-if=" servers.length >  listIndex"
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
    name: "list",
    data () {
      return {
        pageSize: 10,
        pageIndex: 0,
        makeList: [],
        listIndex: 0
      }
    },
    components: {
      loading,
      emptyState
    },
    props: ['isLoading', 'servers'],
    methods: {
      close () {
        this.$nuxt.$emit('toggleCreateModal')
      },
      getData () {
        this.listIndex = (this.pageIndex + 1) * this.pageSize
        for(let i = (this.pageSize * this.pageIndex) ; i < this.listIndex ; i++) {
         if (this.servers[i]) {
           this.makeList.push(this.servers[i])
         }
        }
        this.pageIndex = this.pageIndex + 1
      }
    },
    mounted() {
      if (this.servers) {
        this.getData()
      }
    }
  }
</script>

<style scoped>

</style>
