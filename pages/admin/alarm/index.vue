<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-10 text-3xl font-bold uppercase text-H1"
    >
      Alarms
    </h2>
    <alarm-list
      :is-loading="isLoading"
      :alarms="alarms"
      :is-end="isEnd"
      :key="alarms.length"
    ></alarm-list>
  </div>
</template>

<script>
  import alarmList from '/components/alarm/list'
  export default {
    data() {
      return {
        alarms: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        pageIndex: 1,
        isEnd: false
      }
    },
    components: {
      alarmList
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
        this.alarms = []
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
        this.$axios.$get('backend/alarm/index?page=' + this.pageIndex)
          .then(response => {
            this.alarms = this.alarms.concat(response.data);
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
