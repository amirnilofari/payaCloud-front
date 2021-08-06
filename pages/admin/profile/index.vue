<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-10 text-3xl font-bold uppercase text-H1"
    >
      Profiles
    </h2>
    <!-- <create-modal
      v-if="showCreateModal"
      :users="users"
    ></create-modal> -->
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

  export default {
    data() {
      return {
        profiles: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedMachine: {
          id: 0
        },
        pageIndex: 1,
        isEnd: false,
        users: []
      }
    },
    components: {
      profileList,
    },
    created () {
      this.loadData()
    

      this.$nuxt.$on('closeModal', () => {
        this.toggleModal()
      })
      this.$nuxt.$on('toggleCreateModal', () => {
        this.toggleCreateModal()
      })

      this.$nuxt.$on('onLoadData', () => {
        this.pageIndex = 0
        this.profiles = []
        this.loadData()
      })

      this.$nuxt.$on('loadMore', () => {
        this.pageIndex++
        this.loadData()
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/profile/index' + this.pageIndex)
          .then(response => {
            console.log(response);
            this.profiles = this.profiles.concat(response.data);
            if (response.links.next === null) {
              this.isEnd = true
            } else {
              this.isEnd = false
            }
            this.isLoading = false
          })
      },
    //   getUsers () {
    //     this.$axios.$get('backend/user/index')
    //       .then(response => {
    //         this.users = response.data
    //       })
    //   },
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
