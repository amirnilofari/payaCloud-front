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
  </div>
</template>

<script>
  import machineList from '/components/machine/list'
  import createMachine from '/components/machine/create-form'

  export default {
    data() {
      return {
        machines: [],
        isLoading: false
      }
    },
    components: {
      machineList,
      createMachine
    },
    mounted() {
      this.isLoading = true
      this.$axios.$get('candy/machine/index')
        .then(response => {
          this.machines = response.data
          this.isLoading = false
          console.log('re', this.machines)

        })
    }
  }
</script>

<style scoped>

</style>
