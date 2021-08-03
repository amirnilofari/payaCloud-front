<template>
  <div
    class="h-auto p-8 mx-auto bg-background"
  >
    <h2
      class="mb-10 text-3xl font-bold uppercase text-H1"
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
        isEdit: false
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
        this.loadData()
      })
      this.$nuxt.$on('onSetServer', (data) => {
        this.isEdit = true
        this.selectedServer = data
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/server/index')
          .then(response => {
            this.servers = response.data
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
