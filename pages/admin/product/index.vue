<template>
  <div
    class="h-screen p-8 mx-auto bg-background"
  >
    <h2
      class="mb-5 text-3xl font-bold uppercase text-H1"
    >
      Products
    </h2>
    <create-modal
      v-if="showCreateModal"
      :selected-product="selectedProduct"
      :is-edit="isEdit"
      :pools="pools"
      :regions="regions"
    ></create-modal>
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
  import createModal from '/components/product/create-modal'
  export default {
    data() {
      return {
        pools: [],
        regions: [],
        products: [],
        isLoading: false,
        showCreateModal: false,
        showModal: false,
        selectedProduct: {},
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
      this.getPools()
      this.getRegions()

      this.$nuxt.$on('closeModal', () => {
        this.selectedProduct = {}
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
      this.$nuxt.$on('onSetProduct', (data) => {
        this.isEdit = true
        this.selectedProduct = data
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
            this.products = this.products.concat(response.data);
            if (response.links.next === null) {
              this.isEnd = true
            } else {
              this.isEnd = false
            }
            this.isLoading = false
          })
      },
      getPools () {
        this.$axios.$get('backend/pool/index')
          .then(response => {
            this.pools = response.data
          })
      },
      getRegions () {
        this.$axios.$get('backend/common/regions')
          .then(response => {
            this.regions = response.data
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
