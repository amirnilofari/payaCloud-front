<template>
  <div>
  <div
    class="card"
  >
    <div class="card-head">
      <div class="card-head-detail">
        <div class="card-head-text">
          <h3 class="card-head-title">Scripts List</h3>
          <button
            @click="close"
            type="button"
            class="card-head-button"
          >
            Create script
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
              content
            </th>
            <th

            >
               wait
            </th>
            <th

            >
               type
            </th>
            <th

            >
               template
            </th>
            <th>
              how To Execute
            </th>
            <th>
              where Is Program
            </th>
            <th>
              where To Upload
            </th>
            <th

            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="script in scripts" :key="script.id">
            <td
              class="font-bold"
            >
              {{ script.id }}
            </td>
            <th
          class="iconSection border-0"
        >
          <img
            :src="script.template.icon.address"
            class="icon"
            alt="..."
          />
          <span
            class="ml-3 font-bold"
          >
              {{script.name}}
          </span>
        </th>
            <td

            >
              {{script.content}}
            </td>
            <td

            >
              {{script.wait}}
            </td>
            <td>
              {{script.type}}
            </td>
            <td>
              {{script.template.name}}
            </td>
            <td>
               {{script.howToExecute}}
            </td>
            <td>
              {{script.whereIsProgram}}
            </td>
            <td>
              {{script.whereToUpload}}
            </td>
            <td
            >
              <button
                class="editBtn"
                @click="onEdit(script)"
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
        v-else-if="!isLoading && scripts.length === 0"
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
    props: ['isLoading', 'scripts', 'isEnd'],
    methods: {
      onEdit (script) {
        this.$nuxt.$emit('toggleCreateModal')
        this.$nuxt.$emit('onSetScript', script)
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
