<template>
  <div>
    <div class="rounded-t mb-0 px-4 py-6 border-0 bg-white">
      <div class="flex flex-wrap items-center">
        <div class="flex flex-wrap items-center w-full px-4 max-w-full">
          <h3
            class="font-semibold text-lg text-primary inline"
          >
            Trans List
          </h3>
          <button
            @click="close"
            type="button"
            class="mt-3 right-16 absolute justify-center bg-primary w-full inline-flex justify-center rounded-md shadow-sm px-10 py-2 text-base font-medium text-background
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            create trans
          </button>
        </div>
      </div>
    </div>
    <loading
      v-if="isLoading"
      class="mt-14"
    ></loading>
    <empty-state
      v-else-if="!isLoading && transes.length === 0"
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
          Type
        </th>
        <th
          class="text-sm px-6 align-middle border border-primary py-3 text-primary uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
        >
          Amount
        </th>
        <th
          class="text-sm px-6 align-middle border border-primary py-3 text-primary uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
        >
          User
        </th>
        <th
          class="text-sm px-6 align-middle border border-primary py-3 text-primary uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
        >
          Status
        </th>
        <th
          class="text-sm px-6 align-middle border border-primary py-3 text-primary uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
        >
          Created At
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="trans in makeList"
        class="cursor-pointer hover:bg-background"
      >
        <td
          class="font-bold text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          {{trans.id}}
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          {{trans.type}}
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          {{trans.amount}}
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          {{trans.user.name}}
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          {{trans.status}}
        </td>
        <td
          class="text-H3 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
        >
          {{trans.createdAt}}
        </td>
      </tr>
      </tbody>
    </table>
    <div
      class="text-center mt-6"
    >
      <button
        v-if="listIndex < transes.length"
        @click="getData"
        class="bg-background text-primary text-sm font-semibold px-6 py-3 rounded shadow hover:shadow-lg
                   outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
    props: ['isLoading', 'transes'],
    methods: {
      close () {
        this.$nuxt.$emit('toggleCreateModal')
      },
      getData () {
        this.listIndex = (this.pageIndex + 1) * this.pageSize
        for(let i = (this.pageSize * this.pageIndex) ; i < this.listIndex ; i++) {
         // console.log('transes', i)
         if (this.transes[i]) {
           this.makeList.push(this.transes[i])
         }
        }
        // console.log('length', this.transes.length)
        // console.log('listIndex', this.listIndex)
        this.pageIndex = this.pageIndex + 1
      }
    },
    mounted() {
      if (this.transes) {
        this.getData()
      }
    }
  }
</script>

<style scoped>

</style>
