<template>
  <div
    class="mx-auto bg-secondary h-auto p-8"
  >
    <h2
      class="text-3xl uppercase text-white mb-10 font-bold"
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
  import createModal from '/components/machine/create-modal'
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
