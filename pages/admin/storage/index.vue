<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-5 text-3xl font-bold uppercase text-H1"
    >
      Storages
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-storage="selectedStorage"
      :clusters="clusters"
      :is-edit="isEdit"
    ></create-modal>
    <storage-list
      :is-loading="isLoading"
      :storages="storages"
      :is-end="isEnd"
      :key="storages.length"
    ></storage-list>
  </div>
</template>

<script>
  import storageList from '/components/storage/list'
  import createModal from '/components/storage/create-modal'
  export default {
    data() {
      return {
        clusters: [],
        storages: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedStorage: {},
        isEdit: false,
        pageIndex: 1,
        isEnd: false
      }
    },
    components: {
      storageList,
      createModal
    },
    created () {
      this.loadData()
      this.getClusters()

      this.$nuxt.$on('closeModal', () => {
        this.selectedStorage = {}
        this.isEdit = false
        this.toggleModal()
      })
      this.$nuxt.$on('toggleCreateModal', () => {
        this.isEdit = false
        this.toggleCreateModal()
      })
      this.$nuxt.$on('onLoadData', () => {
        this.pageIndex = 0
        this.storages = []
        this.loadData()
      })
      this.$nuxt.$on('onSetStorage', (data) => {
        this.isEdit = true
        this.selectedStorage = data
      })
      this.$nuxt.$on('loadMore', () => {
        this.pageIndex++
        this.loadData()
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/storage/index?page=' + this.pageIndex)
          .then(response => {
            if(response.data){
              this.storages = this.storages.concat(response.data)
              if (response.links.next === null) {
                this.isEnd = true
              } else {
                this.isEnd = false
              }
            }
            this.isLoading = false
          })
      },
      getClusters () {
        this.$axios.$get('backend/common/clusters/1')
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
