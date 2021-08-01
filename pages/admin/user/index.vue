<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-10 text-3xl font-bold uppercase text-H1"
    >
      users
    </h2>
    <create-modal
      v-if="showCreateModal"
    ></create-modal>
    <user-list
      :is-loading="isLoading"
      :users="users"
      :key="users.length"
    ></user-list>
  </div>
</template>

<script>
  import userList from '/components/user/userList'
  import createModal from '/components/user/create-modal'
  export default {
    data() {
      return {
        users: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
      }
    },
    components: {
      userList,
      createModal
    },
    created () {
      this.loadData()

      this.$nuxt.$on('closeModal', () => {
        this.toggleModal()
      })
      this.$nuxt.$on('toggleCreateModal', () => {
        this.toggleCreateModal()
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/user/index')
          .then(response => {
            this.users = response.data
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
