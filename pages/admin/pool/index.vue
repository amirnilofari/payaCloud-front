<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-10 text-3xl font-bold uppercase text-H1"
    >
      Pools
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-network="selectedNetwork"
      :is-edit="isEdit"
    ></create-modal>
    <pool-list
      :is-loading="isLoading"
      :pools="pools"
      :is-end="isEnd"
      :key="pools.length"
    ></pool-list>
  </div>
</template>

<script>
  import poolList from '/components/pool/list'
  import createModal from '/components/pool/create-modal'
  export default {
    data() {
      return {
        pools: [],
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
      poolList,
      createModal
    },
    created () {
      this.loadData()

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
        this.pools = []
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
        this.$axios.$get('backend/pool/index?page=' + this.pageIndex)
          .then(response => {
            this.pools = this.pools.concat(response.data);
            if (response.links.next === null) {
              this.isEnd = true
            } else {
              this.isEnd = false
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
