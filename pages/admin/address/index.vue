<template>
  <div
    class="h-auto p-8 mx-auto bg-background"
  >
    <h2
      class="mb-5 text-3xl font-bold uppercase text-H1"
    >
      IPs
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-address="selectedAddress"
      :packages = "packages"
      :is-edit="isEdit"
    ></create-modal>
    <address-list
      :is-loading="isLoading"
      :addresses="addresses"
      :is-end="isEnd"
      :key="addresses.length"
    ></address-list>
  </div>
</template>

<script>
  import addressList from '/components/address/list'
  import createModal from '/components/address/create-modal'
  export default {
    data() {
      return {
        addresses: [],
        packages: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedAddress: {},
        isEdit: false,
        pageIndex: 1,
        isEnd: false
      }
    },
    components: {
      addressList,
      createModal
    },
    created () {
      this.loadData()
      this.getPackages()

      this.$nuxt.$on('closeModal', () => {
        this.selectedAddress = {}
        this.isEdit = false
        this.toggleModal()
      })
      this.$nuxt.$on('toggleCreateModal', () => {
        this.isEdit = false
        this.toggleCreateModal()
      })
      this.$nuxt.$on('onLoadData', () => {
        this.pageIndex = 0
        this.addresses = []
        this.loadData()
      })
      this.$nuxt.$on('onSetAddress', (data) => {
        this.isEdit = true
        this.selectedAddress = data
      })
      this.$nuxt.$on('loadMore', () => {
        this.pageIndex++
        this.loadData()
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/address/index?page=' + this.pageIndex)
          .then(response => {
            if(response.data){
              this.addresses = this.addresses.concat(response.data)
              if (response.links.next === null) {
                this.isEnd = true
              } else {
                this.isEnd = false
              }
            }
            this.isLoading = false
          })
      },
      getPackages () {
        this.$axios.$get('backend/package/index')
          .then(response => {
            this.packages = response.data
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
