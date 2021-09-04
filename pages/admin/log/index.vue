<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-5 text-3xl font-bold uppercase text-H1"
    >
      Logs
    </h2>
    <log-list
      :is-loading="isLoading"
      :logs="logs"
      :is-end="isEnd"
      :key="logs.length"
    ></log-list>
  </div>
</template>

<script>
  import logList from '/components/log/list'
  export default {
    data() {
      return {
        logs: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        pageIndex: 1,
        isEnd: false
      }
    },
    components: {
      logList
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
        this.logs = []
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
        this.$axios.$get('backend/log/index?page=' + this.pageIndex)
          .then(response => {
            if(response.data){
              this.logs = this.logs.concat(response.data)
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
