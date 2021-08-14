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
            <h3 class="font-semibold mb-6 text-H3 text-xl">New Center</h3>
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
                    host
                  </label>
                  <input
                    v-model="host"
                    type="text"
                    class="border border-secondary px-3 py-3 placeholder-secondary text-H1 bg-white
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Host"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="w-full lg:w-6/12 px-4 mb-2">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-primary text-xs font-bold mb-2"
                  >
                    proxy
                  </label>
                  <input
                    v-model="proxy"
                    type="text"
                    class="border border-secondary px-3 py-3 placeholder-secondary text-H1 bg-white
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Proxy"
                  />
                </div>
              </div>
              <div class="w-full lg:w-6/12 px-4 mb-2">
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-primary text-xs font-bold mb-2"
                  >
                    port
                  </label>
                  <input
                    v-model="port"
                    type="text"
                    class="border border-secondary px-3 py-3 placeholder-secondary text-H1 bg-white
                   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Port"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="w-full px-4 mb-2">
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
    data() {
      return {
        id: '',
        name: '',
        host: '',
        proxy: '',
        port: ''
      }
    },
    props: ['isEdit', 'selectedCenter', 'servers'],
    methods: {
      close() {
        this.$nuxt.$emit('toggleCreateModal')
      },
      submitForm () {
        let formdata = new FormData()
        formdata.append('name', this.name)
        formdata.append('proxy', this.proxy)
        formdata.append('port', this.port)
        formdata.append('host', this.host)

        if (this.isEdit) {
          this.$axios.$post('backend/center/update/' + this.id,
            formdata)
            .then(response => {
              if (response.message) {
                this.$toast.error(response.message)
              } else {
                this.$nuxt.$emit('onLoadData')
                this.$toast.success('Successfully edited!')
              }
              this.close()
            })
        } else {
          this.$axios.$post('backend/proxy/create',
            formdata)
            .then(response => {
              if (response.message) {
                this.$toast.error(response.message)
              } else {
                this.$nuxt.$emit('onLoadData')
                this.$toast.success('Successfully created!')
              }
              this.close()
            })
        }
      }
    },
    created() {
      if (this.isEdit) {
        this.id = this.selectedCenter.id
        this.name = this.selectedCenter.name
        this.clue = this.selectedCenter.clue
        this.serverId = this.selectedCenter.server.id
      } else {
        this.id = ''
        this.name = ''
        this.clue = ''
        this.serverId = ''
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
