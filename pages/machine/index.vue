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
    <machine-list></machine-list>
  </div>
</template>

<script>
  import machineList from '/components/machine/list'
  import createMachine from '/components/machine/create-form'
  export default {
      components: {
        machineList,
        createMachine
      },
      mounted () {
        this.$axios.$get('candy/machine/index')
        //   .then(response)
        // {
        //   console.log('hi', response)
        // }
        // const { Api } = require("/services/Api");
        // Api.post('/text')
      }
    }
</script>

<style scoped>

</style>
