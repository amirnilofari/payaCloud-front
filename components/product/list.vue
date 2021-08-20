<template>
  <div>
  <div
    class="card"
  >
    <div class="card-head">
      <div class="card-head-detail">
        <div class="card-head-text">
          <h3 class="card-head-title">Products List</h3>
          <button
            @click="close"
            type="button"
            class="card-head-button"
          >
            Create product
          </button>
        </div>
      </div>
    </div>
    <div class="table-frame">
      <table>
        <thead>
          <tr>
            <th
              
            >
              Id
            </th>
            <th
             
            >
              Name
            </th>
            <th
              
            >
              price
            </th>
            <th
              
            >
              pool
            </th>
            <th>
              region
            </th>
            <th>
              status
            </th>
            <th>
              cpuCore
            </th>
            <th>
              diskSize
            </th>
            <th>
              memorySize
            </th>
            <th
              
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td
              class="font-bold"
            >
              {{ product.id }}
            </td>
            <td
              
            >
              {{ product.name }}
            </td>
            <td
            
            >
              {{ product.price }}
            </td>
            <td
              
            >
              {{product.pool.name}}
            </td>
            <td>
              {{product.region.name}}
            </td>
            <td
          class="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 text-H3 whitespace-nowrap"
        >
          <button
            v-if="product.status === 'active'"
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
            <td>
              {{product.cpuCore}}
            </td>
            <td>
              {{product.diskSize}}
            </td>
            <td>
              {{product.memorySize}}
            </td>
            <td
            >
              <button
                class="editBtn"
                @click="onEdit(product)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
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
        v-else-if="!isLoading && products.length === 0"
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
    props: ['isLoading', 'products', 'isEnd'],
    methods: {
      onEdit (product) {
        this.$nuxt.$emit('toggleCreateModal')
        this.$nuxt.$emit('onSetProduct', product)
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
