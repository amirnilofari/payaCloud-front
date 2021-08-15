<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-10 text-3xl font-bold uppercase text-H1"
    >
      Actions
    </h2>
<!--    <create-modal-->
<!--      v-if="showCreateModal"-->
<!--      :selected-center="selectedCenter"-->
<!--      :servers="servers"-->
<!--      :is-edit="isEdit"-->
<!--    ></create-modal>-->
    <action-list
      :is-loading="isLoading"
      :actions="actions"
      :is-end="isEnd"
      :key="actions.length"
    ></action-list>
  </div>
</template>

<script>
  import actionList from '/components/action/list'
  import createModal from '/components/center/create-modal'
  export default {
    data() {
      return {
        servers: [],
        actions: [],
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
      actionList,
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
        this.actions = []
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
        this.$axios.$get('backend/action/index?page=' + this.pageIndex)
          .then(response => {
            console.log('actionList', response)
            this.actions = this.actions.concat(response.data);
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
