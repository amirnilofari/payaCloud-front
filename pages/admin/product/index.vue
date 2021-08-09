<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-10 text-3xl font-bold uppercase text-H1"
    >
      Products
    </h2>
<!--    <create-modal-->
<!--      v-if="showCreateModal"-->
<!--      :selected-layout="selectedLayout"-->
<!--      :is-edit="isEdit"-->
<!--    ></create-modal>-->
    <product-list
      :is-loading="isLoading"
      :products="products"
      :is-end="isEnd"
      :key="products.length"
    ></product-list>
  </div>
</template>

<script>
  import productList from '/components/product/list'
  import createModal from '/components/layout/create-modal'
  export default {
    data() {
      return {
        products: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedLayout: {},
        isEdit: false,
        pageIndex: 1,
        isEnd: false
      }
    },
    components: {
      productList,
      createModal
    },
    created () {
      this.loadData()
      this.getClusters()

      this.$nuxt.$on('closeModal', () => {
        this.selectedLayout = {}
        this.isEdit = false
        this.toggleModal()
      })
      this.$nuxt.$on('toggleCreateModal', () => {
        this.isEdit = false
        this.toggleCreateModal()
      })
      this.$nuxt.$on('onLoadData', () => {
        this.pageIndex = 0
        this.products = []
        this.loadData()
      })
      this.$nuxt.$on('onSetLayout', (data) => {
        this.isEdit = true
        this.selectedLayout = data
      })
      this.$nuxt.$on('loadMore', () => {
        this.pageIndex++
        this.loadData()
      })
    },
    methods: {
      loadData () {
        this.isLoading = true
        this.$axios.$get('backend/product/index?page=' + this.pageIndex)
          .then(response => {
            console.log('product', response)
            this.products = this.products.concat(response.data);
            if (response.links.next === null) {
              this.isEnd = true
            } else {
              this.isEnd = false
            }
            this.isLoading = false
          })
      },
      getClusters () {
        this.$axios.$get('backend/cluster/index')
          .then(response => {
            this.clusters = response.data
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
