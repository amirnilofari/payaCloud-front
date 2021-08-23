<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-5 text-3xl font-bold uppercase text-H1"
    >
      Servers
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-server="selectedServer"
      :is-edit="isEdit"
    ></create-modal>
    <server-list
      :is-loading="isLoading"
      :servers="servers"
      :is-end="isEnd"
      :key="servers.length"
    ></server-list>
  </div>
</template>

<script>
  import serverList from '/components/server/list'
  import createModal from '/components/server/create-modal'
  export default {
    data() {
      return {
        servers: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedServer: {},
        isEdit: false,
        pageIndex: 1,
        isEnd: false
      }
    },
    components: {
      serverList,
      createModal
    },
    created () {
      this.loadData()

      this.$nuxt.$on('closeModal', () => {
        this.selectedServer = {}
        this.isEdit = false
        this.toggleModal()
      })
      this.$nuxt.$on('toggleCreateModal', () => {
        this.isEdit = false
        this.toggleCreateModal()
      })
      this.$nuxt.$on('onLoadData', () => {
        this.pageIndex = 0
        this.servers = []
        this.loadData()
      })
      this.$nuxt.$on('onSetServer', (data) => {
        this.isEdit = true
        this.selectedServer = data
      })
      this.$nuxt.$on('loadMore', () => {
        this.pageIndex++
        this.loadData()
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/server/index?page=' + this.pageIndex)
          .then(response => {
            this.servers = this.servers.concat(response.data);
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
