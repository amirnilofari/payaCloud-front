<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-10 text-3xl font-bold uppercase text-H1"
    >
      Sections
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-section="selectedSection"
      :clusters="clusters"
      :is-edit="isEdit"
    ></create-modal>
    <section-list
      :is-loading="isLoading"
      :sections="sections"
      :is-end="isEnd"
      :key="sections.length"
    ></section-list>
  </div>
</template>

<script>
  import sectionList from '/components/section/list'
  import createModal from '/components/section/create-modal'
  export default {
    data() {
      return {
        clusters: [],
        sections: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedSection: {},
        isEdit: false,
        pageIndex: 1,
        isEnd: false
      }
    },
    components: {
      sectionList,
      createModal
    },
    created () {
      this.loadData()
      this.getClusters()

      this.$nuxt.$on('closeModal', () => {
        this.selectedSection = {}
        this.isEdit = false
        this.toggleModal()
      })
      this.$nuxt.$on('toggleCreateModal', () => {
        this.isEdit = false
        this.toggleCreateModal()
      })
      this.$nuxt.$on('onLoadData', () => {
        this.pageIndex = 0
        this.sections = []
        this.loadData()
      })
      this.$nuxt.$on('onSetSection', (data) => {
        this.isEdit = true
        this.selectedSection = data
      })
      this.$nuxt.$on('loadMore', () => {
        this.pageIndex++
        this.loadData()
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/section/index?page=' + this.pageIndex)
          .then(response => {
            this.sections = this.sections.concat(response.data);
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
            console.log('cluster', response.data)
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
