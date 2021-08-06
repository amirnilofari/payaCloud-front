<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-10 text-3xl font-bold uppercase text-H1"
    >
      Sections
    </h2>
<!--    <create-modal-->
<!--      v-if="showCreateModal"-->
<!--      :selected-section="selectedSection"-->
<!--      :servers="servers"-->
<!--      :is-edit="isEdit"-->
<!--    ></create-modal>-->
    <sectoin-list
      :is-loading="isLoading"
      :sections="sections"
      :is-end="isEnd"
      :key="sections.length"
    ></sectoin-list>
  </div>
</template>

<script>
  import sectoinList from '/components/sectoin/list'
  // import createModal from '/components/center/create-modal'
  export default {
    data() {
      return {
        servers: [],
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
      sectoinList,
      // createModal
    },
    created () {
      this.loadData()
      // this.getServers()

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
      this.$nuxt.$on('onSetServer', (data) => {
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
      // getServers () {
      //   this.$axios.$get('backend/server/index')
      //     .then(response => {
      //       this.servers = response.data
      //     })
      // },
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
