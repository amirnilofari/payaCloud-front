<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-5 text-3xl font-bold uppercase text-H1"
    >
      users
    </h2>
    <create-modal
      v-if="showCreateModal"
    ></create-modal>
    <user-list
      :is-loading="isLoading"
      :users="users"
      :is-end="isEnd"
      :key="users.length"
    ></user-list>
  </div>
</template>

<script>
  import userList from '/components/user/list'
  import createModal from '/components/user/create-modal'
  export default {
    data() {
      return {
        users: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        pageIndex: 1,
        isEnd: false
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
      this.$nuxt.$on('loadMore', () => {
        this.pageIndex++
        this.loadData()
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/user/index?page=' + this.pageIndex)
          .then(response => {
            if(response.data){
              this.users = this.users.concat(response.data)
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
