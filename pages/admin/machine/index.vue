<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-5 text-3xl font-bold uppercase text-H1"
    >
      Machines
    </h2>
    <create-modal
      :users="users"
      :sections="sections"
      :storages="storages"
      :profiles="profiles"
      :packages="packages"
      :templates="templates"
      :addresses="addresses"
      :networks="networks"
      v-if="showCreateModal"
    ></create-modal>
    <machine-list
      :is-loading="isLoading"
      :is-end="isEnd"
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
        users: [],
        sections: [],
        storages: [],
        profiles: [],
        packages: [],
        templates: [],
        addresses: [],
        networks: [],
        machines: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedMachine: {
          id: 0
        },
        pageIndex: 1,
        isEnd: false
      }
    },
    components: {
      machineList,
      createModal,
      modal
    },
    created () {
      this.loadData()
      this.getData()

      this.$nuxt.$on('getMachine', (id) => {
        this.getMachineInfo(id)
      })
      this.$nuxt.$on('closeModal', () => {
        this.toggleModal()
      })
      this.$nuxt.$on('toggleCreateModal', () => {
        this.toggleCreateModal()
      })

      this.$nuxt.$on('onLoadData', () => {
        this.pageIndex = 0
        this.machines = []
        this.loadData()
      })
      this.$nuxt.$on('loadMore', () => {
        this.pageIndex++
        this.loadData()
      })
    },
    methods: {
      getData () {
        this.$axios.$get('backend/user/index')
          .then(response => {
            this.users = response.data
          })

        this.$axios.$get('backend/common/sections/1')
          .then(response => {
            this.sections = response.data
          })

        this.$axios.$get('backend/common/storages/1')
          .then(response => {
            this.storages = response.data
          })

        this.$axios.$get('backend/common/profiles')
          .then(response => {
            this.profiles = response.data
          })

        this.$axios.$get('backend/common/networks/1')
          .then(response => {
            this.networks = response.data
          })

        this.$axios.$get('backend/address/index')
          .then(response => {
            this.addresses = response.data
          })

        this.$axios.$get('backend/common/templates')
          .then(response => {
            this.templates = response.data
          })

        this.$axios.$get('backend/package/index')
          .then(response => {
            this.packages = response.data
          })
      },
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/machine/index?page=' + this.pageIndex)
          .then(response => {
            this.machines = this.machines.concat(response.data);
            if (response.links.next === null) {
              this.isEnd = true
            } else {
              this.isEnd = false
            }
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
