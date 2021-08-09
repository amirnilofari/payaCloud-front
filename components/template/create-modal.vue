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
            <h3 class="mb-6 text-xl font-semibold text-H3">New Template</h3>
            <div class="flex flex-wrap">
              <div class="w-full px-4 mb-2 lg:w-4/12">
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
              <div class="w-full px-4 mb-2 lg:w-4/12">
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
              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-primary"
                  >
                    Icon
                  </label>
                  <select
                    v-model="iconId"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-secondary placeholder-secondary text-secondary focus:outline-none focus:ring">
                    <option value="" disabled selected>Icon</option>
                    <option
                      v-for="icon in icons"
                      :key="icon.id"
                      :value="icon.id"
                    >
                      {{icon.name}}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-primary"
                  >
                    Username
                  </label>
                  <input
                    v-model="username"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-secondary placeholder-secondary text-H1 focus:outline-none focus:ring"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-primary"
                  >
                    Password
                  </label>
                  <input
                    v-model="password"
                    type="password"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-secondary placeholder-secondary text-H1 focus:outline-none focus:ring"
                    placeholder="Password"
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
            </div>

            
            <div class="flex flex-wrap">
              <div class="w-full px-4 mb-2">
                <div class="relative w-full mt-7">
                  <button
                    @click="close"
                    type="button"
                    class="px-16 py-3 mb-1 mr-3 text-sm font-bold uppercase transition-all duration-150 ease-linear border rounded shadow outline-none bg-background text-primary border-primary hover:shadow-lg focus:outline-none"
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
        clue: '',
        username: '',
        password: '',
        status: 'Active',
        iconId: '',
      }
    },
    props: ['isEdit', 'selectedTemplate','icons'],
    methods: {
      close() {
        this.$nuxt.$emit('toggleCreateModal')
      },
      submitForm () {
        let formdata = new FormData()
        formdata.append('name', this.name)
        formdata.append('clue', this.clue)
        formdata.append('username', this.username)
        formdata.append('password', this.password)
        formdata.append('status', this.status)
        formdata.append('iconId', this.iconId)

        if (this.isEdit) {
          this.$axios.$post('backend/template/update/' + this.id,
            formdata)
            .then(response => {
              // console.log('edit', response)
              if (response.message) {
                this.$toast.error(response.message)
              } else {
                this.$nuxt.$emit('onLoadData')
                this.$toast.success('Successfully edited!')
              }
              this.close()
            })
        } else {
          this.$axios.$post('backend/template/create',
            formdata)
            .then(response => {
              // console.log('create', response)
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
        this.id = this.selectedTemplate.id
        this.name = this.selectedTemplate.name
        this.clue = this.selectedTemplate.clue
        this.username = this.selectedTemplate.username
        this.password = this.selectedTemplate.password
        this.status = this.selectedTemplate.status
        this.iconId = this.selectedTemplate.icon.id
      } else {
        this.id = ''
        this.name = ''
        this.clue = ''
        this.username = ''
        this.password = ''
        this.status = ''
        this.iconId = ''
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
