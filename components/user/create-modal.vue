<template>
    <div
      class="fixed inset-0 z-10 overflow-y-auto details-modal" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center w-full min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 ">
       <div class="fixed inset-0 transition-opacity bg-opacity-50 bg-H1" aria-hidden="true"></div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div class="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-6 sm:align-middle sm:max-w-xl sm:w-full">

          <form
            class="p-6"
          >
            <h3 class="mb-6 ml-4 text-xl font-semibold text-primary">New User</h3>

            <div class="flex flex-wrap">
              <div class="w-full px-4 mb-2 lg:w-6/12">
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

              <div class="w-full px-4 mb-2 lg:w-6/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-2 text-xs font-bold uppercase text-H1"
                  >
                    Email
                  </label>
                  <input
                    v-model="email"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border rounded shadow border-primary placeholder-primary text-H1 focus:outline-none focus:ring"
                    placeholder="email"
                  />
                </div>
              </div>

                <div class="w-full px-4 mb-2 lg:w-4/12">
                <div class="relative w-full mb-3">
                  <label
                    class="block mb-3 text-xs font-bold uppercase text-H1"
                  >
                    type
                  </label>
                  <div class="flex items-center">
                    <input v-model="type" value="admin" id="admin" name="type" type="radio" class="w-4 h-4 focus:ring-indigo-500 text-primary border-H2">
                    <label for="admin" class="block ml-3 text-sm font-medium text-H1">
                      Admin
                    </label>
                    <input v-model="type" value="user" id="user" name="type" type="radio" class="w-4 h-4 ml-5 focus:ring-indigo-500 text-primary border-H2">
                    <label for="user" class="block ml-3 text-sm font-medium text-H1">
                      User
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
  
</template>

<script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        type: '',
      }
    },
    methods: {
      close() {
        this.$nuxt.$emit('toggleCreateModal')
      },
      submitForm () {
        let formdata = new FormData()
         formdata.append('name', this.name)
         formdata.append('email', this.email)
         formdata.append('type', this.type)


        this.$axios.$post('backend/user/create',
          formdata)
          .then(response => {
            if (response.message) {
              this.$toast.error(response.message)
            } else {
              this.$toast.success('Successfully created!')
              this.close()
            }
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
