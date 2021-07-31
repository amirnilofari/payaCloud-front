<template>
  <transition name="slide">
    <div
      class="fixed inset-0 z-10 overflow-y-auto details-modal" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center w-full min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:mt-4 sm:align-middle sm:max-w-6xl sm:w-full">
          <form
            class="p-6"
          >
            <h3 class="mb-6 text-xl font-semibold text-H3">New Machine</h3>
            <div class="flex flex-wrap">
              <div class="w-full px-4 mb-2 lg:w-6/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-primary"
                  >
                    Name
                  </label>
                  <input
                    v-model="name"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-secondary placeholder-secondary text-H1 focus:outline-none focus:ring"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-6/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-primary"
                  >
                    Clue
                  </label>
                  <input
                    v-model="clue"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-secondary placeholder-secondary text-H1 focus:outline-none focus:ring"
                    placeholder="Clue"
                  />
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-6/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-primary"
                  >
                    Price
                  </label>
                  <input
                    v-model="price"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-secondary placeholder-secondary text-H1 focus:outline-none focus:ring"
                    placeholder="Price"
                  />
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-6/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-primary"
                  >
                    memorySize
                  </label>
                  <input
                    v-model="memorySize"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-secondary placeholder-secondary text-H1 focus:outline-none focus:ring"
                    placeholder="Memory Size"
                  />
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-primary"
                  >
                    Disk Size
                  </label>
                  <input
                    v-model="diskSize"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-secondary placeholder-secondary text-H1 focus:outline-none focus:ring"
                    placeholder="Disk Size"
                  />
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-primary"
                  >
                    Cpu Core
                  </label>
                  <input
                    v-model="cpuCore"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-secondary placeholder-secondary text-H1 focus:outline-none focus:ring"
                    placeholder="Cpu Core"
                  />
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-primary"
                  >
                    status
                  </label>
                  <div class="flex items-center mt-5">
                    <input v-model="status" value="active" id="active" name="status" type="radio" class="w-4 h-4 focus:ring-indigo-500 text-primary border-H2">
                    <label for="active" class="block ml-3 text-sm font-medium text-secondary">
                      Active
                    </label>
                    <input v-model="status" value="pending" id="pending" name="status" type="radio" class="w-4 h-4 ml-5 focus:ring-indigo-500 text-primary border-H2">
                    <label for="pending" class="block ml-3 text-sm font-medium text-secondary">
                      Pending
                    </label>
                  </div>
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-3/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-primary"
                  >
                    User
                  </label>
                  <select
                    v-model="userId"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-secondary placeholder-secondary text-secondary focus:outline-none focus:ring">
                    <option value="" disabled selected>User</option>
                    <option>test1</option>
                    <option>test2</option>
                    <option>test3</option>
                  </select>
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-3/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-primary"
                  >
                    section
                  </label>
                  <select
                    v-model="sectionId"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-secondary placeholder-secondary text-secondary focus:outline-none focus:ring">
                    <option value="" disabled selected>section</option>
                    <option>test1</option>
                    <option>test2</option>
                    <option>test3</option>
                  </select>
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-3/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-primary"
                  >
                    storage
                  </label>
                  <select
                    v-model="storageId"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-secondary placeholder-secondary text-secondary focus:outline-none focus:ring">
                    <option value="" disabled selected>Storage</option>
                    <option>test1</option>
                    <option>test2</option>
                    <option>test3</option>
                  </select>
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-3/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-primary"
                  >
                    Profile
                  </label>
                  <select
                    v-model="profileId"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-secondary placeholder-secondary text-secondary focus:outline-none focus:ring">
                    <option value="" disabled selected>Profile</option>
                    <option>test1</option>
                    <option>test2</option>
                    <option>test3</option>
                  </select>
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-3/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-primary"
                  >
                    Network
                  </label>
                  <select
                    v-model="networkId"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-secondary placeholder-secondary text-secondary focus:outline-none focus:ring">
                    <option value="" disabled selected>Network</option>
                    <option>test1</option>
                    <option>test2</option>
                    <option>test3</option>
                  </select>
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-3/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-primary"
                  >
                    Package
                  </label>
                  <select
                    v-model="packageId"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-secondary placeholder-secondary text-secondary focus:outline-none focus:ring">
                    <option value="" disabled selected>Package</option>
                    <option>test1</option>
                    <option>test2</option>
                    <option>test3</option>
                  </select>
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-3/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-primary"
                  >
                    Address
                  </label>
                  <select
                    v-model="addressId"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-secondary placeholder-secondary text-secondary focus:outline-none focus:ring">
                    <option value="" disabled selected>Address</option>
                    <option>test1</option>
                    <option>test2</option>
                    <option>test3</option>
                  </select>
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-3/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-primary"
                  >
                    Template
                  </label>
                  <select
                    v-model="templateId"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-secondary placeholder-secondary text-secondary focus:outline-none focus:ring">
                    <option value="" disabled selected>Template</option>
                    <option>test1</option>
                    <option>test2</option>
                    <option>test3</option>
                  </select>
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-6/12">
                <div class="relative w-full mt-7">
                  <button
                    @click="close"
                    type="button"
                    class="px-16 py-3 mb-1 mr-1 mr-3 text-sm font-bold uppercase transition-all duration-150 ease-linear border rounded shadow outline-none bg-background text-primary border-primary hover:shadow-lg focus:outline-none"
                  >
                    cancel
                  </button>
                  <button
                    @click="submitForm"
                    type="button"
                    class="px-16 py-3 mb-1 mr-1 text-sm font-bold uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-primary text-background hover:shadow-lg focus:outline-none"
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
    name: "machine-details",
    props: ['machine'],
    data() {
      return {
        userId: '',
        sectionId: '',
        storageId: '',
        profileId: '',
        networkId: '',
        packageId: '',
        addressId: '',
        templateId: '',
        memorySize: '',
        diskSize: '',
        cpuCore: '',
        price: '',
        name: '',
        clue: '',
        status: 'active'
      }
    },
    methods: {
      close() {
        this.$nuxt.$emit('toggleCreateModal')
      },
      submitForm () {
        let formdata = new FormData()
        formdata.append('userId', this.userId)
        formdata.append('sectionId', this.sectionId)
        formdata.append('storageId', this.storageId)
        formdata.append('profileId', this.profileId)
        formdata.append('networkId', this.networkId)
        formdata.append('packageId', this.packageId)
        formdata.append('addressId', this.addressId)
        formdata.append('templateId', this.templateId)
        formdata.append('memorySize', this.memorySize)
        formdata.append('diskSize', this.diskSize)
        formdata.append('cpuCore', this.cpuCore)
        formdata.append('price', this.price)
        formdata.append('name', this.name)
        formdata.append('clue', this.clue)
        formdata.append('status', this.status)

        this.$axios.$post('backend/machine/create',
          formdata)
          .then(response => {
            if (response.status === 200) {
              this.$toast.success('Successfully created!')
            } else {
              this.$toast.error(response.message)
            }
            this.close()
          })
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
