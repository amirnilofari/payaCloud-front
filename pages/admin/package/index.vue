<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-10 text-3xl font-bold uppercase text-H1"
    >
      Packages
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-package="selectedPackage"
      :is-edit="isEdit"
    ></create-modal>
    <package-list
      :is-loading="isLoading"
      :packages="packages"
      :is-end="isEnd"
      :key="packages.length"
    ></package-list>
  </div>
</template>

<script>
  import packageList from '/components/package/list'
  import createModal from '/components/package/create-modal'
  export default {
    data() {
      return {
        packages: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedPackage: {},
        isEdit: false,
        pageIndex: 1,
        isEnd: false
      }
    },
    components: {
      packageList,
      createModal
    },
    created () {
      this.loadData()

      this.$nuxt.$on('closeModal', () => {
        this.selectedPackage = {}
        this.isEdit = false
        this.toggleModal()
      })
      this.$nuxt.$on('toggleCreateModal', () => {
        this.isEdit = false
        this.toggleCreateModal()
      })
      this.$nuxt.$on('onLoadData', () => {
        this.pageIndex = 0
        this.packages = []
        this.loadData()
      })
      this.$nuxt.$on('onSetPackage', (data) => {
        this.isEdit = true
        this.selectedPackage = data
      })
      this.$nuxt.$on('loadMore', () => {
        this.pageIndex++
        this.loadData()
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/package/index?page=' + this.pageIndex)
          .then(response => {
            this.packages = this.packages.concat(response.data);
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
