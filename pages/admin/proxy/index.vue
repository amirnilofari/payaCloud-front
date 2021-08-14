<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-10 text-3xl font-bold uppercase text-H1"
    >
      Proxies
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-center="selectedCenter"
      :servers="servers"
      :is-edit="isEdit"
    ></create-modal>
    <proxy-list
      :is-loading="isLoading"
      :proxies="proxies"
      :is-end="isEnd"
      :key="proxies.length"
    ></proxy-list>
  </div>
</template>

<script>
  import proxyList from '/components/proxy/list'
  import createModal from '/components/proxy/create-modal'
  export default {
    data() {
      return {
        servers: [],
        proxies: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedCenter: {},
        isEdit: false,
        pageIndex: 1,
        isEnd: false
      }
    },
    components: {
      proxyList,
      createModal
    },
    created () {
      this.loadData()
      this.getServers()

      this.$nuxt.$on('closeModal', () => {
        this.selectedCenter = {}
        this.isEdit = false
        this.toggleModal()
      })
      this.$nuxt.$on('toggleCreateModal', () => {
        this.isEdit = false
        this.toggleCreateModal()
      })
      this.$nuxt.$on('onLoadData', () => {
        this.pageIndex = 0
        this.proxies = []
        this.loadData()
      })
      this.$nuxt.$on('onSetCenter', (data) => {
        this.isEdit = true
        this.selectedCenter = data
      })
      this.$nuxt.$on('loadMore', () => {
        this.pageIndex++
        this.loadData()
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/proxy/index?page=' + this.pageIndex)
          .then(response => {
            this.proxies = this.proxies.concat(response.data);
            if (response.links.next === null) {
              this.isEnd = true
            } else {
              this.isEnd = false
            }
            this.isLoading = false
          })
      },
      getServers () {
        this.$axios.$get('backend/server/index')
          .then(response => {
            this.servers = response.data
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
