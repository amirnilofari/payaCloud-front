<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-10 text-3xl font-bold uppercase text-H1"
    >
      Scripts
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-network="selectedNetwork"
      :templates="templates"
      :is-edit="isEdit"
    ></create-modal>
    <script-list
      :is-loading="isLoading"
      :scripts="scripts"
      :is-end="isEnd"
      :key="scripts.length"
    ></script-list>
  </div>
</template>

<script>
  import scriptList from '/components/script/list'
  import createModal from '/components/script/create-modal'
  export default {
    data() {
      return {
        templates: [],
        scripts: [],
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
      scriptList,
      createModal
    },
    created () {
      this.loadData()
      this.getTemplates()

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
        this.scripts = []
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
        this.$axios.$get('backend/script/index?page=' + this.pageIndex)
          .then(response => {
            this.scripts = this.scripts.concat(response.data);
            if (response.links.next === null) {
              this.isEnd = true
            } else {
              this.isEnd = false
            }
            this.isLoading = false
          })
      },
      getTemplates () {
        this.$axios.$get('backend/template/index')
          .then(response => {
            this.templates = response.data
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
