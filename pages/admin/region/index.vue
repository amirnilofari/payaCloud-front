<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-10 text-3xl font-bold uppercase text-H1"
    >
      Regions
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-region="selectedRegion"
      :icons="icons"
      :is-edit="isEdit"
    ></create-modal>
    <region-list
      :is-loading="isLoading"
      :regions="regions"
      :is-end="isEnd"
      :key="regions.length"
    ></region-list>
  </div>
</template>

<script>
  import regionList from '/components/region/list'
  import createModal from '/components/region/create-modal'
  export default {
    data() {
      return {
        regions: [],
        icons: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedRegion: {},
        isEdit: false,
        pageIndex: 1,
        isEnd: false
      }
    },
    components: {
      regionList,
      createModal
    },
    created () {
      this.loadData()
      this.getIcons()

      this.$nuxt.$on('closeModal', () => {
        this.selectedRegion = {}
        this.isEdit = false
        this.toggleModal()
      })
      this.$nuxt.$on('toggleCreateModal', () => {
        this.isEdit = false
        this.toggleCreateModal()
      })
      this.$nuxt.$on('onLoadData', () => {
        this.pageIndex = 0
        this.icons = []
        this.loadData()
      })
      this.$nuxt.$on('onSetRegion', (data) => {
        this.isEdit = true
        this.selectedRegion = data
      })
      this.$nuxt.$on('loadMore', () => {
        this.pageIndex++
        this.loadData()
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/region/index?page=' + this.pageIndex)
          .then(response => {
            this.regions = this.regions.concat(response.data);
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
