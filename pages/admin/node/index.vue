<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-5 text-3xl font-bold uppercase text-H1"
    >
      Nodes
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-node="selectedNode"
      :networks="networks"
      :packags="packags"
      :pools="pools"
      :sections="sections"
      :storages="storages"
      :is-edit="isEdit"
    ></create-modal>
    <node-list
      :is-loading="isLoading"
      :nodes="nodes"
      :is-end="isEnd"
      :key="nodes.length"
    ></node-list>
  </div>
</template>

<script>
  import nodeList from '/components/node/list'
  import createModal from '/components/node/create-modal'
  export default {
    data() {
      return {
        nodes: [],
        networks: [],
        packags: [],
        pools: [],
        sections: [],
        storages: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedNode: {},
        isEdit: false,
        pageIndex: 1,
        isEnd: false
      }
    },
    components: {
      nodeList,
      createModal
    },
    created () {
      this.loadData()
      this.getNetworks()
      this.getPackags()
      this.getPools()
      this.getSections()
      this.getStorages()

      this.$nuxt.$on('closeModal', () => {
        this.selectedNode = {}
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
        this.packags = []
        this.pools = []
        this.sections = []
        this.storages = []
        this.loadData()
      })
      this.$nuxt.$on('onSetNode', (data) => {
        this.isEdit = true
        this.selectedNode = data
      })
      this.$nuxt.$on('loadMore', () => {
        this.pageIndex++
        this.loadData()
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/node/index?page=' + this.pageIndex)
          .then(response => {
            this.nodes = this.nodes.concat(response.data);
            if (response.links.next === null) {
              this.isEnd = true
            } else {
              this.isEnd = false
            }
            this.isLoading = false
          })
      },
      getNetworks () {
        this.$axios.$get('backend/network/index')
          .then(response => {
            this.networks = response.data
          })
      },
      getPackags () {
        this.$axios.$get('backend/package/index')
          .then(response => {
            this.packags = response.data
          })
      },
      getPools () {
        this.$axios.$get('backend/pool/index')
          .then(response => {
            this.pools = response.data
          })
      },
      getSections () {
        this.$axios.$get('backend/section/index')
          .then(response => {
            this.sections = response.data
          })
      },
      getStorages () {
        this.$axios.$get('backend/storage/index')
          .then(response => {
            this.storages = response.data
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

