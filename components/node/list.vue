
<template>
  <div>
  <div
    class="card"
  >
    <div class="card-head">
      <div class="card-head-detail">
        <div class="card-head-text">
          <h3 class="card-head-title">List Nodes</h3>
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
              Network Name
            </th>
            <th
              
            >
              Package Name
            </th>
            <th
              
            >
              Pool Name
            </th>
            <th
              
            >
              Section Name
            </th>
            <th
              
            >
              Storage Name
            </th>
            <th
              
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="node in nodes" :key="node.id">
            <td
              class="font-bold"
            >
              {{ node.id }}
            </td>
            <td
              
            >
              {{ node.name }}
            </td>
            <td
            
            >
              {{ node.network.name }}
            </td>
            <td
              
            >
              {{ node.package.name }}
            </td>
            <td
              
            >
              {{ node.pool.name }}
            </td>
            <td
              
            >
              {{ node.section.name }}
            </td>
            <td
              
            >
              {{ node.storage.name }}
            </td>
            <td
            >
              <button
                class="editBtn"
                @click="onEdit(node)"
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
        v-else-if="!isLoading && nodes.length === 0"
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
    props: ['isLoading', 'nodes', 'isEnd'],
    methods: {
      onEdit (node) {
        this.$nuxt.$emit('toggleCreateModal')
        this.$nuxt.$emit('onSetNode', node)
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
