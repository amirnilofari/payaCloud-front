<template>
  <div
    class="h-auto p-8 mx-auto bg-background"
  >
    <h2
      class="mb-10 text-3xl font-bold uppercase text-H1"
    >
      Transes
    </h2>
    <create-modal
      v-if="showCreateModal"
    ></create-modal>
    <transe-list
      :is-loading="isLoading"
      :transes="transes"
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
        transes: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedMachine: {
          id: 0
        }
      }
    },
    components: {
      transeList,
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
        this.$axios.$get('backend/trans/index')
          .then(response => {
            this.transes = response.data
            // console.log('transes', this.transes)
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
