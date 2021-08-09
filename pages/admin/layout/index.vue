<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-10 text-3xl font-bold uppercase text-H1"
    >
      Layouts
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-network="selectedNetwork"
      :is-edit="isEdit"
    ></create-modal>
    <layout-list
      :is-loading="isLoading"
      :layouts="layouts"
      :is-end="isEnd"
      :key="layouts.length"
    ></layout-list>
  </div>
</template>

<script>
  import layoutList from '/components/layout/list'
  import createModal from '/components/layout/create-modal'
  export default {
    data() {
      return {
        layouts: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedNetwork: {},
        isEdit: false,
        pageIndex: 1,
        isEnd: false
      }
    },
    components: {
      layoutList,
      createModal
    },
    created () {
      this.loadData()
      this.getClusters()

      this.$nuxt.$on('closeModal', () => {
        this.selectedNetwork = {}
        this.isEdit = false
        this.toggleModal()
      })
      this.$nuxt.$on('toggleCreateModal', () => {
        this.isEdit = false
        this.toggleCreateModal()
      })
      this.$nuxt.$on('onLoadData', () => {
        this.pageIndex = 0
        this.layouts = []
        this.loadData()
      })
      this.$nuxt.$on('onSetNetwork', (data) => {
        this.isEdit = true
        this.selectedNetwork = data
      })
      this.$nuxt.$on('loadMore', () => {
        this.pageIndex++
        this.loadData()
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/layout/index?page=' + this.pageIndex)
          .then(response => {
            this.layouts = this.layouts.concat(response.data);
            if (response.links.next === null) {
              this.isEnd = true
            } else {
              this.isEnd = false
            }
            this.isLoading = false
          })
      },
      getClusters () {
        this.$axios.$get('backend/cluster/index')
          .then(response => {
            this.clusters = response.data
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
