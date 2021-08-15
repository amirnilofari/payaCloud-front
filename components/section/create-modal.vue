<template>
  <transition name="slide">
    <div
      class="fixed inset-0 z-10 overflow-y-auto details-modal" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center w-full min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div class="inline-block text-left align-bottom transition-all transform rounded-lg shadow-xl bg-opacity-95 bg-H1 sm:mt-4 sm:align-middle sm:max-w-6xl sm:w-full">
          <form
            class="p-6"
          >
            <h3 class="mb-6 text-xl font-semibold text-white">New Section</h3>
            <div class="flex flex-wrap">
             
              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold text-white uppercase"
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
                    class="block mb-2 text-xs font-bold text-white uppercase"
                  >
                    Clue
                  </label>
                  <input
                    v-model="clue"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-primary placeholder-primary text-H1 focus:outline-none focus:ring"
                    placeholder="Clue"
                  />
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold text-white uppercase"
                  >
                    Cluster
                  </label>
                  <select
                    v-model="clusterId"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-primary placeholder-primary text-primary focus:outline-none focus:ring">
                    <option value="" disabled selected>Cluster</option>
                    <option
                      v-for="cluster in clusters"
                      :key="cluster.id"
                      :value="cluster.id"
                    >
                      {{cluster.name}}
                    </option>
                  </select>
                </div>
              </div>
   
              <div class="w-full px-4 mb-2">
                <div class="flex flex-wrap w-full mt-7">
                  <button
                    @click="close"
                    type="button"
                    class="relative w-full px-16 py-3 mb-1 mr-1 text-sm font-bold uppercase transition-all duration-150 ease-linear border rounded shadow outline-none lg:w-3/12 bg-background text-primary border-primary hover:shadow-lg focus:outline-none"
                  >
                    cancel
                  </button>
                  <button
                    @click="submitForm"
                    type="button"
                    class="relative w-full px-16 py-3 mb-1 mr-1 text-sm font-bold uppercase transition-all duration-150 ease-linear border rounded shadow outline-none lg:w-3/12 text-background bg-primary border-primary hover:shadow-lg focus:outline-none"
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
        clue: '',
        clusterId: ''
      }
    },
    props: ['isEdit', 'selectedSection', 'clusters'],
    methods: {
      close() {
        this.$nuxt.$emit('toggleCreateModal')
      },
      submitForm () {
        let formdata = new FormData()
        formdata.append('name', this.name)
        formdata.append('clue', this.clue)
        formdata.append('clusterId', this.clusterId)

        if (this.isEdit) {
          this.$axios.$post('backend/section/update/' + this.id,
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
          this.$axios.$post('backend/section/create',
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
        this.id = this.selectedSection.id
        this.name = this.selectedSection.name
        this.clue = this.selectedSection.clue
        this.clusterId = this.selectedSection.cluster.id
      } else {
        this.id = ''
        this.name = ''
        this.clue = ''
        this.clusterId = ''
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
