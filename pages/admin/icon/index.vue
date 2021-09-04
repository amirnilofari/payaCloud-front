<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-5 text-3xl font-bold uppercase text-H1"
    >
      Icons
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-icon="selectedIcon"
      :is-edit="isEdit"
    ></create-modal>
    <icon-list
      :is-loading="isLoading"
      :icons="icons"
      :is-end="isEnd"
      :key="icons.length"
    ></icon-list>
  </div>
</template>

<script>
  import iconList from '/components/icon/list'
  import createModal from '/components/icon/create-modal'
  export default {
    data() {
      return {
        icons: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedIcon: {},
        isEdit: false,
        pageIndex: 1,
        isEnd: false
      }
    },
    components: {
      iconList,
      createModal
    },
    created () {
      this.loadData()

      this.$nuxt.$on('closeModal', () => {
        this.selectedIcon = {}
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
      this.$nuxt.$on('onSetIcon', (data) => {
        this.isEdit = true
        this.selectedIcon = data
      })
      this.$nuxt.$on('loadMore', () => {
        this.pageIndex++
        this.loadData()
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/icon/index?page=' + this.pageIndex)
          .then(response => {
            if(response.data){
              this.icons = this.icons.concat(response.data)
              if (response.links.next === null) {
                this.isEnd = true
              } else {
                this.isEnd = false
              }
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
