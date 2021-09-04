<template>
  <div
    class="h-auto p-8 mx-auto bg-background"
  >
    <h2
      class="mb-5 text-3xl font-bold uppercase text-H1"
    >
      Hooks
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-hook="selectedHook"
      :is-edit="isEdit"
    ></create-modal>
    <hook-list
      :is-loading="isLoading"
      :hooks="hooks"
      :is-end="isEnd"
      :key="hooks.length"
    ></hook-list>
  </div>
</template>

<script>
  import hookList from '/components/hook/list'
  import createModal from '/components/hook/create-modal'
  export default {
    data() {
      return {
        hooks: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedHook: {},
        isEdit: false,
        pageIndex: 1,
        isEnd: false
      }
    },
    components: {
      hookList,
      createModal
    },
    created () {
      this.loadData()

      this.$nuxt.$on('closeModal', () => {
        this.selectedHook = {}
        this.isEdit = false
        this.toggleModal()
      })
      this.$nuxt.$on('toggleCreateModal', () => {
        this.isEdit = false
        this.toggleCreateModal()
      })
      this.$nuxt.$on('onLoadData', () => {
        this.pageIndex = 0
        this.hooks = []
        this.loadData()
      })
      this.$nuxt.$on('onSetHook', (data) => {
        this.isEdit = true
        this.selectedHook = data
      })
      this.$nuxt.$on('loadMore', () => {
        this.pageIndex++
        this.loadData()
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/hook/index?page=' + this.pageIndex)
          .then(response => {
            if(response.data){
              this.hooks = this.hooks.concat(response.data)
              if (response.links.next === null) {
                this.isEnd = true
              } else {
                this.isEnd = false
              }
            }
            this.isLoading = false
          })
      },
      toggleModal () {
        this.showModal = !this.showModal
      },
      toggleCreateModal () {
        this.showCreateModal = !this.showCreateModal
      }
    }
  }
</script>

<style scoped>

</style>
