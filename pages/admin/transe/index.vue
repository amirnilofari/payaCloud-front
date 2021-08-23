<template>
  <div
    class="h-auto p-8 mx-auto bg-background"
  >
    <h2
      class="mb-5 text-3xl font-bold uppercase text-H1"
    >
      Transes
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-trans="selectedTrans"
      :is-edit="isEdit"
      :users="users"
    ></create-modal>
    <transe-list
      :is-loading="isLoading"
      :transes="transes"
      :is-end="isEnd"
      :key="transes.length"
    ></transe-list>
  </div>
</template>

<script>
  import transeList from '/components/transe/list'
  import createModal from '/components/transe/create-modal'
  export default {
    data() {
      return {
        isEdit: false,
        selectedTrans: {},
        transes: [],
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
      transeList,
      createModal
    },
    created () {
      this.loadData()
      this.getUsers()

      this.$nuxt.$on('closeModal', () => {
        this.selectedTrans = {}
        this.isEdit = false
        this.toggleModal()
      })
      this.$nuxt.$on('toggleCreateModal', () => {
        this.isEdit = false
        this.toggleCreateModal()
      })

      this.$nuxt.$on('onSetTrans', (data) => {
        this.isEdit = true
        this.selectedTrans = data
      })

      this.$nuxt.$on('onLoadData', () => {
        this.pageIndex = 0
        this.transes = []
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
        this.$axios.$get('backend/trans/index?page=' + this.pageIndex)
          .then(response => {
            this.transes = this.transes.concat(response.data);
            if (response.links.next === null) {
              this.isEnd = true
            } else {
              this.isEnd = false
            }
            this.isLoading = false
          })
      },
      getUsers () {
        this.$axios.$get('backend/user/index')
          .then(response => {
            this.users = response.data
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
