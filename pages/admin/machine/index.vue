<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-10 text-3xl font-bold uppercase text-H1"
    >
      Machines
    </h2>
    <create-modal
      v-if="showCreateModal"
    ></create-modal>
    <machine-list
      :is-loading="isLoading"
      :machines="machines"
    ></machine-list>
    <modal
      v-if="showModal"
      :machine="selectedMachine"
    >
    </modal>
  </div>
</template>

<script>
  import machineList from '/components/machine/list'
  import createModal from '/components/machine/create-modal'
  import modal from '/components/machine/datails-modal'
  export default {
    data() {
      return {
        machines: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedMachine: {
          id: 0
        }
      }
    },
    components: {
      machineList,
      createModal,
      modal
    },
    created () {
      this.loadData()

      this.$nuxt.$on('getMachine', (id) => {
        this.getMachineInfo(id)
      })
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
        this.$axios.$get('backend/machine/index')
          .then(response => {
            this.machines = response.data
            this.isLoading = false
          })
      },
      getMachineInfo (id) {
        this.$axios.$get('backend/machine/show/'+id)
          .then(response => {
            this.selectedMachine = response.data
            this.toggleModal()
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
