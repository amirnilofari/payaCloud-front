<template>
  <div
    class="mx-auto bg-secondary h-full p-8"
  >
    <h2
      class="text-3xl uppercase text-white mb-10 font-bold"
    >
      Machines
    </h2>
    <create-machine></create-machine>
    <machine-list
      :is-loading="isLoading"
      :machines="machines"
      class="mt-14"
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
  import createMachine from '/components/machine/create-form'
  import modal from '/components/machine/datails-modal'
  export default {
    data() {
      return {
        machines: [],
        isLoading: false,
        showModal: false,
        selectedMachine: {
          id: 0
        }
      }
    },
    components: {
      machineList,
      createMachine,
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
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('candy/machine/index')
          .then(response => {
            this.machines = response.data
            this.isLoading = false
          })
      },
      getMachineInfo (id) {
        this.$axios.$get('candy/machine/show/'+id)
          .then(response => {
            this.selectedMachine = response.data
            this.toggleModal()
          })
      },
      toggleModal () {
        this.showModal = !this.showModal
      }
    }
  }
</script>

<style scoped>

</style>
