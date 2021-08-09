<template>
  <div
    class="h-auto p-8 mx-auto bg-background"
  >
    <h2
      class="mb-10 text-3xl font-bold uppercase text-H1"
    >
      Profiles
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-profile="selectedProfile"
      :is-edit="isEdit"
    ></create-modal>
    <profile-list
      :is-loading="isLoading"
      :profiles="profiles"
      :is-end="isEnd"
      :key="profiles.length"
    ></profile-list>
  </div>
</template>

<script>
  import profileList from '/components/profile/list'
  import createModal from '/components/profile/create-modal'
  export default {
    data() {
      return {
        profiles: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedProfile: {},
        isEdit: false,
        pageIndex: 1,
        isEnd: false
      }
    },
    components: {
      profileList,
      createModal
    },
    created () {
      this.loadData()

      this.$nuxt.$on('closeModal', () => {
        this.selectedProfile = {}
        this.isEdit = false
        this.toggleModal()
      })
      this.$nuxt.$on('toggleCreateModal', () => {
        this.isEdit = false
        this.toggleCreateModal()
      })
      this.$nuxt.$on('onLoadData', () => {
        this.pageIndex = 0
        this.profiles = []
        this.loadData()
      })
      this.$nuxt.$on('onSetProfile', (data) => {
        this.isEdit = true
        this.selectedProfile = data
      })
      this.$nuxt.$on('loadMore', () => {
        this.pageIndex++
        this.loadData()
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/profile/index?page=' + this.pageIndex)
          .then(response => {
            this.profiles = this.profiles.concat(response.data);
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
