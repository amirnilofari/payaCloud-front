<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-10 text-3xl font-bold uppercase text-H1"
    >
      Templates
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-template="selectedTemplate"
      :icons="icons"
      :is-edit="isEdit"
    ></create-modal>
    <template-list
      :is-loading="isLoading"
      :templates="templates"
      :is-end="isEnd"
      :key="templates.length"
    ></template-list>
  </div>
</template>

<script>
  import templateList from '/components/template/list.vue'
  import createModal from '/components/template/create-modal'
  export default {
    data() {
      return {
        templates: [],
        icons: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedTemplate: {},
        isEdit: false,
        pageIndex: 1,
        isEnd: false
      }
    },
    components: {
      templateList,
      createModal
    },
    created () {
      this.loadData()
      this.getIcons()

      this.$nuxt.$on('closeModal', () => {
        this.selectedTemplate = {}
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
      this.$nuxt.$on('onSetTemplate', (data) => {
        this.isEdit = true
        this.selectedTemplate = data
      })
      this.$nuxt.$on('loadMore', () => {
        this.pageIndex++
        this.loadData()
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/template/index?page=' + this.pageIndex)
          .then(response => {
            this.templates = this.templates.concat(response.data);
            if (response.links.next === null) {
              this.isEnd = true
            } else {
              this.isEnd = false
            }
            this.isLoading = false
          })
      },
      getIcons () {
        this.$axios.$get('backend/icon/index')
          .then(response => {
            this.icons = response.data
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
