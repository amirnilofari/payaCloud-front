<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-5 text-3xl font-bold uppercase text-H1"
    >
      Proxies
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-proxy="selectedProxy"
      :is-edit="isEdit"
    ></create-modal>
    <proxy-list
      :is-loading="isLoading"
      :proxies="proxies"
      :is-end="isEnd"
      :key="proxies.length"
    ></proxy-list>
  </div>
</template>

<script>
  import proxyList from '/components/proxy/list'
  import createModal from '/components/proxy/create-modal'
  export default {
    data() {
      return {
        proxies: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedProxy: {},
        isEdit: false,
        pageIndex: 1,
        isEnd: false
      }
    },
    components: {
      proxyList,
      createModal
    },
    created () {
      this.loadData()

      this.$nuxt.$on('closeModal', () => {
        this.selectedProxy = {}
        this.isEdit = false
        this.toggleModal()
      })
      this.$nuxt.$on('toggleCreateModal', () => {
        this.isEdit = false
        this.toggleCreateModal()
      })
      this.$nuxt.$on('onLoadData', () => {
        this.pageIndex = 0
        this.proxies = []
        this.loadData()
      })
      this.$nuxt.$on('onSetProxy', (data) => {
        this.isEdit = true
        this.selectedProxy = data
      })
      this.$nuxt.$on('loadMore', () => {
        this.pageIndex++
        this.loadData()
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/proxy/index?page=' + this.pageIndex)
          .then(response => {
            if(response.data){
              this.proxies = this.proxies.concat(response.data)
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
