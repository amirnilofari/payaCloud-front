<template>
  <transition name="slide">
    <div
      class="fixed inset-0 z-10 overflow-y-auto details-modal" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center w-full min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity bg-opacity-50 bg-H1" aria-hidden="true"></div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div class="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-6 sm:align-middle sm:max-w-xl sm:w-full">
          <form
            class="p-6"
          >
            <h3 v-if="!isEdit" class="mb-6 ml-4 text-xl font-semibold text-primary">New Product</h3>
            <h3 v-else class="mb-6 ml-4 text-xl font-semibold text-primary">Edit Product</h3>
            <div class="flex flex-wrap">

              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-H1"
                  >
                    Name
                  </label>
                  <input
                    v-model="name"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-primary placeholder-primary text-H1 focus:outline-none focus:ring"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-H1"
                  >
                    sort
                  </label>
                  <input
                    v-model="sort"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-primary placeholder-primary text-H1 focus:outline-none focus:ring"
                    placeholder="Sort"
                  />
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-H1"
                  >
                    price
                  </label>
                  <input
                    v-model="price"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-primary placeholder-primary text-H1 focus:outline-none focus:ring"
                    placeholder="Price"
                  />
                </div>
              </div>

               <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-H1"
                  >
                    cpu Core
                  </label>
                  <input
                    v-model="cpuCore"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-primary placeholder-primary text-H1 focus:outline-none focus:ring"
                    placeholder="Cpu Core"
                  />
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-H1"
                  >
                    disk Size
                  </label>
                  <input
                    v-model="diskSize"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-primary placeholder-primary text-H1 focus:outline-none focus:ring"
                    placeholder="Disk Size"
                  />
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-H1"
                  >
                    memory Size
                  </label>
                  <input
                    v-model="memorySize"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-primary placeholder-primary text-H1 focus:outline-none focus:ring"
                    placeholder="Memory Size"
                  />
                </div>
              </div>

              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-H1"
                  >
                    band width
                  </label>
                  <input
                    v-model="bandwidth"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-primary placeholder-primary text-H1 focus:outline-none focus:ring"
                    placeholder="Band Width"
                  />
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-H1"
                  >
                    Pool
                  </label>
                  <select
                    v-model="poolId"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-primary placeholder-primary text-primary focus:outline-none focus:ring">
                    <option value="" disabled selected>Pool</option>
                    <option
                      v-for="pool in pools"
                      :key="pool.id"
                      :value="pool.id"
                    >
                      {{pool.name}}
                    </option>
                  </select>
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-H1"
                  >
                    Region
                  </label>
                  <select
                    v-model="regionId"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-primary placeholder-primary text-primary focus:outline-none focus:ring">
                    <option value="" disabled selected>Region</option>
                    <option
                      v-for="region in regions"
                      :key="region.id"
                      :value="region.id"
                    >
                      {{region.name}}
                    </option>
                  </select>
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-6/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-3 text-xs font-bold uppercase text-H1"
                  >
                    status
                  </label>
                  <div class="flex items-center ">
                    <input v-model="status" value="active" id="active" name="status" type="radio" class="w-4 h-4 focus:ring-indigo-500 text-primary border-H2">
                    <label for="active" class="block ml-3 text-sm font-medium text-H1">
                      active
                    </label>
                    <input v-model="status" value="custom" id="custom" name="status" type="radio" class="w-4 h-4 ml-5 focus:ring-indigo-500 text-primary border-H2">
                    <label for="custom" class="block ml-3 text-sm font-medium text-H1">
                      custom
                    </label>
                  </div>
                </div>
              </div>

              <div class="w-full px-4 mb-2 lg:px-1">
                <div class="flex flex-wrap w-full mt-7">
                  <button
                    @click="close"
                    type="button"
                    class="cancelBtn"
                  >
                    cancel
                  </button>
                  <button
                    @click="submitForm"
                    type="button"
                    class="submitBtn"
                  >
                    submit
                  </button>
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        id: '',
        name: '',
        price: '',
        cpuCore: '',
        diskSize: '',
        memorySize: '',
        bandwidth: '',
        sort: '',
        regionId: '',
        poolId: '',
        status: 'active'
      }
    },
    props: ['isEdit', 'selectedProduct', 'regions', 'pools'],
    methods: {
      close() {
        this.$nuxt.$emit('toggleCreateModal')
      },
      submitForm () {
        let formdata = new FormData()
        formdata.append('name', this.name)
        formdata.append('price', this.price)
        formdata.append('cpuCore', this.cpuCore)
        formdata.append('memorySize', this.memorySize)
        formdata.append('diskSize', this.diskSize)
        formdata.append('bandwidth', this.bandwidth)
        formdata.append('regionId', this.regionId)
        formdata.append('poolId', this.poolId)
        formdata.append('sort', this.sort)
        formdata.append('status', this.status)
        if (this.isEdit) {
          this.$axios.$post('backend/product/update/' + this.id,
            formdata)
            .then(response => {
              if (response.message) {
                this.$toast.error(response.message)
              } else {
                this.$nuxt.$emit('onLoadData')
                this.$toast.success('Successfully edited!')
                this.close()
              }
            })
        } else {
          this.$axios.$post('backend/product/create',
            formdata)
            .then(response => {
              if (response.message) {
                this.$toast.error(response.message)
              } else {
                this.$nuxt.$emit('onLoadData')
                this.$toast.success('Successfully created!')
                this.close()
              }
            })
        }
      }
    },
    created() {
      if (this.isEdit) {
        this.id = this.selectedProduct.id
        this.name = this.selectedProduct.name
        this.price = this.selectedProduct.price
        this.cpuCore = this.selectedProduct.cpuCore
        this.status = this.selectedProduct.status
        this.sort = this.selectedProduct.sort
        this.memorySize = this.selectedProduct.memorySize
        this.diskSize = this.selectedProduct.diskSize
        this.bandwidth = this.selectedProduct.bandwidth
        this.regionId = this.selectedProduct.region.id
        this.poolId = this.selectedProduct.pool.id
      } else {
        this.id = ''
        this.name = ''
        this.price = ''
        this.cpuCore = ''
        this.status = 'active'
        this.sort = ''
        this.memorySize = ''
        this.diskSize = ''
        this.bandwidth = ''
        this.regionId = ''
        this.poolId = ''
      }
    }
  }
</script>

<style scoped>
  .details-modal .image-cont{
    top: -60px;
    position: absolute;
  }
  .slide-enter {
    opacity: 1;
  }

  .slide-enter-active {
    opacity: 1;
    animation: slide-in 0.5s ease-out forwards;
    transition: opacity 0.5s;
  }

  .slide-leave-to {
    opacity: 1;
  }

  .slide-leave-active {
    animation: slide-out 0.5s ease-out forwards;
    opacity: 0;
    transition: opacity 0.5s;
  }

  @keyframes slide-in {
    0% {
      transform: translateY(-15px);
    }
    30% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-30px);
    }
  }
</style>
