<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-5 text-3xl font-bold uppercase text-H1"
    >
      Clusters
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-cluster="selectedCluster"
      :centers="centers"
      :is-edit="isEdit"
    ></create-modal>
    <cluster-list
      :is-loading="isLoading"
      :clusters="clusters"
      :is-end="isEnd"
      :key="clusters.length"
    ></cluster-list>
  </div>
</template>

<script>
  import clusterList from '/components/cluster/list'
  import createModal from '/components/cluster/create-modal'
  export default {
    data() {
      return {
        clusters: [],
        centers: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedCluster: {},
        isEdit: false,
        pageIndex: 1,
        isEnd: false
      }
    },
    components: {
      clusterList,
      createModal
    },
    created () {
      this.loadData()
        this.getCenters()
      this.$nuxt.$on('closeModal', () => {
        this.selectedCluster = {}
        this.isEdit = false
        this.toggleModal()
      })
      this.$nuxt.$on('toggleCreateModal', () => {
        this.isEdit = false
        this.toggleCreateModal()
      })
      this.$nuxt.$on('onLoadData', () => {
        this.pageIndex = 0
        this.clusters = []
        this.loadData()
      })
      this.$nuxt.$on('onSetCluster', (data) => {
        this.isEdit = true
        this.selectedCluster = data
      })
      this.$nuxt.$on('loadMore', () => {
        this.pageIndex++
        this.loadData()
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/cluster/index?page=' + this.pageIndex)
          .then(response => {
            if(response.data){
              this.clusters = this.clusters.concat(response.data)
              if (response.links.next === null) {
                this.isEnd = true
              } else {
                this.isEnd = false
              }
            }
            this.isLoading = false
          })
      },
      getCenters () {
        this.$axios.$get('backend/common/centers/1')
          .then(response => {
            this.centers = response.data
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
