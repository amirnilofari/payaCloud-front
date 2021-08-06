<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-10 text-3xl font-bold uppercase text-H1"
    >
      Networks
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-storage="selectedStorage"
      :clusters="clusters"
      :is-edit="isEdit"
    ></create-modal>
    <network-list
      :is-loading="isLoading"
      :networks="networks"
      :is-end="isEnd"
      :key="networks.length"
    ></network-list>
  </div>
</template>

<script>
  import networkList from '/components/network/list'
  import createModal from '/components/network/create-modal'
  export default {
    data() {
      return {
        clusters: [],
        networks: [],
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
      networkList,
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
        this.networks = []
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
        this.$axios.$get('backend/network/index?page=' + this.pageIndex)
          .then(response => {
            this.networks = this.networks.concat(response.data);
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
