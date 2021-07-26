<template>
  <transition name="slide">
    <div
      class="fixed z-10 inset-0 overflow-y-auto details-modal" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center w-full sm:block sm:p-0">
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block align-bottom bg-white rounded-lg text-left
        shadow-xl transform transition-all sm:mt-4 sm:align-middle sm:max-w-6xl sm:w-full">
          <form
            class="p-6"
          >
            <h3 class="font-semibold mb-6 text-H3 text-xl">New Machine</h3>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-6/12 px-4 mb-2">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-primary text-xs font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    v-model="name"
                    type="text"
                    class="border border-secondary px-3 py-3 placeholder-secondary text-H1 bg-white
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4 mb-2">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-primary text-xs font-bold mb-2"
                  >
                    Clue
                  </label>
                  <input
                    v-model="clue"
                    type="text"
                    class="border border-secondary px-3 py-3 placeholder-secondary text-H1 bg-white
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Clue"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4 mb-2">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-primary text-xs font-bold mb-2"
                  >
                    Price
                  </label>
                  <input
                    v-model="price"
                    type="text"
                    class="border border-secondary px-3 py-3 placeholder-secondary text-H1 bg-white
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Price"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4 mb-2">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-primary text-xs font-bold mb-2"
                  >
                    memorySize
                  </label>
                  <input
                    v-model="memorySize"
                    type="text"
                    class="border border-secondary px-3 py-3 placeholder-secondary text-H1 bg-white
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Memory Size"
                  />
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4 mb-2">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-primary text-xs font-bold mb-2"
                  >
                    Disk Size
                  </label>
                  <input
                    v-model="diskSize"
                    type="text"
                    class="border border-secondary px-3 py-3 placeholder-secondary text-H1 bg-white
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Disk Size"
                  />
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4 mb-2">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-primary text-xs font-bold mb-2"
                  >
                    Cpu Core
                  </label>
                  <input
                    v-model="cpuCore"
                    type="text"
                    class="border border-secondary px-3 py-3 placeholder-secondary text-H1 bg-white
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Cpu Core"
                  />
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4 mb-2">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-primary text-xs font-bold mb-2"
                  >
                    status
                  </label>
                  <div class="flex items-center mt-5">
                    <input v-model="status" value="active" id="active" name="status" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-primary border-H2">
                    <label for="active" class="ml-3 block text-sm font-medium text-secondary">
                      Active
                    </label>
                    <input v-model="status" value="pending" id="pending" name="status" type="radio" class="ml-5 focus:ring-indigo-500 h-4 w-4 text-primary border-H2">
                    <label for="pending" class="ml-3 block text-sm font-medium text-secondary">
                      Pending
                    </label>
                  </div>
                </div>
              </div>
              <div class="w-full lg:w-3/12 px-4 mb-2">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-primary text-xs font-bold mb-2"
                  >
                    User
                  </label>
                  <select
                    v-model="userId"
                    class="border border-secondary px-3 py-3 placeholder-secondary text-secondary bg-white
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    <option value="" disabled selected>User</option>
                    <option>test1</option>
                    <option>test2</option>
                    <option>test3</option>
                  </select>
                </div>
              </div>
              <div class="w-full lg:w-3/12 px-4 mb-2">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-primary text-xs font-bold mb-2"
                  >
                    section
                  </label>
                  <select
                    v-model="sectionId"
                    class="border border-secondary px-3 py-3 placeholder-secondary text-secondary bg-white
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    <option value="" disabled selected>section</option>
                    <option>test1</option>
                    <option>test2</option>
                    <option>test3</option>
                  </select>
                </div>
              </div>
              <div class="w-full lg:w-3/12 px-4 mb-2">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-primary text-xs font-bold mb-2"
                  >
                    storage
                  </label>
                  <select
                    v-model="storageId"
                    class="border border-secondary px-3 py-3 placeholder-secondary text-secondary bg-white
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    <option value="" disabled selected>Storage</option>
                    <option>test1</option>
                    <option>test2</option>
                    <option>test3</option>
                  </select>
                </div>
              </div>
              <div class="w-full lg:w-3/12 px-4 mb-2">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-primary text-xs font-bold mb-2"
                  >
                    Profile
                  </label>
                  <select
                    v-model="profileId"
                    class="border border-secondary px-3 py-3 placeholder-secondary text-secondary bg-white
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    <option value="" disabled selected>Profile</option>
                    <option>test1</option>
                    <option>test2</option>
                    <option>test3</option>
                  </select>
                </div>
              </div>
              <div class="w-full lg:w-3/12 px-4 mb-2">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-primary text-xs font-bold mb-2"
                  >
                    Network
                  </label>
                  <select
                    v-model="networkId"
                    class="border border-secondary px-3 py-3 placeholder-secondary text-secondary bg-white
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    <option value="" disabled selected>Network</option>
                    <option>test1</option>
                    <option>test2</option>
                    <option>test3</option>
                  </select>
                </div>
              </div>
              <div class="w-full lg:w-3/12 px-4 mb-2">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-primary text-xs font-bold mb-2"
                  >
                    Package
                  </label>
                  <select
                    v-model="packageId"
                    class="border border-secondary px-3 py-3 placeholder-secondary text-secondary bg-white
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    <option value="" disabled selected>Package</option>
                    <option>test1</option>
                    <option>test2</option>
                    <option>test3</option>
                  </select>
                </div>
              </div>
              <div class="w-full lg:w-3/12 px-4 mb-2">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-primary text-xs font-bold mb-2"
                  >
                    Address
                  </label>
                  <select
                    v-model="addressId"
                    class="border border-secondary px-3 py-3 placeholder-secondary text-secondary bg-white
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    <option value="" disabled selected>Address</option>
                    <option>test1</option>
                    <option>test2</option>
                    <option>test3</option>
                  </select>
                </div>
              </div>
              <div class="w-full lg:w-3/12 px-4 mb-2">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-primary text-xs font-bold mb-2"
                  >
                    Template
                  </label>
                  <select
                    v-model="templateId"
                    class="border border-secondary px-3 py-3 placeholder-secondary text-secondary bg-white
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    <option value="" disabled selected>Template</option>
                    <option>test1</option>
                    <option>test2</option>
                    <option>test3</option>
                  </select>
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4 mb-2">
                <div class="relative w-full mt-7">
                  <button
                    @click="close"
                    type="button"
                    class="bg-background text-primary border border-primary text-sm font-bold uppercase px-16 py-3 rounded shadow hover:shadow-lg
                   outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mr-3"
                  >
                    cancel
                  </button>
                  <button
                    @click="submitForm"
                    type="button"
                    class="bg-primary text-background text-sm font-bold uppercase px-16 py-3 rounded shadow hover:shadow-lg
                   outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
